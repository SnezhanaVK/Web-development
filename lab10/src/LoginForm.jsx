import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  login: yup.string().required('Логин обязателен').matches(/^[a-zA-Z0-9]{6,20}$/, 'Неверный формат логина'),
  password: yup.string().required('Пароль обязателен'),
});

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="login">Логин:</label>
        <input id="login" {...register('login')} />
        {errors.login && <p>{errors.login.message}</p>}
      </div>
      <div>
        <label htmlFor="password">Пароль:</label>
        <input id="password" type="password" {...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginForm;