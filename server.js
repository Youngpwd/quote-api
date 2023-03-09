const express = require("express");
const app = express();

const PORT = process.env.PORT || 4001;
app.use(express.static("public"));

const quoteRoute = require('./quoteRoutes');

app.use('/api/quotes', quoteRoute);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
