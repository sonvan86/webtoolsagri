import React, { useRef } from 'react'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import actions from '../../actions'

const mapStateToProps = (state) => ({
    page: state.user.page,
    keyword: state.user.keyword,
})

const mapDispatchToProps = (dispatch) => ({
    searchUser: (params) =>
        dispatch({ type: actions.SAGA_USER_GET_LIST, value: params }),
    openAddUserModal: () =>
        dispatch({ type: actions.OPEN_ADD_USER_MODAL, value: '' }),
})

const UserSearchComponent = (props) => {
    const { page, keyword, searchUser, openAddUserModal } = props
    const newKeyword = useRef(keyword)
    const searchHandler = () => {
        searchUser({ page: page, keyword: newKeyword.current.value })
    }
    const addUserHandler = () => {
        openAddUserModal()
    }
    return (
        <Form.Group as={Row}>
            <Col sm={{ span: 6, offset: 2 }}>
                <Form.Control
                    ref={newKeyword}
                    placeholder="Search employee name"
                    defaultValue={keyword}
                />
            </Col>
            <Col sm={1}>
                <Button type="button" onClick={searchHandler}>
                    Search
                </Button>
            </Col>
            <Col sm={1}>
                <Button type="button" onClick={addUserHandler}>
                    Add
                </Button>
            </Col>
        </Form.Group>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSearchComponent)
