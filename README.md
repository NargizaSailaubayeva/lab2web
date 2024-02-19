

# Отправка электронной почты с использованием Nodemailer

Этот проект демонстрирует простой способ отправки электронной почты с использованием Nodemailer в Node.js. Проект состоит из серверной части на Node.js, использующей Nodemailer, и простого фронтенда для ввода адресов электронной почты, которые будут использоваться для отправки писем.

## Установка

1. Склонируйте репозиторий на свой компьютер:

```bash
git clone https://github.com/yourusername/nodemailer-project.git
```

2. Перейдите в директорию проекта:

```bash
cd nodemailer-project
```

3. Установите зависимости:

```bash
npm install
```

## Конфигурация

1. Отредактируйте файл `config.js`, чтобы указать настройки вашего почтового сервера, например, SMTP хост, порт, имя пользователя и пароль.

```javascript
module.exports = {
  host: 'smtp.example.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@example.com',
    pass: 'your-email-password'
  }
};
```

2. Отредактируйте файл `index.js`, чтобы указать отправителя и содержание электронного письма.

```javascript
const fromEmail = 'your-email@example.com';
const subject = 'Тема вашего письма';
const message = 'Текст вашего письма';
```

## Запуск

1. Запустите серверную часть:

```bash
npm run start
```

2. Откройте  `localhost:3000/` в вашем браузере, введите адрес(а) электронной почты и нажмите кнопку "Отправить".

