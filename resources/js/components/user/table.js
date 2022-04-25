import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Table from 'react-bootstrap/Table'
import actions from '../../actions'

const mapStateToProps = (state) => ({
    employees: state.user.data,
})

const mapDispatchToProps = (dispatch) => ({
    getUserList: (params) =>
        dispatch({ type: actions.SAGA_USER_GET_LIST, value: params }),
})

const UserTableComponent = (props) => {
    const { employees, getUserList } = props

    useEffect(() => {
        getUserList({ page: 1, keyword: '' })
    }, [])

    return (
        <Table className="mt-4" striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Permission</th>
                    <th>Organisation</th>
                    <th>Contract Start</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.type}</td>
                        <td>{employee.organisation}</td>
                        <td>{employee.contract_started_at}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTableComponent)
