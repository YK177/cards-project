import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {Test} from '../../../n2-features/f0-test/Test'
import {Login} from '../../../n2-features/f1-auth/a1-login/Login'
import {Registration} from '../../../n2-features/f1-auth/a2-registration/Registration'
import {ChangePassword} from '../../../n2-features/f1-auth/a3-change-password/ChangePassword'
import {RecoverPassword} from '../../../n2-features/f1-auth/a4-recover-password/RecoverPassword'
import {Profile} from '../../../n2-features/f3-profile/Profile'
import {Error404} from '../../../n2-features/f4-Error404/Error404'

export const PATH = {
    LOGIN: 'login',
    REGISTRATION: 'registration',
    CHANGE_PASSWORD: 'change-password',
    RECOVER_PASSWORD: 'recover',
    PROFILE: 'profile',
    NOT_FOUND: '404',
    TEST: 'test',
}

export const Routing = () => {
    return (
        <Routes>
            <Route path={PATH.LOGIN} element={<Login/>}/>
            <Route path={PATH.REGISTRATION} element={<Registration/>}/>
            <Route path={PATH.CHANGE_PASSWORD} element={<ChangePassword/>}/>
            <Route path={PATH.RECOVER_PASSWORD} element={<RecoverPassword/>}/>
            <Route path={PATH.PROFILE} element={<Profile/>}/>
            <Route path={PATH.TEST} element={<Test/>}/>
            <Route path={PATH.NOT_FOUND} element={<Error404/>}/>
            <Route path="*" element={<Navigate to={PATH.NOT_FOUND}/>}/>
        </Routes>
    )
}
