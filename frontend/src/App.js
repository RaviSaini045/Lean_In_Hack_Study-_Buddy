import { Outlet } from 'react-router-dom';
import './App.css';
// import Home from './components/Home';
import NavBar from './utils/NavBar';
// import Messaging from './pages/Messaging';
import Footer from './pages/Footer';
import { createContext, useState } from 'react';

export const UserContext = createContext({
	userLoggedIn: {
		status: false,
	},
});


function App() {
	const [success, setSuccess] = useState(false);
  return (
    <UserContext.Provider value={ { success } }>
        <NavBar/>
		<Outlet/>
		<Footer/>
    </UserContext.Provider>
    
  );
}

export default App;
