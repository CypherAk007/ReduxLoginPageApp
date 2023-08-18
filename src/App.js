import Counter from './components/Counter';
import Auth from './components/Auth'
import Header from './components/Header'
import UserProfile from './components/UserProfile';
import { authActions } from './store/index';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector(state => state.authentication.isAuth)
  return (
    <>
    <Header></Header>
    {!isAuthenticated && <Auth></Auth>}
    {isAuthenticated && <UserProfile></UserProfile>}
    {isAuthenticated && <Counter />}
    </>
  );
}

export default App;
