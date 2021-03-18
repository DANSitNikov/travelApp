import React, { useState } from 'react';
import { /* login, */ registration } from '../../actions/userActions';
import style from './Registration.module.scss';
import { useHistory } from 'react-router-dom';
import { Button, TextField } from "@material-ui/core";
// import Input from "@material-ui/core/Input";
import { useSelector } from "react-redux";
// import { RootState } from "../../types";
import * as yup from 'yup';
import { useFormik } from 'formik';

const validationSchema = yup.object({
	email: yup
		.string('Enter your email')
		.email('Enter a valid email')
		.required('Email is required'),
	password: yup
		.string('Enter your password')
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Password is required'),
});

const Registration = () => {
	const language = useSelector((state) => {
		return state.languages.data;
	});
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();

	const formik = useFormik({
		initialValues: {
			email: email,
			password: password,
			name: name,
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			registration(email, password, name);
			setName('');
			setEmail('');
			setPassword('');
			history.push('/login');
		},
	});

	return (
		<div className={style.Registration}>
			<form onSubmit={(e) => {
				formik.handleSubmit(e);
			}}>
				<TextField
					fullWidth
					id="name"
					name="name"
					type="text"
					label="Name"
					value={formik.values.name}
					placeholder={language.name}

					onChange={(e) => {
						setName(e.target.value)
						formik.handleChange(e);
					}}

					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
				/>
				<TextField
					fullWidth
					id="email"
					name="email"
					label="Email"
					value={formik.values.email}
					placeholder={language.email}

					onChange={(e) => {
						setEmail(e.target.value);
						formik.handleChange(e);
					}}

					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
				/>
				<TextField
					fullWidth
					id="password"
					name="password"
					label="Password"
					type="password"
					value={formik.values.password}
					placeholder={language.password}

					onChange={(e) => {
						setPassword(e.target.value);
						formik.handleChange(e);
					}}

					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
				/>
				<Button color="primary" variant="contained" fullWidth type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
};

export default Registration;
