import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import AuthMenu from '../commons/auth-menu'

const mapStateToProps = (state) => ({
    isAuthenticated: state.global.isAuthenticated,
})

const AuthLayout = (props) => {
    const { childComponent, isAuthenticated } = props
    const navigate = useNavigate()

    useEffect(() => {
        if (true === isAuthenticated) {
            navigate('/home')
        }
    }, [])

    return (
        <>
            <AuthMenu />
            <main className="py-4">{childComponent}</main>
        </>
    )
}

export default connect(mapStateToProps, null)(AuthLayout)
