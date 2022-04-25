import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import actions from '../../actions'
import Alert from 'react-bootstrap/Alert'

const mapStateToProps = (state) => ({
    status: state.addOrganisationModal.status,
})

const mapDispatchToProps = (dispatch) => ({
    handleClose: () =>
        dispatch({ type: actions.CLOSE_ADD_ORGANISATION_MODAL, value: '' }),
    addOrganisation: (organisation) =>
        dispatch({ type: actions.SAGA_ADD_ORGANISATION, value: organisation }),
})

const OrganisationModalComponent = (props) => {
    const { handleSubmit, register, errors } = useForm()
    const { status, handleClose, addOrganisation } = props
    const [error, setError] = useState('')
    const submitUserHandler = (e) => {
        try {
            if (status) {
                addOrganisation({
                    name: e.name,
                })
                handleClose()
            }
        } catch (error) {
            setError('Update Fail')
        }
    }

    return (
        <Modal show={status ? true : false} onHide={handleClose}>
            <Form onSubmit={handleSubmit(submitUserHandler)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Organisation</Modal.Title>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrganisationModalComponent)
