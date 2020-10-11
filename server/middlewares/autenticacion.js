const jwt = require('jsonwebtoken');

//==========================
//verificacion del token
//==========================
let verificaToken = (req, res, next) => {

    let token = req.get('token');

    // res.json({
    //     token: token
    // });
    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no Valido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();

    });


};


//==========================
//verifica Admin Rol
//==========================
let verificaAdmin_Role = (req, res, next) => {

    let usuario = req.usuario;

    if (usuario.role == 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es un administrador'
            }
        });
    }


};

module.exports = {
    verificaToken,
    verificaAdmin_Role
}