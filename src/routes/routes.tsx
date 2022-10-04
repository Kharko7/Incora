import routes from '../configs/routes';
import { useContext } from 'react'
import { Route, Switch } from 'react-router-dom';
import Task2 from '../pages/task2/App';
import Settings from '../pages/task3/Settings';
import SetSettings from '../pages/set-settings/SetSettings';
import ProtectedRoute from './helpers/ProtectedRoute';
import Task1 from '../pages/task1/task1';
import { AuthorizationContext } from '../context/authorizationContext';

const Routes = () => {
  const { pathToPagination, pathToTask1, pathToSettings, pathToSetSettings } = routes
  const { auth } = useContext(AuthorizationContext)

  return (
    <Switch  >
      <Route path={pathToTask1} exact component={Task1} />
      <Route path={pathToPagination} component={Task2} />
      <ProtectedRoute path={pathToSettings} component={Settings} redirectTo={pathToSetSettings} isAuth={auth} />
      <Route path={pathToSetSettings} component={SetSettings} />
    </Switch >
  )
}

export default Routes