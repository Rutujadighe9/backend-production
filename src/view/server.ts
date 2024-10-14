import app from './app';
import config from '../config/config';
const server = app.listen(config.PORT);
(()=>{
    try{
        console.info(`Application Started `,{
            meta:{
                PORT :config.PORT,
                SERVER_URL: config.SERVER_URL
            }
        })
    }catch(err){
      console.error(`Application Errorr`,{meta:err});
   
      server.close((error)=>{
        if(error){
            console.error(`Application_Error`,{meta:err});
        }
        process.exit(1)
      })
   
   
    }
})
