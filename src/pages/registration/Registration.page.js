import React from "react";
import { Container } from "react-bootstrap";

import RegistrationForm from "../../components/registration-form/RegistrationForm.comp";

import "./registration.style.css";

export const Registration = () => {
  return (
    <div className="registration-page bg-info">
      <div className="mt-5">
        <Container className="form-box p-5 mb-4 bg-light rounded-3 shadow">
          <RegistrationForm />
        </Container>
      </div>
    </div>
  );
};
