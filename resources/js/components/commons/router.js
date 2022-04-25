import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardLayout from '../layouts/dashboard'
import AuthLayout from '../layouts/auth'
import RenderLoadingHelper from '../../helpers/render-loading'

const LoginAuth = lazy(() => import('../auth/login'))
const RegisterAuth = lazy(() => import('../auth/register'))
const EmailPassword = lazy(() => import('../auth/password/email'))
const ResetPassword = lazy(() => import('../auth/password/reset'))
const HomeComponent = lazy(() => import('../home'))
const OrganisationComponent = lazy(() => import('../organisation'))
const UserComponent = lazy(() => import('../user'))

function RouterCommon() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <Suspense fallback={RenderLoadingHelper()}>
                            <AuthLayout childComponent={<LoginAuth />} />
                        </Suspense>
                    }
                />
                <Route
                    exact
                    path="/login"
                    element={
                        <Suspense fallback={RenderLoadingHelper()}>
                            <AuthLayout childComponent={<LoginAuth />} />
                        </Suspense>
                    }
                />
                <Route
                    exact
                    path="/register"
                    element={
                        <Suspense fallback={RenderLoadingHelper()}>
                            <AuthLayout childComponent={<RegisterAuth />} />
                        </Suspense>
                    }
                />
                <Route
                    exact
                    path="/password/reset"
                    element={
                        <Suspense fallback={RenderLoadingHelper()}>
                            <AuthLayout childComponent={<ResetPassword />} />
                        </Suspense>
                    }
                />
                <Route
                    exact
                    path="/password/reset/:token"
                    element={
                        <Suspense fallback={RenderLoadingHelper()}>
                            <AuthLayout childComponent={<EmailPassword />} />
                        </Suspense>
                    }
                />
                <Route
                    exact
                    path="/home"
                    element={
                        <Suspense fallback={RenderLoadingHelper()}>
                            <DashboardLayout
                                childComponent={<HomeComponent />}
                            />
                        </Suspense>
                    }
                />
                <Route
                    exact
                    path="/user"
                    element={
                        <Suspense fallback={RenderLoadingHelper()}>
                            <DashboardLayout
                                childComponent={<UserComponent />}
                            />
                        </Suspense>
                    }
                />
                <Route
                    exact
                    path="/organisation"
                    element={
                        <Suspense fallback={RenderLoadingHelper()}>
                            <DashboardLayout
                                childComponent={<OrganisationComponent />}
                            />
                        </Suspense>
                    }
                />
                <Route exact path="*" element={<>Not Found</>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterCommon
