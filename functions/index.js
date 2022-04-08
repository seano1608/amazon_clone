const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HKawPFuQpMTR1i8w14Ys361lN5VbhtQlVUvHjQWGisRBwRlmKYRUAKtzvf3dRa8SFUROSFqNTDf0Ujm5arnIoMg00uxHwf5p0"
);

// - API

// - APP Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get("/", (req, res) => res.status(200).send("Hello world!"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment request received ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  //If intent is created
  res.status(201).send({ clientSecret: paymentIntent.client_secret });
});

// - Listen Command
exports.api = functions.https.onRequest(app);
