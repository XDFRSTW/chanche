const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// registro
async function userRegister(req, res){
 const { username, password } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);

        const newUser = new User({
            username,
            password
        });

        await newUser.save();
        res.status(201).send("Usuario registrado");
    }catch (error) {
        res.status(500).json({ message: "Error al registrar el usuario", error});
    }
};
// inicio sesión
async function userLogin(req, res){
 const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: "Usuario no encontrado" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({ message: "Contraseña incorrecta" });
        }
        const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Error en el inicio de sesión", error });
    }
}

async function getUserProfile(req, res){
    // res.status(200).json({ user: req.user });
    try{   
        const users = await User.find();
        res.status(200).json(users);      
    }catch (error){
        res.status(500).json({ message: "jajaja, tu usuario no ha hecho fetch", error});
    } 
}

module.exports = { userRegister, userLogin, getUserProfile };