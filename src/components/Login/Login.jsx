import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { login } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import style from './Login.module.scss';
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

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

const Login = () => {
	const language = useSelector((state) => {
		return state.languages.data;
	});
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const history = useHistory();

	const formik = useFormik({
		initialValues: {
			email: email,
			password: password,
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			history.push('/');
			return dispatch(login(email, password));
		},
	});

	return (
		<div className={style.Login}>
			<form onSubmit={(e) => {
				formik.handleSubmit(e);
			}}>
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

export default Login;
