import React, { useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import TicketTable from '../../components/ticket-table/ticket-table'
// import tickets from '../../assets/data/dummy-ticket.json'
import { BreadCrumb } from '../../components/breadcrumb/breadcrumb'
import DefaultLayout from '../../layout/DefaultLayout'
import { Link } from 'react-router-dom'
import { fetchAllTickets } from '../ticket-listing/ticketsAction'
const Dashboard = () => {
    const dispatch = useDispatch();
    const { tickets } = useSelector((state) => state.tickets);
  
    useEffect(() => {
      if (!tickets.length) {
        dispatch(fetchAllTickets());
      }
    }, [tickets, dispatch]);
  
    const pendingTickets = tickets.filter((row) => row.status !== "Closed");
    const totlatTickets = tickets.length;
    return (
        <DefaultLayout>
        <Container>
        <Row>
        <Col>
          <BreadCrumb page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Link to="/Addticket">
            <Button
              variant="info"
              style={{ fontSize: "2rem", padding: "10px 30px" }}
            >
              Add New Ticket
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="text-center  mb-2">
          <div>Total tickets: {totlatTickets}</div>
          <div>Pending tickets: {pendingTickets.length}</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">Recently Added tickets</Col>
      </Row>
      <hr />

      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
        </Container>
        </DefaultLayout>
    )
}

export default Dashboard