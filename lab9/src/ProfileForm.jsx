import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  firstName: yup.string().required('Имя обязательно'),
  middleName: yup.string().required('Отчество обязательно'),
  lastName: yup.string().required('Фамилия обязательна'),
  birthDate: yup.string().matches(/^\d{2}\.\d{2}\.\d{4}$/, 'Неверный формат даты рождения (ДД.ММ.ГГГГ)').nullable(),
  address: yup.string().nullable(),
});

const ProfileForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data); // Здесь можно отправить данные на сервер
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">Имя:</label>
        <input id="firstName" {...register('firstName')} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div>
        <label htmlFor="middleName">Отчество:</label>
        <input id="middleName" {...register('middleName')} />
        {errors.middleName && <p>{errors.middleName.message}</p>}
      </div>
      <div>
        <label htmlFor="lastName">Фамилия:</label>
        <input id="lastName" {...register('lastName')} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <label htmlFor="birthDate">Дата рождения (ДД.ММ.ГГГГ):</label>
        <input id="birthDate" {...register('birthDate')} />
        {errors.birthDate && <p>{errors.birthDate.message}</p>}
      </div>
      <div>
        <label htmlFor="address">Адрес:</label>
        <input id="address" {...register('address')} />
        {errors.address && <p>{errors.address.message}</p>}
      </div>
      <button type="submit">Сохранить изменения</button>
    </form>
  );
};

export default ProfileForm;