import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';

const ClientApp = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGetRequest = async () => {
    try {
      const response = await axios.get('http://localhost:3000');
setData(response.data);
      setError(null);
    } catch (err) {
      setData(null);
      if (err instanceof AxiosError) {
        setError(err.response?.data.error);
      } else {
        setError('Неизвестная ошибка');
      }
    }
  };

  const handlePostRequest = async () => {
    try {
      const newData = { message: 'Новые данные' };
      const response = await axios.post('http://localhost:3000', newData);
      setData(response.data);
      setError(null);
    } catch (err) {
      setData(null);
      if (err instanceof AxiosError) {
        setError(err.response?.data.error);
      } else {
        setError('Неизвестная ошибка');
      }
    }
  };

  return (
    <div>
      <h1>Клиентская часть</h1>
      <button onClick={handleGetRequest}>Получить данные</button>
      <button onClick={handlePostRequest}>Отправить данные</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && <p>Ошибка: {error}</p>}
    </div>
  );
};

export default ClientApp;
