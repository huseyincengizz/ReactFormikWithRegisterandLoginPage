import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

export const mainSchema = yup.object().shape({
    email: yup
        .string()
        .email("Lütfen geçerli bir mail giriniz !")
        .required("Lütfen mail adresinizi giriniz !"),

    age: yup
    .number()
    .positive("Lütfen pozitif sayı giriniz !")
    .integer("Lütfen yaşınızı tamsayı olacak şekilde giriniz !")
    .required("Lütfen yaşınızı giriniz !"),

    password: yup
        .string()
        .min(6, "En az 6 karakter girmelisiniz !")
        .max(18, "En fazla 18 karakter girebilirsiniz !")
        .matches(passwordRules, {
            message: 'Lütfen en az bir büyük harf bir küçük harf ve bir sayı giriniz !',
          })
        .required("Lütfen şifrenizi giriniz !"),

    confirmPassword: yup
          .string()
          .oneOf([yup.ref('password')], 'Şifreleriniz eşleşmiyor')
          .required("Lütfen şifrenizi tekrar giriniz !")
});

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email("Lütfen geçerli bir mail giriniz !")
        .required("Lütfen mail adresinizi giriniz !"),

    password: yup
        .string()
        .min(6, "En az 6 karakter girmelisiniz !")
        .max(18, "En fazla 18 karakter girebilirsiniz !")
        .matches(passwordRules, {
            message: 'Lütfen en az bir büyük harf bir küçük harf ve bir sayı giriniz !',
          })
        .required("Lütfen şifrenizi giriniz !"),

});