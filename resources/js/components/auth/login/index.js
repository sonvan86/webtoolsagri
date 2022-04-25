import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { login as loginService } from '../../../services/auth'
import actions from '../../../actions'

const mapStateToProps = (state) => ({
    isAuthenticated: state.global.isAuthenticated,
    username: state.global.username,
    usertype: state.global.usertype,
})

const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch({ type: actions.GLOBAL_CHANGE_STATUS, value: true }),
    getAuthorizeUser: () =>
        dispatch({ type: actions.SAGA_GLOBAL_UPDATE_USER, value: {} }),
})

const LoginAuth = (props) => {
    const { handleSubmit, register, errors } = useForm()
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const { isAuthenticated, username, usertype, login, getAuthorizeUser } =
        props
    const loginHandler = async (e) => {
        const result = await loginService({
            email: e.email,
            password: e.password,
        })
        if (true === result) {
            login()
            getAuthorizeUser()
            navigate('/home')
        } else {
            setError('Login Fail')
        }
    }

    useEffect(() => {
        localStorage.setItem('isAuthenticated', isAuthenticated)
    }, [isAuthenticated])

    useEffect(() => {
        localStorage.setItem('username', username)
    }, [username])

    useEffect(() => {
        localStorage.setItem('usertype', usertype)
    }, [usertype])

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card>
                        <Card.Header>Login</Card.Header>
                        <Card.Body>
                            <Alert
                                show={error ? true : false}
                                variant="success"
                                role="alert"
                            >
                                {error}
                            </Alert>
                            <Form onSubmit={handleSubmit(loginHandler)}>
                                <Form.Group as={Row}>
                                    <label
                                        forhtml="email"
                                        className="col-md-4 col-form-label text-md-right"
                                    >
                                        E-Mail Address
                                    </label>
                                    <div className="col-md-6">
                                        <Form.Control
                                            id="email"
                                            type="email"
                                            className={
                                                errors.email &&
                                                errors.email.message
                                                    ? 'is-invalid'
                                                    : ''
                                            }
                                            name="email"
                                            defaultValue=""
                                            ref={register({
                                                required: 'Required',
                                            })}
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
                                    </div>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <label
                                        forhtml="password"
                                        className="col-md-4 col-form-label text-md-right"
                                    >
                                        Password
                                    </label>
                                    <Col md={6}>
                                        <Form.Control
                                            id="password"
                                            type="password"
                                            className={
                                                errors.password &&
                                                errors.password.message
                                                    ? 'is-invalid'
                                                    : ''
                                            }
                                            name="password"
                                            ref={register({
                                                required: 'Required',
                                            })}
                                            autoComplete="current-password"
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
                                    <Col md={{ span: 6, offset: 4 }}>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="remember"
                                                id="remember"
                                            />
                                            <label
                                                className="form-check-label"
                                                forhtml="remember"
                                            >
                                                Remember Me
                                            </label>
                                        </div>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-0">
                                    <Col md={{ span: 6, offset: 4 }}>
                                        <Button variant="primary" type="submit">
                                            Login
                                        </Button>
                                        <a
                                            className="btn btn-link"
                                            href="/password/reset"
                                        >
                                            Forgot Your Password?
                                        </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginAuth)
