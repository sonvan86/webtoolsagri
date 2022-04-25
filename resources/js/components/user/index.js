import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import UserModalComponent from './modal'
import UserPaginationComponent from './pagination'
import UserSearchComponent from './search'
import UserTableComponent from './table'

const UserComponent = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col>
                    <Card>
                        <Card.Header>Employees</Card.Header>
                        <Card.Body>
                            <UserSearchComponent />
                            <UserTableComponent />
                            <UserPaginationComponent />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <UserModalComponent />
        </Container>
    )
}

export default UserComponent
