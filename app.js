import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { PDFDocument, StandardFonts } from "pdf-lib";
import { resourceLimits } from "worker_threads";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To handle form data

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home-page.html"));
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "signup.html"));
});

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "dashboard.html"));
});

app.get("/contract-form", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contract-form.html"));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'form.html'));
})

app.post("/create-pdf", async (req, res) => {
  const { sellerName, sellerAddress, buyerName, buyerAddress, cropDescription, quantity, price, totalAmount } = req.body;

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
    page.drawText('KISANSETU', {
      x: margin,
      y: 2100,
      size: 40,
      underline: true,
    });

    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString('default', { month: 'long' });
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
      `Date: ${day} ${month} ${year}`
    ].join('\n\n');

    const textLines = content.split('\n');
    let yOffset = 1900;

    page.setFont(font);
    page.setFontSize(fontSize);

    for (const line of textLines) {
      page.drawText(line, { x: margin, y: yOffset, size: fontSize, maxWidth });
      yOffset -= lineHeight;
    }

    const pdfBytes = await pdfDoc.save();
    console.log('PDF generated successfully');

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=farm-purchase-agreement.pdf',
    });

    res.send(Buffer.from(pdfBytes));
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).send("Failed to generate PDF");
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
