import { useState, useEffect } from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './syncreon logo.png';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup'
import '../src/OrderDetails.css';
import UpdateModal from './UpdateModal';
import { useNavigate } from 'react-router-dom';
import Upload from './Upload';

function OrderDetails() {
  const [orderDetails, setOrderDetails] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState();
  const navigate = useNavigate();


  // To get All orders.
  useEffect(() => {
    fetch('http://localhost:4000/api/getAllOrders')
      .then(response => response.json())
      .then(data => {
        setOrderDetails(data);
        console.log(data);
      });
  }, []);

  ////To handle Open model
  const openEditModal = (order) => {
    setSelectedOrder(order)
    setShowEditModal(true)
  }

  //To handle close model
  const closeEditModal = () => {
    setSelectedOrder(undefined)
    setShowEditModal(false)
  }


  const renderOrderCards = () => {
    const referenceNumbers = [];
    return orderDetails.map(order => {
      if(referenceNumbers.includes(order.referenceNumber)) {
        return;
      }
      referenceNumbers.push(order.referenceNumber);
      const customerAddress = `${order.address.name}\n${order.address.line1}\n${order.address.line2}`
      const customerName = `${order.customer.firstName} ${order.customer.lastName}`
      const customerPhone = order.customer.phoneNumber
      const customerEmail = order.customer.email

      return <Card className='p-3 mb-4'>
          <Row>
            <Col xs={12} className='mb-3'>
            <Card.Header><h5><b>Order {referenceNumbers.length}</b></h5></Card.Header>
            </Col>
            <Col xs={12} md={3}className='customerColumn'>
              <h6>Customer Details</h6>
              <p>Name: {customerName}<br/>Phone No: {customerPhone}<br/>Email: {customerEmail}</p>
            </Col>
            <Col xs={12} md={3}>
              <h6>Address:</h6>
              <p>{customerAddress}</p>
            </Col>
            <Col xs={12} md={3}>
              <h6>Orders</h6>
              <ListGroup className="justify-content-center">
              {
                order.orderList.map(item => {
                  return <ListGroup.Item>
                      <h6>{item.itemNumber}</h6>
                      <p><b>{item.itemDescription}</b></p>
                    </ListGroup.Item>
                })
              }
            </ListGroup>
            </Col>
            <Col xs={12} className="myButton">
              <Button className='btn-primary' size='15px' onClick={() => openEditModal(order)}>UPDATE/EDIT</Button>
            </Col>
        </Row>
      </Card>
    })
  }
  
  return (
    <div>
      <Navbar>
        <Container>
            <img
              src={logo}
              height="120"
              className="d-inline-block align-top m-auto"
            />
        </Container>
      </Navbar>
      <div className='backButton' style={{paddingLeft:'70px'}}>
        <Button className='btn btn-dark' onClick={()=> navigate("/")}>Back</Button>
      </div>
      <Container>
        <h4 className='mt-4 mb-4'>Orders</h4>
        <div>
          {
            orderDetails.length > 0 ? renderOrderCards() : <Upload />
          }
        </div>
      </Container>
      {showEditModal ? <UpdateModal show={showEditModal} onHide={closeEditModal} data={selectedOrder}/> : null}
    </div>
  );
}

export default OrderDetails;