import axios from 'axios'
import React, { useEffect, useState } from 'react';

fetch('/user', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ник: 'тест', пароль: '123' })
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    // Обработка успешного ответа
})
.catch(error => {
 // Обработка ошибки
});