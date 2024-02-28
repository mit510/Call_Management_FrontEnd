import React, { useEffect } from 'react';
import { Route, Navigate, BrowserRouter, Routes } from 'react-router-dom';
import Dashboard from '../../pages/dashboard/dashboard';
import AddTicket from '../../pages/new-ticket/AddTicket';
import TicketListing from '../../pages/ticket-listing/TicketListing';
import { Ticket } from '../../pages/ticket/Ticket';
import Entry from '../../pages/entry/entry';
import { loginSuccess } from "../login/loginSlice";
import { getUserProfile } from "../../pages/dashboard/userAction";
import { useSelector, useDispatch } from "react-redux";

import { fetchNewAccessJWT } from "../../api/userApi";
import { PasswordOtpForm } from '../../pages/password-reset/PasswordOtpForm.page';
import { UserVerification } from '../../pages/user-verification/UserVerification.page';
import { Registration } from '../../pages/registration/Registration.page';
// const isAuth = true; // This is just a placeholder for authentication check

const PrivateRoute = ({ path, element }) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(state => state.login);
  const { user } = useSelector(state => state.user);

  useEffect(() => {
    const updateAccessJWT = async () => {
      const result = await fetchNewAccessJWT();
      result && dispatch(loginSuccess());
    };

    !user._id && dispatch(getUserProfile());

    !sessionStorage.getItem("accessJWT") &&
      localStorage.getItem("crmSite") &&
      updateAccessJWT();

    !isAuth && sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
  }, [dispatch, isAuth, user._id]);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Entry />} >Entry</Route>
        <Route
          path="/Registration"
          element=<Registration/> 
        />
        <Route
          path="/Password-reset"
          element={ element = <PasswordOtpForm />}
        />
        <Route
          path="/Verification/:_id/:email"
          element={isAuth ? element = <UserVerification /> : <Navigate to="/" />}
        />
        <Route
          path="/Dashboard"
          element={isAuth ? element = <Dashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/AddTicket"
          element={isAuth ? element = <AddTicket /> : <Navigate to="/" />}
        /><Route
          path="/Tickets"
          element={isAuth ? element = <TicketListing /> : <Navigate to="/" />}
        /><Route
          path="/Ticket/:tId"
          element={isAuth ? element = <Ticket /> : <Navigate to="/" />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default PrivateRoute;
