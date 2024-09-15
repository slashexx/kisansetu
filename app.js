import express from "express";
import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import { PDFDocument, StandardFonts } from "pdf-lib";
import { resourceLimits } from "worker_threads";
import bodyParser from "body-parser";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import removeMd from "remove-markdown";
import http from 'http';
import WebSocket from 'ws';
import { WebSocketServer } from 'ws';
import farmers from './public/farmers.json' with { type: "json" };
import url from "url"
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To handle form data
app.use(bodyParser.json());
const server = http.createServer(app);
const wss = new WebSocketServer({ server });
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, './public/farmers-details.json');
const BUYERS_FILE_PATH= path.join(__dirname, './public/buyers.json');
const DATA_FILE_DISPLAY=path.join(__dirname, './public/farmers.json');
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const genAI = new GoogleGenerativeAI(process.env.GEM_API_KEY);
const WEBSITE_OVERVIEW = await fs.readFile("Kisansetu_Overview.md", "utf8");
const WEBSITE_FEATURES = await fs.readFile(
  "Kisansetu_Important_Features.md",
  "utf8"
);
const WEBSITE_FUNCTIONING = await fs.readFile(
  "Kisansetu_How_It_Works.md",
  "utf8"
);
const WEBSITE_PERSPECTIVE = await fs.readFile(
  "Kisansetu_Buyer_Perspective.md",
  "utf8"
);
app.post("/assistance", async (req, res) => {
  const { message, language } = req.body; 

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [
          {
            text: "Here's context about our website that i will be sharing in different parts:",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "Okay, I'm ready to receive the context in different parts.",
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: "okay so here is the first part which is about kisansetu overview",
          },
        ],
      },
      {
        role: "model",
        parts: [
          { text: "Okay i am ready to receive the first part of context" },
        ],
      },
      {
        role: "user",
        parts: [{ text: WEBSITE_OVERVIEW }],
      },
      {
        role: "model",
        parts: [
          {
            text: "I have received the first part successfully now send the second part",
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: "Okay this is the second part which is about website important features",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: WEBSITE_FEATURES }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Okay i have received the second part as well , now send me the third part",
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: "Okay i am sharing the third part which is about how it works",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: WEBSITE_FUNCTIONING }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Okay i have received the third part as well , now send me the last part",
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: "Okay i am sharing the last part which gives you a brief demon from a buyer's perspective",
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: "Okay i am sharing the last part which gives you a brief demon from a buyer's perspective",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: WEBSITE_PERSPECTIVE }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Thank you for providing the context about KisanSetu in different parts. I understand it's a platform connecting farmers and buyers in India, facilitating digital contracts, direct communication, government verification, secure transactions, and access to various crops. How can I assist you with questions related to KisanSetu?",
          },
        ],
      },
    ],
  });
  const languageInstruction =
    language === "hindi"
      ? "Please respond in Hindi."
      : "Please respond in English.";
  const result = await chat.sendMessage(message + "\n\n" + languageInstruction);
  const response = await result.response;
  let text = await response.text();

  text = removeMd(text);

  text = text.replace(/\*\*/g, "").trim();

  // Improve formatting
  text = text.replace(/(\d+\.)\s+/g, "\n$1 ");
  text = text.replace(/([a-z])\s+([A-Z])/g, "$1\n$2");
  text = text
    .split("\n")
    .map((line) => line.trim())
    .join("\n"); // Trim each line
  text = text.replace(/\n{3,}/g, "\n\n");

  res.json({ text });
});
let uid;
app.post("/get-uid",(req,res)=>{
  uid=req.body.user;
  res.redirect('/')
})
app.get("/", async(req, res) => {
  // const farmers=await getFarmersData();
  // console.log(uid);
  // if(uid) {
  //   const farmer=findFarmerById(uid,farmers);
  //   if(farmer){
  //     console.log("fameris here")
  //   res.render("home-page.ejs",{isFarmer:'true',farmerId:farmer.farmerId})
  //   }else{
  //     res.render("home-page.ejs",{isFarmer:'false',farmerId:null})
  //   }
  // }
  // else res.render("home-page.ejs",{isFarmer:'false',farmerId:null})
  res.render("home-page.ejs")
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "signup.html"));
});

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "dashboard.html"));
});

app.get("/contract-form", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contract_form.html"));
});

app.get('/secure/sendeth', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'afterButton.html'));
})
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "form.html"));
});

app.post("/create-pdf", async (req, res) => {
  const {
    sellerName,
    sellerAddress,
    buyerName,
    buyerAddress,
    cropDescription,
    quantity,
    price,
    totalAmount,
  } = req.body;

  try {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([1700, 2200]);

    const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const fontSize = 24;
    const lineHeight = fontSize * 1.5;
    const margin = 100;
    const maxWidth = 1500;

    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    page.setFont(boldFont);
    page.setFontSize(40);
    page.drawText("KISANSETU", {
      x: margin,
      y: 2100,
      size: 40,
      underline: true,
    });

    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString("default", { month: "long" });
    const year = today.getFullYear();

    const content = [
      `Seller's Name: ${sellerName}`,
      `Seller's Address: ${sellerAddress}`,
      `Buyer's Name: ${buyerName}`,
      `Buyer's Address: ${buyerAddress}`,
      `This agreement is made and executed on this ${day} day of ${month}, ${year}, between the seller and the buyer`,
      `for the sale of crops as per the terms and conditions laid down herein.`,
      `The seller agrees to sell and the buyer agrees to purchase the crops described herein, in accordance with`,
      `the provisions of the Indian Contract Act, 1872, and other applicable laws.`,
      `The contract is legally valid and enforceable, as issued by the Government of India, and any disputes`,
      `arising out of this contract shall be subject to the jurisdiction of the Indian courts.`,
      `The seller guarantees that the crops being sold are free from any liens or encumbrances and are in good`,
      `condition.`,
      `The buyer acknowledges that they have inspected the crops and are satisfied with their quality before`,
      `making the payment.`,
      `This contract represents the entire agreement between the parties and supersedes all prior discussions,`,
      `agreements, or understandings of any kind.`,
      `The parties hereto have executed this agreement as of the day and year first above written.`,
      `Crop Description: ${cropDescription}`,
      `Quantity: ${quantity}`,
      `Price: ${price}`,
      `Total Amount: ${totalAmount}`,
      `Signatures:`,
      `Seller: ___________________________`,
      `Buyer: ___________________________`,
      `Date: ${day} ${month} ${year}`,
    ].join("\n\n");

    const textLines = content.split("\n");
    let yOffset = 1900;

    page.setFont(font);
    page.setFontSize(fontSize);

    for (const line of textLines) {
      page.drawText(line, { x: margin, y: yOffset, size: fontSize, maxWidth });
      yOffset -= lineHeight;
    }

    const pdfBytes = await pdfDoc.save();
    console.log("PDF generated successfully");

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=farm-purchase-agreement.pdf",
    });

    res.send(Buffer.from(pdfBytes));
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).send("Failed to generate PDF");
  }
});
async function getFarmersData() {
  try {
    const fileContent = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(fileContent);
  } catch (err) {
    console.error('Error reading or parsing data file:', err);
    throw err;
  }
}

// Function to write farmers data
async function writeFarmersData(data) {
  try {
    const content = JSON.stringify(data, null, 2);
    await fs.writeFile(DATA_FILE, content, 'utf-8');
  } catch (err) {
    console.error('Error writing data file:', err);
    throw err;
  }
}

async function getFarmersDataForDisplay() {
  try {
    const fileContent = await fs.readFile(DATA_FILE_DISPLAY, 'utf-8');
    return JSON.parse(fileContent);
  } catch (err) {
    console.error('Error reading or parsing data file:', err);
    throw err;
  }
}

// Function to write farmers data
async function writeFarmersDataForDisplay(data) {
  try {
    const content = JSON.stringify(data, null, 2);
    await fs.writeFile(DATA_FILE_DISPLAY, content, 'utf-8');
  } catch (err) {
    console.error('Error writing data file:', err);
    throw err;
  }
}



// In-memory store for chat connections
const connections = {};
let chats = {};

// Route to render chat messages




async function getBuyersData() {
  try {
    const fileContent = await fs.readFile(BUYERS_FILE_PATH, 'utf-8');
    return JSON.parse(fileContent);
  } catch (err) {
    console.error('Error reading or parsing data file:', err);
    throw err;
  }
}

// Function to write farmers data
async function writeBuyersData(data) {
  try {
    const content = JSON.stringify(data, null, 2);
    await fs.writeFile(BUYERS_FILE_PATH, content, 'utf-8');
  } catch (err) {
    console.error('Error writing data file:', err);
    throw err;
  }
}

// In-memory store for chat connections

let farmerChats={}
//faemrs's buyer
app.get("/buyers/:id",async(req,res)=>{
  const {id} = req.params;
  const farmers=await getFarmersData();
  const buyers=await getBuyersData();
  console.log(buyers)
  const currFarmer=findFarmerById(id,farmers);
  const farmersBuyer=[];
  for(let keys in currFarmer.messages){
    console.log(keys)
    const isBuyer=findBuyerById(keys,buyers)
    if(isBuyer){
      farmersBuyer.push(isBuyer)
    }
  }
  console.log (farmersBuyer)
  
  res.render("buyersList.ejs",{farmersBuyer,id})

})
// Route to render chat messages
// app.get("/chat/:id", async (req, res) => {
//   const { id } = req.params;
//   console.log(id);
//   console.log(chats);
  
//   const chatBetween = chats[id];
//   const farmers=getFarmersData();
//   console.log(farmers)
//   const farmer = findFarmerById(parseInt(chatBetween), farmers);
//   const buyers = await getBuyersData();
//   const buyer = findBuyerById(parseInt(id), buyers);
//   console.log(buyer);
  
//   let messages = [];
//   if(buyer.messages[chatBetween]) messages=farmer.messages[chatBetween]
//   console.log(messages)
  
//   res.render('message', {
//     currUser: id,
//     id: chatBetween,
//     receiverUsername: farmer.name,
//     messages
//   });
// });
app.get("/chat/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  console.log(chats);
  
  const chatBetween = chats[id];
  const farmers = await getFarmersData();
  const farmer = findFarmerById(chatBetween, farmers);
  const buyers=await getBuyersData();
  const buyer=await findBuyerById(id,buyers)
  console.log(buyer);
  console.log(farmer);
  
  let messages = [];
  console.log("chatbetween",chatBetween)
  if(buyer.messages[chatBetween]) messages=buyer.messages[chatBetween]
  console.log(messages)
  
  res.render('message', {
    currUser: id,
    id: chatBetween,
    receiverUsername: farmer.name,
    messages
  });
});

// Route to handle chat updates
app.post("/chat/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  chats[data.userId] = data.farmerId;
  console.log(data);
  res.send(data);
});
app.get("/buyer/chat/:id", async (req, res) => {
  const { id } = req.params;
  
  const chatBetween = farmerChats[id];
  console.log(chatBetween)
  const farmers = await getFarmersData();
  const buyers=await getBuyersData()
  const farmer = findFarmerById(id, farmers);
  const buyer=findBuyerById(chatBetween,buyers)
  console.log(buyer);
  
  let messages = [];
  if(farmer.messages[chatBetween]) messages=farmer.messages[chatBetween]
  console.log(messages)
  
  res.render('buyermessage.ejs', {
    currUser: id,
    id: chatBetween,
    receiverUsername: buyer.username,
    messages
  });
});


app.post("/buyer/chat/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  farmerChats[data.farmerId] = data.buyerId;
  // console.log(farmerChats);
  res.send(data);
});

app.post("/add-user",async(req,res)=>{
  console.log(req.body);
  if(req.body.occupation=='Buyer'){
    const allBuyers=await getBuyersData();
 const data={"id":req.body.uid,"username":req.body.name,messages:{}}
  allBuyers.push(data)
  await writeBuyersData(allBuyers)
  }else if(req.body.occupation=='Farmer'){
    const allFarmers=await getFarmersData();
    const allFarmersDisplay=await getFarmersDataForDisplay();
    const data={
      "farmerId": req.body.uid,
      "name": req.body.name,
      "state": req.body.state,
      "cropsGrown": req.body.cropsGrown,
      "postalCode":req.body.postalCode,
      "address":req.body.address,
      "produceAmount": req.body.amountProduced,
      "image": String(req.body.imageUrl),
      "governmentVerified": req.body.governmentVerified,
      messages:{}
    }
    const displayData={
      "id": req.body.uid,
      "name": req.body.name,
      "state": req.body.state,
      "cropsGrown": req.body.cropsGrown,
      "produceAmount": req.body.amountProduced,
      "image": String(req.body.imageUrl),
      "governmentVerified": req.body.governmentVerified,}
    allFarmers.push(data);
    allFarmersDisplay.push(displayData);
    await writeFarmersData(allFarmers)
    await writeFarmersDataForDisplay(allFarmersDisplay);
  }
  
})


// WebSocket connection handling
wss.on("connection", (ws, req) => {
  const parsedUrl = url.parse(req.url);
  const path = parsedUrl.pathname.substring(1);

  if (connections[path]) {
    connections[path].push(ws);
    console.log(`${path} connected`);
  } else {
    connections[path] = [ws];
    console.log(`${path} connected`);
  }
  console.log(`New connection on ${path}`);

  ws.on("message", async (message) => {
    console.log(`Received message on ${path}: ${message}`);
    try {
      const parsedMessage = JSON.parse(message);
      console.log(parsedMessage);
  
      const sender_id = parsedMessage.sender;
      const receiver_id = parsedMessage.receiver;
  
      // Update the farmers data
      let farmers = await getFarmersData();
      let buyers = await getBuyersData();
      const receiver_farmer = findFarmerById(receiver_id, farmers);
      const receiver_buyer = findBuyerById(receiver_id, buyers);
  
      if (receiver_farmer) {
        if (!receiver_farmer.messages) {
          receiver_farmer.messages = {};
        }
  
        if (!receiver_farmer.messages[sender_id]) {
          receiver_farmer.messages[sender_id] = [];
        }
  
        receiver_farmer.messages[sender_id].push({ from: parsedMessage.message });
        const sender_buyer = findBuyerById(sender_id, buyers);
        if (!sender_buyer.messages) {
          sender_buyer.messages = {};
        }
  
        if (!sender_buyer.messages[receiver_id]) {
          sender_buyer.messages[receiver_id] = [];
        }
  
        sender_buyer.messages[receiver_id].push({ to: parsedMessage.message });
        await writeFarmersData(farmers);
        await writeBuyersData(buyers);
        console.log('Messages updated successfully.');
        console.log('Updated Receiver:', receiver_farmer);
      } else if (receiver_buyer) {
        if (!receiver_buyer.messages) {
          receiver_buyer.messages = {};
        }
  
        if (!receiver_buyer.messages[sender_id]) {
          receiver_buyer.messages[sender_id] = [];
        }
  
        receiver_buyer.messages[sender_id].push({ from: parsedMessage.message });
        const sender_farmer = findFarmerById(sender_id, farmers);
        if (!sender_farmer.messages) {
          sender_farmer.messages = {};
        }
  
        if (!sender_farmer.messages[receiver_id]) {
          sender_farmer.messages[receiver_id] = [];
        }
  
        sender_farmer.messages[receiver_id].push({ to: parsedMessage.message });
        await writeFarmersData(farmers);
        await writeBuyersData(buyers);
        console.log('Messages updated successfully.');
        console.log('Updated Receiver:', receiver_buyer);
      } else {
        console.error("Error occurred");
        return;
      }
  
      if (connections[parsedMessage.receiver]) {
        connections[parsedMessage.receiver].forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({
              sender: parsedMessage.sender,
              receiver: parsedMessage.receiver,
              message: parsedMessage.message
            }));
          }
        });
      } else {
        console.log(`No clients connected to path ${parsedMessage.receiver}`);
      }
    } catch (error) {
      console.log("Error parsing message:", error);
    }
  });

  ws.on('close', () => {
    connections[path] = connections[path].filter(client => client !== ws);
    console.log(`Connection closed on ${path}`);
  });
});

// Helper function to find a farmer by ID
function findFarmerById(id, farmers) {
  return farmers.find(obj => obj.farmerId === id);
}

function findBuyerById(id, buyer) {
  return buyer.find(obj => obj.id === id);
}


const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
