import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Table from 'react-bootstrap/Table'
import actions from '../../actions'

const mapStateToProps = (state) => ({
    organisations: state.organisation.data,
})

const mapDispatchToProps = (dispatch) => ({
    getOrganisationList: () =>
        dispatch({ type: actions.SAGA_ORGANISATION_GET_LIST, value: '' }),
})

const OrganisationTableComponent = (props) => {
    const { organisations, getOrganisationList } = props

    useEffect(() => {
        getOrganisationList()
    }, [])

    return (
        <Table className="mt-4" striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Created From</th>
                </tr>
            </thead>
            <tbody>
                {organisations.map((organisation) => (
                    <tr key={organisation.id}>
                        <td>{organisation.name}</td>
                        <td>{organisation.created_at}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrganisationTableComponent)
