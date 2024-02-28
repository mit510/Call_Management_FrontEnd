import React, {  useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BreadCrumb } from '../../components/breadcrumb/breadcrumb'
import { SearchForm } from "../../components/search-form/SearchForm";
import TicketTable from '../../components/ticket-table/ticket-table';
import DefaultLayout from "../../layout/DefaultLayout";
import { Link } from 'react-router-dom'
import {  useDispatch } from "react-redux";
import { fetchAllTickets } from "./ticketsAction";
const TicketListing = () => {

   
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllTickets());
    }, [dispatch])

    return (
        <DefaultLayout>
        <Container>
            <Row>
                <Col>
                    <BreadCrumb page="Ticket Lists" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to='/AddTicket'>
                    <Button variant="info">Add New Ticket</Button>
                    </Link>
                </Col>
                <Col className="text-right">
                    <SearchForm />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <TicketTable  />
                </Col>
            </Row>
        </Container>
        </DefaultLayout>
    )
}

export default TicketListing