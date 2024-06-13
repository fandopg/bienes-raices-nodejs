

const formularioLogin = (req, res) => {  //se eje3cuta llamada por la ruta
    res.render('auth/login', {
        pagina: 'Iniciar sesion'
    })
}

const formularioRegistro = (req, res) => {
    res.render('auth/registro', {
        pagina: 'Crear cuenta'
    })
}

const formularioRecuperarPassword = (req, res) => {
    res.render('auth/recuperar-password', {
        pagina: 'Recupera tu acceso a Bienes Raices'
    })
}

export {
    formularioLogin,
    formularioRegistro,
    formularioRecuperarPassword
}