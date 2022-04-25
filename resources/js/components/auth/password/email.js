import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { resetPassword } from '../../../services/forgot-password'

const EmailPassword = () => {
    const { token } = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const urlSearchParams = new URLSearchParams(location.search)
    const { email } = Object.fromEntries(urlSearchParams.entries())
    const { handleSubmit, register, errors } = useForm()
    const resetPasswordHandler = async (data) => {
        const response = await resetPassword(data)
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
                            <Form onSubmit={handleSubmit(resetPasswordHandler)}>
                                <input
                                    type="hidden"
                                    name="token"
                                    value={token}
                                    ref={register({
                                        required: 'Required',
                                    })}
                                />
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
                                            defaultValue={email}
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
                                <Form.Group as={Row}>
                                    <label
                                        forhtml="password"
                                        className="col-md-4 col-form-label text-md-right"
                                    >
                                        Password
                                    </label>
                                    <Col md={6}>
                                        <input
                                            id="password"
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            ref={register({
                                                required: 'Required',
                                            })}
                                            required
                                            autoComplete="new-password"
                                        />
                                        <span
                                            className="invalid-feedback"
                                            role="alert"
                                        >
                                            <strong>
                                                {errors.password &&
                                                    errors.password.message}
                                            </strong>
                                        </span>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <label
                                        forhtml="password-confirm"
                                        className="col-md-4 col-form-label text-md-right"
                                    >
                                        Confirm Password
                                    </label>
                                    <Col md={6}>
                                        <input
                                            id="password-confirm"
                                            type="password"
                                            className="form-control"
                                            name="password_confirmation"
                                            ref={register({
                                                required: 'Required',
                                            })}
                                            required
                                            autoComplete="new-password"
                                        />
                                        <span
                                            className="invalid-feedback"
                                            role="alert"
                                        >
                                            <strong>
                                                {errors.password_confirmation &&
                                                    errors.password_confirmation
                                                        .message}
                                            </strong>
                                        </span>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-0">
                                    <Col md={{ span: 6, offset: 4 }}>
                                        <Button variant="primary" type="submit">
                                            Reset Password
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

export default EmailPassword
