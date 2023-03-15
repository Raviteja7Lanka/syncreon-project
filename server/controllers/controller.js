const Customer = require('../mongodb/models/customer-model');
const Order = require('../mongodb/models/order-model');
const Address = require('../mongodb/models/address-model');
const OrderContent = require('../mongodb/models/order-content-model');

const fs = require('fs');
const xml2js = require('xml2js');


//upload file from the front end api
uploadToDb = async(req, res) => {
    let fileData = Buffer.alloc(0);

    req.on('data', chunk => {
        fileData = Buffer.concat([fileData, chunk]);
    });

    req.on('end', () => {
        const result = parseXml(fileData)
        return res.status(result.success ? 201 : 500).send(result)
    });
}


//parsing the xml to the database.
const parseXml = (xml) => {
    let success = true;
    xml2js.parseString(xml, async (err, result) => {
        if (err) {
            console.error(err);
            success = false;
        } else if (result === null) {
            success = false;
        } else {
            const orders = result.TransactionRequest.Orders[0].Order;
            for (let i = 0; i < orders.length; i++) {
                const orderData = result.TransactionRequest.Orders[0].Order[i]
                const cust = orderData.Customer[0];
                const add = orderData.Address[0];
                const orderContentList = orderData.OrderLines[0].OrderLine;

                const custBody = {
                    customerCode: cust.CustomerCode[0],
                    firstName: cust.FirstName[0],
                    lastName: cust.LastName[0],
                    phoneNumber: cust.Phone[0],
                    email: cust.Email[0],
                }

                const addressBody = {
                    addressCode: `add${i + 1}`,
                    customerCode: cust.CustomerCode[0],
                    name: add.FullName[0],
                    type: add.AddressType[0],
                    line1: add.AddressLine1[0],
                    line2: add.AddressLine2[0],
                }

                const orderBody = {
                    addressCode: `add${i + 1}`,
                    referenceNumber: orderData.ReferenceNum[0],
                    countryCode: cust.CustomerCode[0],
                    customerCode: cust.CustomerCode[0],
                }
                const orderContentBody = [];
                for (let j = 0; j < orderContentList.length; j++) {
                    orderContentBody[j] = {
                        referenceNumber: orderData.ReferenceNum[0],
                        itemNumber: orderContentList[j].ItemNum[0],
                        itemDescription: orderContentList[j].ItemDescription[0],
                    };
                }

                const address = new Address(addressBody);
                const customer = new Customer(custBody);
                const order = new Order(orderBody);

                try {
                    await OrderContent.insertMany(orderContentBody);
                }
                catch (error) {
                    success = false;
                    console.log("errror", error);
                } try {
                    await address.save();
                }
                catch (error) {
                    success = false;
                    console.log("errror", error);
                } try {
                    await customer.save();
                }
                catch (error) {
                    success = false;
                    console.log("errror", error);
                } try {
                    await order.save();
                }
                catch (error) {
                    success = false;
                    console.log("errror", error);
                }
            }
        }
    })

    return {
        success: success,
        msg: success ? 'Records added to database' : 'Error occurred'
    }
}


//loading the data base with xml data api
loadingTransaction = async (req, res) => {
    const xml = fs.readFileSync('./Sample.xml', 'utf-8');
    let success = true;
    let message = "";
    await xml2js.parseString(xml, async (err, result) => {
        if (err) {
            console.error(err);
        } else {
            const orders = result.TransactionRequest.Orders[0].Order;
            for (let i = 0; i < orders.length; i++) {
                const orderData = result.TransactionRequest.Orders[0].Order[i]
                const cust = orderData.Customer[0];
                const add = orderData.Address[0];
                const orderContentList = orderData.OrderLines[0].OrderLine;
                // console.log("each key>>>>>>>>>>>>>>>>>>>>>>", orderData, "11111111111111", cust, "22222222222222", add);

                const custBody = {
                    customerCode: cust.CustomerCode[0],
                    firstName: cust.FirstName[0],
                    lastName: cust.LastName[0],
                    phoneNumber: cust.Phone[0],
                    email: cust.Email[0],
                }

                const addressBody = {
                    addressCode: `add${i + 1}`,
                    customerCode: cust.CustomerCode[0],
                    name: add.FullName[0],
                    type: add.AddressType[0],
                    line1: add.AddressLine1[0],
                    line2: add.AddressLine2[0],
                }

                const orderBody = {
                    addressCode: `add${i + 1}`,
                    referenceNumber: orderData.ReferenceNum[0],
                    countryCode: cust.CustomerCode[0],
                    customerCode: cust.CustomerCode[0],
                }
                const orderContentBody = [];
                for (let j = 0; j < orderContentList.length; j++) {
                    orderContentBody[j] = {
                        referenceNumber: orderData.ReferenceNum[0],
                        itemNumber: orderContentList[j].ItemNum[0],
                        itemDescription: orderContentList[j].ItemDescription[0],
                    };
                }

                const address = new Address(addressBody);
                const customer = new Customer(custBody);
                const order = new Order(orderBody);

                try {
                    await OrderContent.insertMany(orderContentBody);
                }
                catch (error) {
                    success = false;
                    console.log("errror", error);
                } try {
                    await address.save();
                }
                catch (error) {
                    success = false;
                    console.log("errror", error);
                } try {
                    await customer.save();
                }
                catch (error) {
                    success = false;
                    console.log("errror", error);
                } try {
                    await order.save();
                }
                catch (error) {
                    success = false;
                    console.log("errror", error);
                }
            }
        }
    });
    return res.status(201).send({
        success,
        message: success ? "Records added to database" : "Could not add records",
    })
}


//getting all orders details from the database.
getAllOrders = async (req, res) => {
    const data = await Order.aggregate([{
        $lookup: {
            from: Customer.collection.name,
            localField: "customerCode",
            foreignField: "customerCode",
            as: "customer"
        },
    },
    { $unwind: "$customer" },
    {
        $lookup: {
            from: Address.collection.name,
            localField: "addressCode",
            foreignField: "addressCode",
            as: "address"
        },
    },
    { $unwind: "$address" },
    {
        $lookup: {
            from: OrderContent.collection.name,
            localField: "referenceNumber",
            foreignField: "referenceNumber",
            as: "orderList"
        }
    }])
    res.status(200).send(data);
    // console.log("total data"+data)
}

//updating the database with this api
updateOrder = async (req, res) => {
    try {
        const customerData = req.body.customer;
        const addressData = req.body.address;
        const orderListData = req.body.orderList;

        const customerId = customerData._id;
        delete customerData._id;
        const customerUpdate = await Customer.findOneAndUpdate({ _id: customerId }, customerData, { new: true });
        
        const addressId = addressData._id;
        delete addressData._id;
        const addressUpdate = await Address.findOneAndUpdate({ _id: addressId }, customerData, { new: true });

        for (let index = 0; index < orderListData.length; index++) {
            const order = orderListData[index];
            //delete order._id;
            const orderUpdate = await OrderContent.findOneAndUpdate({ _id: order._id }, order, { new: true });
        }
        console.log("order details"+orderListData);
        res.status(200).send({
            msg: 'Updated fields',
            customer: customerUpdate,
            address: addressUpdate
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            msg: 'Error: ' + error.message
        })
    }
};

//exporting all the fuctions to the routes
module.exports = {
    loadingTransaction,
    getAllOrders,
    updateOrder,
    uploadToDb
}