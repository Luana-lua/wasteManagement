// src/LoginForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(4, 'O username deve ter no mínimo 4 caracteres')
      .required('Campo obrigatório'),
    password: Yup.string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres')
      .required('Campo obrigatório'),
  });

  const handleSubmit = (values) => {
    console.log('Valores do formulário:', values);
  };

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="username">Username:</label>
            <Field
              type="text"
              name="username"
              id="username"
              placeholder="Digite seu username"
            />
            <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="password">Senha:</label>
            <Field
              type="password"
              name="password"
              id="password"
              placeholder="Digite sua senha"
            />
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Login'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
