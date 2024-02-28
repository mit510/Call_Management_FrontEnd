import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BreadCrumb } from '../../components/breadcrumb/breadcrumb'
import AddTicketForm from '../../components/add-ticket-form/AddTicketForm'
import DefaultLayout from '../../layout/DefaultLayout'

const AddTicket = () => {

    return (
        <DefaultLayout>
        <Container>
        <Row>
        <Col>
          <BreadCrumb page="New Ticket" />
        </Col>
      </Row>

      <Row>
        <Col>
          <AddTicketForm />
        </Col>
      </Row>
        </Container>
        </DefaultLayout>
    )
}

export default AddTicket