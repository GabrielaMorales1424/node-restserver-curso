const express = require('express');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');


const Usuario = require('../models/usuario');

const app = express();

app.post('/login', (req, res) => {

    let body = req.body;

    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: ' (Usuario) o contraseña incorrectos '
                }
            });
        }

        if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: ' Usuario o (contraseña) incorrectos '
                }
            });
        }

        let token = jwt.sign({
            usuario: usuarioDB

        }, 'este-es-el-seed-desarrollo', { expiresIn: 60 * 60 * 24 * 30 }); //así expira en 30 dias - 60 * 60 es 1 hora, por 24, por 30

        res.json({
            ok: true,
            usuario: usuarioDB,
            //token: token al ser iguales se puede expresar asi:
            token
        })

    })


})




module.exports = app;