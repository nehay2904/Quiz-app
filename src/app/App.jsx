// import '../fake-db';
// import { Provider } from 'react-redux';
// import { useRoutes } from 'react-router-dom';
// import { MatxTheme } from './components';
// import { AuthProvider } from './contexts/JWTAuthContext';
// import { SettingsProvider } from './contexts/SettingsContext';
// import { Store } from './redux/Store';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profilepage" element={ <ProfilePage />}/>
        
      </Routes>
    </Router>
  );
}

export default App;


