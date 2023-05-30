import React from 'react'
import style from "./index.module.css"
import {useFormik} from "formik"
import { Button, TextField } from '@mui/material'
import { validationSchema } from './validation'
import { PostById } from '../../api/requests'
import { useNavigate } from 'react-router-dom'

import {Helmet} from "react-helmet";
const Add = () => {
  const navigate = useNavigate()
  function handleSubmit(values, actions){
    console.log(values);
    PostById(values)
    navigate("/")
    actions.resetForm()
  }
  const formik = useFormik({
initialValues:{
  image: "",
  name:"",
  title:""
},
validationSchema:validationSchema ,
onSubmit:handleSubmit
  })

  return (
    <div className="application">
    <Helmet>
        <meta charSet="utf-8" />
        <title>Add Element</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div className={style.form}>
<form className={style.Formm} onSubmit={formik.handleSubmit}>
<TextField style={{width:"100%", marginTop:"10px"}} onChange={formik.handleChange} onBlur={formik.handleBlur} name='image' value={formik.values.image} error={formik.errors.image && formik.touched.image ?true : false} id="outlined-basic" label="Image" variant="outlined" />
<TextField style={{width:"100%", marginTop:"10px"}} onChange={formik.handleChange} onBlur={formik.handleBlu} name='name' value={formik.values.name} error={formik.errors.name && formik.touched.name ?true : false} id="outlined-basic" label="Name" variant="outlined" />
<TextField style={{width:"100%", marginTop:"10px"}} onChange={formik.handleChange} onBlur={formik.handleBlur} name='title' value={formik.values.title} error={formik.errors.title && formik.touched.title ?true : false} id="outlined-basic" label="Title" variant="outlined" />
<Button style={{display:"block", margin:"20px auto"}} variant='contained' type='submit'>Add element</Button>
</form>

    </div>
</div>
  
  )
}

export default Add