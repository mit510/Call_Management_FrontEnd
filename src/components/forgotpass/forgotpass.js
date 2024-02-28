import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
const ForgotPass = ({ handleOnchange, formChange, handleResetsubmit, email }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='text-center'>Forgot Password</h1>
                    <hr />
                    <Form onSubmit={handleResetsubmit}>
                        <Form.Group>
                            <Form.Label >Email</Form.Label>
                            <Form.Control
                                type='email'
                                name='email'
                                value={email}
                                onChange={handleOnchange}
                                placeholder='Enter Email'
                                required
                            />
                        </Form.Group>
                        <Col className='text-center'>

                            <Button className='my-3 ' type='submit' >Reset Password</Button>
                        </Col>
                    </Form>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col className='text-center'>
                    <a href='/#' className='text-decoration-none' onClick={() => formChange('login')}>Login Now?</a>
                </Col>
            </Row>
        </Container>
    )
}
ForgotPass.propTypes = {
    handleOnchange: PropTypes.func.isRequired,
    handleResetsubmit: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,

};
export default ForgotPass