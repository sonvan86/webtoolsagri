import React from 'react'
import { connect } from 'react-redux'
import Pagination from 'react-bootstrap/Pagination'
import actions from '../../actions'

const paginationStyle = { justifyContent: 'center' }
const mapStateToProps = (state) => ({
    page: state.user.page,
    keyword: state.user.keyword,
    totalPage: state.user.totalPage,
})

const mapDispatchToProps = (dispatch) => ({
    searchUser: (params) =>
        dispatch({ type: actions.SAGA_USER_GET_LIST, value: params }),
})

const UserPaginationComponent = (props) => {
    const { page, keyword, totalPage, searchUser } = props
    const changePageHandler = (e) => {
        searchUser({ page: e.target.getAttribute('value'), keyword: keyword })
    }

    return (
        <Pagination style={paginationStyle}>
            {[...Array(totalPage)].map((x, i) => (
                <Pagination.Item
                    key={i}
                    value={i + 1}
                    active={page === i + 1 ? true : false}
                    onClick={changePageHandler}
                >
                    {' '}
                    {i + 1}{' '}
                </Pagination.Item>
            ))}
        </Pagination>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPaginationComponent)
