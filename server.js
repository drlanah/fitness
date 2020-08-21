const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
})

app.use(require("./routes/html.js"));
app.use(require("./routes/api.js"));

app.listen(PORT, function(){
    console.log(`Listening on Port ${PORT}`);
});