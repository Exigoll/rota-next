"use client";

import * as yup from "yup";

type FormData = {
  email: string;
  password: string;
};

export const LoginFormSchema = yup.object().shape({
  email: yup.string().email("Неверный E-mail").required("Обязательное поле"),
  password: yup
    .string()
    .min(6, "Пароль не менее 6 символов")
    .required("Обязательное поле"),
});
