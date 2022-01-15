import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/auth';
// import { View, ActivityIndicator } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

export default function Routes() {
    const { signed, loading } = useContext(AuthContext);
    return (
        signed ? <AppRoutes /> : <AuthRoutes />
    );
}