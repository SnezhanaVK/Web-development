import { Form, Input, DatePicker, Button, Flex } from 'antd';
import { ValidationErrors } from 'final-form';
import { useForm } from 'antd/lib/form/Form';
import { useState } from 'react';

export type FormData = {
  login: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: string;
  address: string;
};

type FormProps = {
  onSubmit: (data: FormData) => void;
};

export default function FormA({ onSubmit }: FormProps) {
  const [loading, setLoading] = useState(false);
  const form = useForm();

  const isValid = (data: FormData): ValidationErrors => {
    let result: ValidationErrors = {};

    // Валидация логина и пароля
    if (!/^[a-z0-9]{6,20}$/.test(data.login)) {
      result.login = 'Логин должен содержать латинские буквы и цифры и быть длиной от 6 до 20 символов!';
    }

    if (!data.login || data.login.length === 0) {
      result.login = 'Логин не может быть пустым!';
    }

    if (!data.password || data.password.length === 0) {
      result.password = 'Пароль не может быть пустым!';
    }

    if (!data.confirmPassword || data.confirmPassword.length === 0) {
      result.confirmPassword = 'Подтверждение пароля не может быть пустым!';
    } else if (data.password !== data.confirmPassword) {
      result.confirmPassword = 'Пароль и подтверждение пароля должны совпадать!';
    }

    // Валидация данных профиля
    if (!data.firstName || data.firstName.length === 0) {
      result.firstName = 'Имя не может быть пустым!';
    }

    if (!data.lastName || data.lastName.length === 0) {
      result.lastName = 'Фамилия не может быть пустым!';
    }

    if (!data.middleName || data.middleName.length === 0) {
      result.middleName = 'Отчество не может быть пустым!';
    }

    if (data.birthDate) {
      const birthDate = new Date(data.birthDate);
      if (isNaN(birthDate.getTime())) {
        result.birthDate = 'Неверный формат даты рождения!';
      }
    }

    return result;
  };

  const submitHandler = async (data: FormData) => {
    try {
      
      setLoading(true);
      await onSubmit(data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onFinish={(submitHandler)} layout="vertical">
      <Form.Item
        label="Логин"
        name="login"
        rules={[
          { required: true, message: 'Логин не может быть пустым!' },
          { pattern: /^[a-z0-9]{6,20}$/, message: 'Логин должен содержать латинские буквы и цифры и быть длиной от 6 до 20 символов!' },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: 'Пароль не может быть пустым!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Повтор пароля"
        name="confirmPassword"
        rules={[
          { required: true, message: 'Подтверждение пароля не может быть пустым!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Пароль и подтверждение пароля должны совпадать!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Имя"
        name="firstName"
        rules={[{ required: true, message: 'Имя не может быть пустым!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Фамилия"
        name="lastName"
        rules={[{ required: true, message: 'Фамилия не может быть пустым!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Отчество"
        name="middleName"
        rules={[{ required: true, message: 'Отчество не может быть пустым!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Дата рождения"
        name="birthDate"
        rules={[
          {
            required: true,
            message: 'Дата рождения не может быть пустой!',
          },
          {
            validator: (_, value) => {
              if (!value || !isNaN(new Date(value).getTime())) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Неверный формат даты рождения!'));
            },
          },
        ]}
      >
        <DatePicker format="DD.MM.YYYY" />
      </Form.Item>
      <Form.Item>
        <Flex justify="end">
          <Button type="primary" htmlType="submit" loading={loading}>
            Отправить
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  );
}
