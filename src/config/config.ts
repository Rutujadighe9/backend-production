import DotenvFlow from "dotenv-flow";

DotenvFlow.config();
console.log(process.env)
export default {
    ENV:process.env.ENV,
    PORT:process.env.PORT,
    SERVER_URL:process.env.SERVER_URL,

    DATABASE_URL:""
}