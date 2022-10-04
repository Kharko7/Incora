import React from 'react';
import { Redirect, Route } from "react-router";

interface ProtectedRouteProps {
  redirectTo: string;
  path: string;
  isAuth: number;
  component: React.FunctionComponent;
}

const ProtectedRoute = ({ redirectTo, path, isAuth, component: Component }: ProtectedRouteProps) => {

  return (
    <Route path={path}>
      {isAuth ? <Component/> : <Redirect to={redirectTo} />}
    </ Route>
  )
}
export default ProtectedRoute