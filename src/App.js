import React from 'react';

// We use Route in order to define the different routes of our application
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// We import all the components we need in our app
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Empty from './Pages/Empty/Empty';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Services from './Pages/Services/Services';
import About from './Pages/Home/About/About';
import ServiceDetail from './Pages/Home/ServiceDetail/ServiceDetail';
import Appointment from './Pages/Appointment/Appointment';
import Success from './Pages/Success/Success';
import Navbar from './components/navbar';
import RecordList from './components/recordList';
import Edit from './components/edit';
import Create from './components/create';

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/services" element={<Services />} />

            <Route path="/success" element={<PrivateRoute />}>
              <Route path="/success" element={<Success />} />
            </Route>

            <Route exact path="/appointment" element={<Appointment />} />

            <Route path="/service/:serviceId" element={<PrivateRoute />}>
              <Route path="/service/:serviceId" element={<ServiceDetail />} />
            </Route>

            <Route path="*" element={<Empty />} />
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
