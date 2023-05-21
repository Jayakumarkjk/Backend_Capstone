import express from "express";
import connectToDb from "./config/db.js";
import cors from "cors";
import userRoutes from "./routes/user.js";
import collection from "./models/mongo.js";

const app = express();

app.use(cors());

app.use(express.json());

connectToDb();

app.use(express.static("public/upload"));
app.get("/", (req, res) => {
  res.send("api is running");
});

// api routes

app.use("/api/v1", userRoutes);


app.post("/", async(req,res) =>{
  const{email, password} = req.body

  try{
      const check = await collection.findOne({email:email})
      if(check){
          res.json("exist")
      }
      else{
          res.json("notexist")
      }

  }
  catch(e){
      res.json("notexist")

  }
})


app.post("/signup", async(req,res) =>{
  const{email, password} = req.body

  const data={
      email:email,
      password:password
  }

  try{
      const check = await collection.findOne({email:email})
      if(check){
          res.json("exist")
      }
      else{
          res.json("notexist")
          await collection.insertMany([data])
      }

  }
  catch(e){
      res.json("notexist")

  }
})




app.listen(9000, () => {
  console.log(`Api is running on http://localhost:9000 `);
});
