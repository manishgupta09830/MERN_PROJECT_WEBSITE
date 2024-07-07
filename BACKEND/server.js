import app from "./app.js";

app.listen(process.env.PORT,()=>{
    console.log(`server listoning at ${process.env.PORT}`);
})