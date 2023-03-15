import {Modal, Button, Form, ListGroup} from 'react-bootstrap';
import React, { useState } from 'react';



// Update Model
const UpdateModal = ({data, show, onHide}) => {
    const [formData, setFormData] = useState(data);

    const updateFormData = (keyName, newValue, index) => {
        const newData = {...formData};
        if (index !== null && index !== undefined) {
            newData[keyName][index] = newValue;
        } else {
            newData[keyName] = newValue;
        }
        console.log('UPDATE', JSON.stringify(newData));
        setFormData(newData);        
    }

    const updateOnDb = () => {
        const options = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }

        fetch('http://localhost:4000/api/update', options)
        .then(response => {
            if(response.status === 200) {
                window.alert('Updated successfully');
                onHide()
                window.location.reload();
            } else {
                response.json().then(data => {
                    window.alert(data.msg)
                })
            }
        })
    }

    return <Modal show={show} onHide={onHide}>
        {
            formData ? <Form className="m-4">

            <h4>Update Order</h4>

            <Form.Group className="mb-3">
                <Form.Label>Reference Number</Form.Label>
                <Form.Control disabled type="text" defaultValue={formData.referenceNumber}/>
            </Form.Group>

            <h5>Customer Details</h5>

            <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control onChange={e => {
                    const newData = {...formData.customer, firstName: e.target.value}
                    updateFormData('customer', newData);
                }} 
                type="text" 
                defaultValue={formData.customer.firstName}/>
            </Form.Group>


            <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control onChange={e => {
                    const newData = {...formData.customer, lastName: e.target.value}
                    updateFormData('customer', newData);
                }} 
                type="text" defaultValue={formData.customer.lastName}/>
            </Form.Group>


            <Form.Group className="mb-3" >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control onChange={e => {
                    const newData = {...formData.customer, phoneNumber: e.target.value}
                    updateFormData('customer', newData);
                }} type="text" defaultValue={formData.customer.phoneNumber}/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Email Address</Form.Label>
                <Form.Control onChange={e => {
                    const newData = {...formData.customer, email: e.target.value}
                    updateFormData('customer', newData);
                }} type="text" defaultValue={formData.customer.email}/>
            </Form.Group>

            <h5>Address</h5>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={e => {
                    const newData = {...formData.address, name: e.target.value}
                    updateFormData('customer', newData);
                }} type="text" defaultValue={formData.address.name}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Type</Form.Label>
                <Form.Control onChange={e => {
                    const newData = {...formData.address, type: e.target.value}
                    updateFormData('customer', newData);
                }}  type="text" defaultValue={formData.address.type}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Address Line 1</Form.Label>
                <Form.Control onChange={e => {
                    const newData = {...formData.address, line1: e.target.value}
                    updateFormData('customer', newData);
                }} type="text" defaultValue={formData.address.line1}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Address Line 2</Form.Label>
                <Form.Control onChange={e => {
                    const newData = {...formData.address, line2: e.target.value}
                    updateFormData('customer', newData);
                }} type="text" defaultValue={formData.address.line2}/>
            </Form.Group>

            <h5>Orders</h5>

            <ListGroup>
                {
                    formData.orderList.map(order => {
                        const orderIndex = formData.orderList.indexOf(order);

                        return <ListGroup.Item>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Item Number</Form.Label>
                                <Form.Control disabled type="text" defaultValue={order.itemNumber}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Item Description</Form.Label>
                                <Form.Control onChange={e => {
                                    const newData = {...order, itemDescription: e.target.value}
                                    updateFormData('orderList', newData, orderIndex);
                                }} type="text" defaultValue={order.itemDescription}/>
                            </Form.Group>
                        </ListGroup.Item>
                    })
                }
            </ListGroup>

            <Button className='mt-4 btn-primary' onClick={() => updateOnDb()}>Apply Changes</Button>

            </Form> : null
        }
</Modal>
}

export default UpdateModal;