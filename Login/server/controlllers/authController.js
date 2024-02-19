import {User} from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { exec } from "child_process";
import  fs from "fs";

export const register = async (req, res) => {
    const {username, email, first_name, last_name, password, password_confirm} = req.body

    if(!username || !email || !first_name || !last_name || !password || !password_confirm) return res.status(422).json({"message": "invalid fields"});

    if(password !== password_confirm) return res.status(422).json({"message": "password no coincide"});

    const userExists = await User.exists({email}).exec()

    if(userExists) return res.sendStatus(409)

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({email, username, password: hashedPassword, first_name, last_name})

        return res.sendStatus(201);
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: "no se pudo registrar"});
    }
};

export const login = async (req, res) => {
    const {email, password} = req.body

    if(!email || !password) return res.status(422).json({"message": "invalid fields"});

    const user = await User.findOne({email}).exec();

    if(!user) return res.sendStatus(401).json({message: "email o password incorrectos"});

    const match = await bcrypt.compare(password, user.password);

    if(!match) return res.status(401).json({message: "email o password incorrectos"});

    const accessToken = jwt.sign(
        {
            id: user.id
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: "1800s"
        }
    )

    const refreshToken = jwt.sign(
        {
            id: user.id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: "1d"
        }
    )

    user.refresh_token = refreshToken
    await user.save()

    res.cookie("refresh_token", refreshToken, {
        httpOnly: true, 
        maxAge: 24*60*60*30*1000,
        sameSite: "None",
        secure: true
    })
    res.json({access_token: accessToken});
};

export const logout = async (req, res) => {
    const cookies = req.cookies

    if(!cookies.refresh_token) return res.sendStatus(401);

    const refreshToken = cookies.refresh_token;
    const user = await User.findOne({refresh_token: refreshToken}).exec();

    if(!user){
        res.clearCookie("refresh_token", {
            httpOnly: true,
            sameSite: "None",
            secure: true
        });
        return res.sendStatus(204)
    }

    user.refresh_token = null
    await user.save()

    res.clearCookie("refresh_token", {
        httpOnly: true,
        sameSite: "None",
        secure: true
    });
    return res.sendStatus(204);
};

export const refresh = async (req, res) => {
    const cookies = req.cookies

    if(!cookies.refresh_token) return res.sendStatus(401);

    const refreshToken = cookies.refresh_token;

    const user = await User.findOne({refresh_token: refreshToken}).exec();

    if(!user) return res.sendStatus(403);

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if(err || user.id !== decoded.id) {
                console.error(err);
                return res.sendStatus(403)
            }
            const accessToken = jwt.sign(
                {id: decoded.id},
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: "1800s"}
            );

            res.json({access_token: accessToken});
        }
    )

};

export const user = async (req, res) => {
    const user = req.user

    return res.status(200).json(user);
};

export const profile = async (req, res) => {
    const user = req.user

    return res.status(200).json(user);
};

export const analyzeCode = async (req, res) => {
    // Obtener el código del cuerpo de la solicitud
    let codigo = req.body.codigo;
    
    // Verificar si el código es un objeto y convertirlo a cadena de texto si es necesario
    if (typeof codigo !== 'string') {
        codigo = JSON.stringify(codigo);
    }

    console.log("Código recibido:", codigo);

    // Guardar el código en un archivo temporal
    fs.writeFile('codigo.c', codigo, (err) => {
        if (err) {
            console.error('Error al escribir el archivo:', err);
            return res.status(500).send('Error al escribir el archivo');
        }

        // Ejecutar GCC para compilar el archivo C
        exec('gcc -Wall -o output codigo.c', (error, stdout, stderr) => {
            // Eliminar el archivo temporal después de compilar
            fs.unlink('codigo.c', (err) => {
                if (err) {
                    console.error('Error al eliminar el archivo temporal:', err);
                }
            });

            if (error) {
                console.error(`Error al compilar el código: ${error.message}`);
                return res.status(500).json({ error: error.message });
            }
            if (stderr) {
                console.error(`GCC reportó un error: ${stderr}`);
                return res.status(400).json({ error: stderr });
            }
            
            // Enviar la salida de GCC al cliente
            res.send(stdout);
        });
    });
};

