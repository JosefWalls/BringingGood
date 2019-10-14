const express = require('express')
const app = express();
const {userLoginData, userData, deleteUser, addDate, showDate, deleteDate, updateUser} = require("./Controller")


app.use(express.json())

app.post("/api/user", userLoginData)
app.get("/api/user", userData)
app.delete("/api/user/:userId", deleteUser)
app.post("/api/date", addDate)
app.get("/api/date", showDate)
app.delete("/api/date/:id", deleteDate )
app.put("/api/user", updateUser)

app.listen(4020, (req, res) => {
    console.log("Listening on port 4020")
})