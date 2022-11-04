import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    email: yup.string().email("Por favor insira um email válido").required("Obrigatório"),
    password: yup
    .string()
    .min(5, "Por favor insira uma senha com no mínimo 5 digitos")
    .matches(passwordRules, "Sua senha deve conter um caractere especial e uma letra maiúscula")
    .required("Obrigatório"),
    
});