import { useState } from "react";
import { registerContact } from "./FormControls";
import { passwordGenerator } from "./FormControls";

export const useFormControls = () => {
  const [values, setValues] = useState({
    clientCode: "xmxwebdemo2",
    user: "",
    name: "",
    position: "",
    phone: "",
    email: "",
    cellphone: "",
    contactType: "",
    password: passwordGenerator(),
    webStoreAuth: false,
    orderAuth: false,
    infoSend: false,
  });
  const [errors, setErrors] = useState({});

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("user" in fieldValues)
      temp.user = fieldValues.user ? "" : "Este campo es requerido";
    if (fieldValues.user) {
      var aux = fieldValues.user.substring(0, 3);
      if (aux !== "XMX") {
        temp.user = "El usuario debe empezar con las letras XMX";
      }
      if (fieldValues.user.length !== 6) {
        temp.user = "El usuario debe contener 6 caracteres";
      }
    }

    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "Este campo es requerido";
    if (fieldValues.name) {
      if (fieldValues.name.length < 5) {
        temp.name = "El nombre debe tener mas de 5 caracteres";
      } else if (fieldValues.name.length > 15) {
        temp.name = "El nombre debe tener menos de 15 caracteres";
      }
    }
    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "Este campo es requerido";
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "El email no es valido";
    }
    if ("position" in fieldValues)
      temp.position = fieldValues.position ? "" : "Este campo es requerido";
    if (fieldValues.position) {
      if (fieldValues.position.length < 5) {
        temp.position = "El cargo debe tener mas de 5 caracteres";
      } else if (fieldValues.position.length > 10) {
        temp.position = "El cargo debe tener menos de 10 caracteres";
      }
    }

    if ("phone" in fieldValues) {
      temp.phone = fieldValues.cellphone ? "" : "Este campo es requerido";
      if (fieldValues.phone)
        temp.phone = /\(?([0-9]{7})\)?/.test(fieldValues.phone)
          ? ""
          : "Debe ser un telefono valido";
    }
    if ("cellphone" in fieldValues) {
      temp.cellphone = fieldValues.cellphone ? "" : "Este campo es requerido";
      if (fieldValues.cellphone)
        temp.cellphone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(
          fieldValues.cellphone
        )
          ? ""
          : "Debe ser un numero celular valido";
    }

    setErrors({
      ...temp,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    validate({ [name]: value });
  };

  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.name &&
      fieldValues.email &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const registeredContact = await registerContact(values);
    } catch (err) {
      return err;
    }

    alert("Contacto creado satisfactoriamente");
    e.target.reset();
  };
  const handleCheck = (e) => {
    setValues({
      ...values,
      [e.target.name]: !values[e.target.name],
    });
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleCheck,
    formIsValid,
  };
};
