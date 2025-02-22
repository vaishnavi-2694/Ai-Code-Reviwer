import dotenv from "dotenv";
import app from "./src/app.js"; // Import app.js

dotenv.config();

const PORT = process.env.PORT || 3000; // Use PORT from .env or default to 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
