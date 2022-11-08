import * as yup from "yup";

const apelidoRules = /^(?=.*[a-z]).{5,}$/;

export const cadastroSchema = yup.object().shape({
    name: yup.string().required("Obrigatório"),
    apelido: yup.string().required("Obrigatório")
    .matches(apelidoRules, "apenas letras minuscúlas"),
    email: yup.string().email("Por favor insira um email válido").required("Obrigatório"),
    password: yup
    .string()
    .min(5, "Por favor insira uma senha com no mínimo 5 digitos")
    .required("Obrigatório"),
    
});