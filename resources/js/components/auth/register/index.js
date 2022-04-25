import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import { createUser as createUserService } from '../../../services/user'
import actions from '../../../actions'

const mapStateToProps = (state) => ({
    isAuthenticated: state.global.isAuthenticated,
})

const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch({ type: actions.GLOBAL_CHANGE_STATUS, value: true }),
    getAuthorizeUser: () =>
        dispatch({ type: actions.SAGA_GLOBAL_UPDATE_USER, value: {} }),
})

const RegisterAuth = (props) => {
    const { handleSubmit, register, errors } = useForm()
    const [error, setError] = useState('')
    const { isAuthenticated, login, getAuthorizeUser } = props
    const registerHandler = async (e) => {
        const result = await createUserService({
            name: e.name,
            email: e.email,
            password: e.password,
            password_confirmation: e.password_confirmation,
        })
        if (true === result) {
            login()
            getAuthorizeUser()
            window.location.reload()
        } else {
            setError('Login Fail')
        }
    }

    useEffect(() => {
        localStorage.setItem('isAuthenticated', isAuthenticated)
    }, [isAuthenticated])

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card>
                        <Card.Header>Register</Card.Header>
                        <Card.Body>
                            <Alert
                                show={error ? true : false}
                                variant="success"
                                role="alert"
                            >
                                {error}
                            </Alert>
                            <Form onSubmit={handleSubmit(registerHandler)}>
                                <Form.Group as={Row}>
                                    <label
                                        forhtml="name"
                                        className="col-md-4 col-form-label text-md-right"
                                    >
                                        Name
                                    </label>
                                    <Col md={6}>
                                        <input
                                            id="name"
                                            type="text"
                                            className={
                                                errors.name &&
                                                errors.name.message
                                                    ? 'form-control is-invalid'
                                                    : 'form-control'
                                            }
                                            name="name"
                                            defaultValue=""
                                            ref={register({
                                                required: 'Required',
                                            })}
                                            autoComplete="name"
                                            autoFocus
                                        />
                                        <span
                                            className="invalid-feedback"
                                            role="alert"
                                        >
                                            <strong>
                                                {errors.name &&
                                                    errors.name.message}
                                            </strong>
                                        </span>
                                    </Col>
                                </Form.Group>
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
                                            className={
                                                errors.email &&
                                                errors.email.message
                                                    ? 'form-control is-invalid'
                                                    : 'form-control'
                                            }
                                            name="email"
                                            defaultValue=""
                                            ref={register({
                                                required: 'Required',
                                            })}
                                            autoComplete="email"
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
                                            className={
                                                errors.password &&
                                                errors.password.message
                                                    ? 'form-control is-invalid'
                                                    : 'form-control'
                                            }
                                            name="password"
                                            ref={register({
                                                required: 'Required',
                                            })}
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
                                            className={
                                                errors.password_confirmation &&
                                                errors.password_confirmation
                                                    .message
                                                    ? 'form-control is-invalid'
                                                    : 'form-control'
                                            }
                                            name="password_confirmation"
                                            ref={register({
                                                required: 'Required',
                                            })}
                                            autoComplete="new-password"
                                        />
                                    </Col>
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
                                </Form.Group>
                                <Form.Group as={Row} className="mb-0">
                                    <Col md={{ span: 6, offset: 4 }}>
                                        <Button variant="primary" type="submit">
                                            Register
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterAuth)
