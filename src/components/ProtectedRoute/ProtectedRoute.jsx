import React from 'react';
import {Navigate, Route} from 'react-router-dom';

function ProtectedRoute({component: Component, ...props}) {
  return (
    <Route path={props.path} element={props.isLoggedIn ? <Component {...props} /> : <Navigate to="/signin" replace />} />
  );
}

export default ProtectedRoute;
