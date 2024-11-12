import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function LoginForm() {
  const validationSchema = Yup.object({
    username: Yup.string()
        //confere se o campo esta vazio
      .required('Username é obrigatório')
      .min(4, 'O username deve ter pelo menos 4 caracteres'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 caracteres'),
  });

  // valores iniciais do form
  const initialValues = {
    username: '',
    password: '',
  };

  // envia dados do form
  const onSubmit = (values) => {
    console.log('dados fomrmulario:', values);
  };

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <div>
              <label htmlFor="username">Nome de Usuário</label>
              <Field
                type="text"
                id="username"
                name="username"
                placeholder="Digite seu nome de usuário"
              />
              <ErrorMessage name="username" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="password">Senha</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Digite sua senha"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            {errors.server && <div className="error">{errors.server}</div>}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Entrar'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
