import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useForm } from 'react-hook-form'
import { requestResetPasswordLink } from '../../../services/forgot-password'
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {
    const { handleSubmit, register, errors } = useForm()
    const navigate = useNavigate()
    const requestPasswordResetLinkHandler = async (data) => {
        const response = await requestResetPasswordLink(data)
        if (true === response) {
            setTimeout(() => {
                navigate('/login')
            }, 10)
        }
    }
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card>
                        <Card.Header>Reset Password</Card.Header>
                        <Card.Body>
                            <Form
                                onSubmit={handleSubmit(
                                    requestPasswordResetLinkHandler
                                )}
                            >
                                <Form.Group as={Row}>
                                    <label
                                        forhtml="email"
                                        className="col-md-4 col-form-label text-md-right"
                                    >
                                        E-Mail Address
                                    </label>
                                    <Col md={6}>
                                        <input
                                            id="email"
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            defaultValue=""
                                            ref={register({
                                                required: 'Required',
                                            })}
                                            required
                                            autoComplete="email"
                                            autoFocus
                                        />
                                        <span
                                            className="invalid-feedback"
                                            role="alert"
                                        >
                                            <strong>
                                                {errors.email &&
                                                    errors.email.message}
                                            </strong>
                                        </span>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-0">
                                    <Col md={{ span: 6, offset: 4 }}>
                                        <Button variant="primary" type="submit">
                                            Send Password Reset Link
                                        </Button>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ResetPassword
