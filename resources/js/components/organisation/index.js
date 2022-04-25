import React from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import OrganisationModalComponent from './modal'
import OrganisationTableComponent from './table'
import actions from '../../actions'

const mapDispatchToProps = (dispatch) => ({
    openAddOrganisationModel: () =>
        dispatch({ type: actions.OPEN_ADD_ORGANISATION_MODAL, value: '' }),
})

const OrganisationComponent = (props) => {
    const { openAddOrganisationModel } = props
    const addUserHandler = () => {
        openAddOrganisationModel()
    }
    return (
        <Container>
            <Row className="justify-content-center">
                <Col>
                    <Card>
                        <Card.Header>Organisation</Card.Header>
                        <Card.Body>
                            <Button type="button" onClick={addUserHandler}>
                                Add Organisation
                            </Button>
                            <OrganisationTableComponent />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <OrganisationModalComponent />
        </Container>
    )
}

export default connect(null, mapDispatchToProps)(OrganisationComponent)
