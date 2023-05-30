import * as Yup from "yup"
export const validationSchema = Yup.object().shape({
    image: Yup.string().url().required(),
    name: Yup.string().min(5).required(),
    title: Yup.string().min(6).required()
})