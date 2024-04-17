import jwt from 'jwt-simple';

const user = {
  username: 'carlososorio',
  password: 'P3rrit0$',
};

const tokenKey = '9duh12d7';

const login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      msg: 'Faltan campos',
    });
  }

  if (username === user.username && password === user.password) {
    /**
     * Generar un token✅
     * Retornarlo
     */

    //payload llave
    const token = jwt.encode({ username }, tokenKey);
    return res.json({
      msg: 'Login exitoso',
      token,
    });
  } else {
    return res.status(401).json({
      msg: 'Bad login',
    });
  }

  /**
   *    1.- Validar si req.body ✅
   *            req.body.username
   *            req.body.password
   *    2.- Buscar un usuario con ese username DB ❌
   *    3.- Bcrypt comparar passwords ❌
   *    4.- Generar token ✅
   *    5.- Regresar un token ✅
   */
};

/**
 * const register = () => {}
 */

export { login };
