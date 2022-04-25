import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import actions from '../../actions'
import Alert from 'react-bootstrap/Alert'
import { getOrganisations } from '../../services/organisation'

const mapStateToProps = (state) => ({
    status: state.addUserModal.status,
    page: state.user.page,
    keyword: state.user.keyword,
})

const mapDispatchToProps = (dispatch) => ({
    handleClose: () =>
        dispatch({ type: actions.CLOSE_ADD_USER_MODAL, value: {} }),
    addUser: (employee) =>
        dispatch({ type: actions.SAGA_ADD_USER, value: employee }),
})

const UserModalComponent = (props) => {
    const { handleSubmit, register, errors } = useForm()
    const { status, page, keyword, handleClose, addUser } = props
    const [error, setError] = useState('')
    const [organisations, setOrganisations] = useState([])
    const submitUserHandler = (e) => {
        try {
            if (status) {
                addUser({
                    name: e.name,
                    email: e.email,
                    organisation: e.organisation,
                    contract_start: e.contract_start,
                    type: e.type,
                    page: page,
                    keyword: keyword,
                })
                handleClose()
            }
        } catch (error) {
            setError('Update Fail')
        }
    }
    useEffect(() => {
        const initial = async () => {
            const result = await getOrganisations()
            setOrganisations(result)
        }
        initial()
    }, [])
    return (
        <Modal show={status ? true : false} onHide={handleClose}>
            <Form onSubmit={handleSubmit(submitUserHandler)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Alert
                        show={error ? true : false}
                        variant="success"
                        role="alert"
                    >
                        {error}
                    </Alert>
                    <Form.Group as={Row}>
                        <label
                            forhtml="name"
                            className="col-md-4 col-form-label text-md-right"
                        >
                            Name
                        </label>
                        <Col md={6}>
                            <Form.Control
                                id="name"
                                type="text"
                                className={
                                    errors.name && errors.name.message
                                        ? 'is-invalid'
                                        : ''
                                }
                                name="name"
                                ref={register({ required: 'Required' })}
                                autoComplete="name"
                            />
                            <span className="invalid-feedback" role="alert">
                                <strong>
                                    {errors.name && errors.name.message}
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
                        <div className="col-md-6">
                            <Form.Control
                                id="email"
                                type="email"
                                className={
                                    errors.email && errors.email.message
                                        ? 'is-invalid'
                                        : ''
                                }
                                name="email"
                                ref={register({ required: 'Required' })}
                                autoComplete="email"
                                autoFocus
                            />
                            <span className="invalid-feedback" role="alert">
                                <strong>
                                    {errors.email && errors.email.message}
                                </strong>
                            </span>
                        </div>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <label
                            forhtml="organisation"
                            className="col-md-4 col-form-label text-md-right"
                        >
                            Organisation
                        </label>
                        <div className="col-md-6">
                            <Form.Control
                                as="select"
                                id="organisation"
                                name="organisation"
                                className={
                                    errors.organisation &&
                                    errors.organisation.message
                                        ? 'is-invalid'
                                        : ''
                                }
                                ref={register({ required: 'Required' })}
                            >
                                {organisations.map((element) => (
                                    <option
                                        key={element.id}
                                        value={element.name}
                                    >
                                        {element.name}
                                    </option>
                                ))}
                            </Form.Control>
                            <span className="invalid-feedback" role="alert">
                                <strong>
                                    {errors.organisation &&
                                        errors.organisation.message}
                                </strong>
                            </span>
                        </div>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <label
                            forhtml="type"
                            className="col-md-4 col-form-label text-md-right"
                        >
                            Permission
                        </label>
                        <div className="col-md-6">
                            <Form.Control
                                as="select"
                                id="type"
                                name="type"
                                className={
                                    errors.type && errors.type.message
                                        ? 'is-invalid'
                                        : ''
                                }
                                ref={register({ required: 'Required' })}
                            >
                                <option key="employee" value="employee">
                                    Employee
                                </option>
                                <option key="admin" value="admin">
                                    Administrator
                                </option>
                            </Form.Control>
                            <span className="invalid-feedback" role="alert">
                                <strong>
                                    {errors.type && errors.type.message}
                                </strong>
                            </span>
                        </div>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <label
                            forhtml="contract_start"
                            className="col-md-4 col-form-label text-md-right"
                        >
                            Contract Start
                        </label>
                        <div className="col-md-6">
                            <Form.Control
                                type="date"
                                id="contract_start"
                                name="contract_start"
                                className={
                                    errors.contract_start &&
                                    errors.contract_start.message
                                        ? 'is-invalid'
                                        : ''
                                }
                                ref={register({ required: 'Required' })}
                            />
                            <span className="invalid-feedback" role="alert">
                                <strong>
                                    {errors.contract_start &&
                                        errors.contract_start.message}
                                </strong>
                            </span>
                        </div>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserModalComponent)
