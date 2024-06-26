import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server listening on PORT: ${process.env.PORT}`);
    })
  )
  .catch((Error) => {
    console.log("MongoDB Connection Failed Error: ", Error);
  });
