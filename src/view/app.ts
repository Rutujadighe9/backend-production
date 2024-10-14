import express, { Application } from  'express';

const app: Application =express()
import path from 'path'
import router from '../router/apiRouter';
app.use(express.json())
app.use(express.static(path.join(__dirname,'../','public')))

//router
app.use("/api/v1",router)

export default app
