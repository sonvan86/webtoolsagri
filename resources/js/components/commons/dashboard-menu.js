import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import actions from '../../actions'
import { logout as logoutService } from '../../services/auth'

const buttonStyle = {
    background: 'none',
    border: 'none',
    margin: '0px',
    cursor: 'pointer',
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.global.isAuthenticated,
    username: state.global.username,
    usertype: state.global.usertype,
})

const mapDispatchToProps = (dispatch) => ({
    logout: () =>
        dispatch({ type: actions.GLOBAL_CHANGE_STATUS, value: false }),
    clearAuthorizeUser: () =>
        dispatch({
            type: actions.GLOBAL_UPDATE_USER,
            value: { username: '', usertype: '' },
        }),
})

const DashboardMenu = (props) => {
    const navigate = useNavigate()
    const { isAuthenticated, username, usertype, logout, clearAuthorizeUser } =
        props
    const logoutHandler = async () => {
        const result = await logoutService()
        if (true === result) {
            logout()
            clearAuthorizeUser()
            navigate('/login')
        }
    }

    useEffect(() => {
        localStorage.setItem('isAuthenticated', isAuthenticated)
    }, [isAuthenticated])

    useEffect(() => {
        localStorage.setItem('username', username)
    }, [username])

    useEffect(() => {
        localStorage.setItem('usertype', usertype)
    }, [usertype])

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div className="container">
                <a className="navbar-brand" href="/">
                    Farmer Joe's Company
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto"></ul>
                    <ul className="navbar-nav ml-auto">
                        {'admin' === usertype ? (
                            <>
                                <li className="nav-item">
                                    <a className="nav-link" href="/user">
                                        Employee
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="/organisation"
                                    >
                                        Organization
                                    </a>
                                </li>
                            </>
                        ) : (
                            ''
                        )}
                        <li className="nav-item dropdown">
                            <button
                                id="navbarDropdown"
                                className="nav-link dropdown-toggle"
                                style={buttonStyle}
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                v-pre="true"
                            >
                                {username}
                                <span className="caret"></span>
                            </button>
                            <div
                                className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="navbarDropdown"
                            >
                                <button
                                    className="dropdown-item"
                                    style={buttonStyle}
                                    onClick={logoutHandler}
                                >
                                    Logout
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardMenu)
