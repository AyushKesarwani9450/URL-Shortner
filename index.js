import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import {Short} from "./controllers/short.js";
import {Redirect} from "./controllers/redirect.js";

dotenv.config();

const app=express();

app.use(express.json());
app.use(cors());


app.post("/short",Short);
app.get("/:route",Redirect);
const port=process.env.PORT || "3000";

const start= async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        app.listen(port, "0.0.0.0",()=>{
            console.log("server started..");
        })
        
    }catch(e){
        console.log(`something went wrong ${e}`);
    }
}
start();


// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";
// import {Short} from "./controllers/short.js";



// dotenv.config();
// const app = express();
// app.use(express.json());
// app.use(cors());

// app.post("/short", Short);

// const port = process.env.PORT || 3000;

// const start = async () => {
//     try{
//         await mongoose.connect(process.env.MONGODB_URL)

//         app.listen(port,"0.0.0.0", () => {
//             console.log(`Server is running on port ${port}`);
//         });
//     }
//     catch(error) {
//         console.warn("error",error);
//     }
// };

// start();



// //rest -> json fromat