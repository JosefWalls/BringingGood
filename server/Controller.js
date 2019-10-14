let user = [];
let userId = 1;
let date= []
let id = 1;

function userLoginData (req, res){
    const{name, age, occupation} = req.body;
    user.push({
        name, 
        age, 
        occupation,
        userId
    })
    userId++;
    res.status(200).json(user)
}

function userData (req, res){
    res.status(200).json(user)
}

function deleteUser (req, res){
    let {userId} = req.params
    let index = user.findIndex(value => {
        if(value == userId){
            return true;
        }
    })
    user.splice(index, 1)
    res.status(200).json(user)
}

function addDate (req, res){
    const {randomName, randomImage, randomId, randomOccupation, randomNickname} = req.body;
    date.push({
        randomName,
        randomImage,
        randomId,
        id,
        randomOccupation,
        randomNickname
    })
    id++
    res.status(200).json(date)
}


function showDate (req, res) {
    res.status(200).json(date)
}

function deleteDate (req, res){
    // console.log("delete")
    let {id} = req.params
    let index = date.findIndex(value => {
        if(value.id == id){
            return true;
        }
    })

    date.splice(index, 1);
    res.status(200).json(date)
}

function updateUser (req, res){
    const {name, age, occupation} = req.body;
    for(let i = 0; i < user.length; i++){
        user[i].name = name;
        user[i].age = age;
        user[i].occupation = occupation;
    res.status(200).json(user)
}
}

module.exports = {
    userLoginData,
    userData,
    deleteUser,
    addDate,
    showDate,
    deleteDate,
    updateUser
}