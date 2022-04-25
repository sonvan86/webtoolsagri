import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import DashboardMenu from '../commons/dashboard-menu'

const mapStateToProps = (state) => ({
    isAuthenticated: state.global.isAuthenticated,
})

const DashboardLayout = (props) => {
    const { childComponent, isAuthenticated } = props
    const navigate = useNavigate()

    useEffect(() => {
        if (true !== isAuthenticated) {
            navigate('/login')
        }
    }, [])

    return (
        <>
            <DashboardMenu />
            <main className="py-4">{childComponent}</main>
        </>
    )
}

export default connect(mapStateToProps, null)(DashboardLayout)
