import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import app from "./app.js";

dotenv.config({
    path:'./.env',
});

const port = process.env.PORT || 3001;

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server Listening on ${port}`);
    })
})
.catch((error) =>{
    console.log(error.message);
});
