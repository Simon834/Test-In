const { Contact } = require("../db"); //falta conectarlo en db
//registro
async function signUp(req, res, next) {
  try {
    const {
      clientCode,
      name,
      email,
      password,
      user,
      phone,
      cellphone,
      position,
      contactType,
      webStoreAuth,
      orderAuth,
      infoSend,
    } = req.body;

    //crear usuario, a traves de formulario de front
    let contact = await Contact.create({
      clientCode: clientCode,
      user: user,
      name: name,
      position: position,
      phone: "+57" + phone,
      email: email,
      cellphone: cellphone,
      contactType: contactType,
      webStoreAuth: webStoreAuth,
      orderAuth: orderAuth,
      infoSend: infoSend,
      password: password,
    });

    res.json({
      contact: contact,
    });
  } catch (err) {
    return next(err);
  }
}

async function allContacts(req, res, next) {
  try {
    const users = await Contact.findAll();
    if (!users.length) {
      return res.json({ msg: "No hay usuarios registrados por el momento" });
    } else {
      return res.json(users);
    }
  } catch (err) {
    return next(err);
  }
}
module.exports = { signUp, allContacts };
