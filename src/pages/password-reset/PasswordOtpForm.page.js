import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Container } from "react-bootstrap";
import { ResetPassword } from "../../components/password-reset/PasswordReset";
import UpdatePasswordForm from "../../components/password-reset/UpdatePasswordForm";

import "./passwordOtpForm.style.css";

//Workflow

// [x] Create password reset page
// [] Add request OTP form
// [] Add redux store with Redux-toolkit to handle the network status
// [] sent OTP to email from API (API Already created)
// [] Load form to input OTP and new password
// [] New password must match confirm password, form validation
// [] Connect to API Endpoint (API Already created)
// [] Add reducer through Redux-toolkit to handle the network status and provide the feedback to the user
// [] Send email, OTP and new password to update the password.

export const PasswordOtpForm = () => {
	const { showUpdatePassForm } = useSelector(state => state.password);

	return (
		<div className="entry-page bg-info">
			<Container className="form-box p-5 mb-4 bg-light rounded-3 shadow">
				{showUpdatePassForm ? <UpdatePasswordForm /> : <ResetPassword />}
				<div className="text-center">
					<a href="/">Login Now</a>
				</div>
			</Container>
		</div>
	);
};