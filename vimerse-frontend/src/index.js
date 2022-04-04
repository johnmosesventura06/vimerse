import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './index.css';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Article from './Components/Articles';
import Terms from './Components/TermsConditions';
import View from './Components/ArticleView';
import { Provider } from "react-redux";
import RecoverPassword from './pages/auth/RecoverPassword'
import Signin from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp'
import 'bootstrap/dist/css/bootstrap.min.css';
import DevHome from "./Components/developersPages/Home"
import store from './redux/store';
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Routes>
    <Route exact path="/" element={<Signin />} />
    <Route exact path="home" element={<Home />} />
    <Route exact path="/signin" element={<Signin />} />
    <Route exact path="/signup" element={<SignUp />} />
    <Route exact path="/recover-password" element={<RecoverPassword />} />
    <Route exact path="/AboutUs" element={<AboutUs />} />
    <Route exact path="/termsConditions" element={<Terms/>} />
    <Route exact path="/article" element={<Article />} />
    <Route exact path="/DevHome" element={<DevHome />} />
    </Routes>
    </Router> 
    {/* <Provider store={store} >
    <Signin />
    </Provider> */}

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
