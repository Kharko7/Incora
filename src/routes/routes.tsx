import routes from '../configs/routes';
import { useState, useEffect, useContext } from 'react'
import { Route, Switch } from 'react-router-dom';
import Task2 from '../pages/task2/App';
import Settings from '../pages/task3/Settings';
import SetSettings from '../pages/set-settings/SetSettings';
import ProtectedRoute from './helpers/ProtectedRoute';
import Task1 from '../pages/task1/task1';
import { AuthorizationContext } from '../context/authorizationContext';

const Routes = () => {
  const { pathToPagination, pathToTask1, pathToSettings, pathToSetSettings } = routes
  const authorizationContexts = useContext(AuthorizationContext)
  const [isAuth, setIsAuth] = useState<number>(0)

  useEffect(() => {
    if (typeof authorizationContexts?.auth == 'number') {
      setIsAuth(authorizationContexts.auth)
    }
  }, [authorizationContexts])

  return (
    <Switch  >
      <Route path={pathToTask1} component={Task1} />
      <Route path={pathToPagination} component={Task2} />
      <ProtectedRoute path={pathToSettings} component={Settings} redirectTo={pathToSetSettings} isAuth={isAuth ? isAuth : 0} />
      <Route path={pathToSetSettings} component={SetSettings} />
    </Switch >
  )
}

export default Routes