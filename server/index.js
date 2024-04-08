const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
const { Resend } = require("resend");

dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://lambent-clafoutis-cc3464.netlify.app",
  })
);

const port = process.env.PORT || 5000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xslrw3a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


const resend = new Resend("re_gVuFwgPS_DSv5Zw1V17Qjt7HCk7aTJLzy");

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const userCollection = client.db("test").collection("user");

    app.post("/users", async (req, res) => {
      const body = req.body;
      const result = await userCollection.insertOne(body);
      res.send(result);
    });

    app.get("/users", async (req, res) => {
      const result = await userCollection.find().toArray();
      res.send(result);
    });

    app.patch("/users/:email", async (req, res) => {
      const filter = { email: req.params.email };
      const body = req.body;
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          ...body,
        },
      };
      const result = await userCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    app.get("/email", async (req, res) => {
      const email = req.query.email;
      try {
        const { data, error } = await resend.emails.send({
          from: "Acme <onboarding@resend.dev>",
          to: 'hridoyemtiaz0@gmail.com',
          subject: "Create Account Sucessfull",
          html: "<strong>Thank you for creating account</strong>",
        });
    
        if (error) {
          console.error("Error sending email:", error);
          return res.status(400).json({ error: "Error sending email" });
        }
    
        if (data) {
          console.log("Email sent successfully. ID:", data.id);
        }
    
        res.status(200).json({ data });
      } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    });
    
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

run().catch(console.error);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
