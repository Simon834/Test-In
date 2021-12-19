import { useState } from "react";
import { registerContact, passwordGenerator } from "./FormControls";
import "./FormStyles.css";
import { useFormControls } from "./FormValidation";

export default function CreateContact() {
  const {
    handleChange,
    handleSubmit,
    formIsValid,
    errors,
    values,
    handleCheck,
  } = useFormControls();

  console.log("VALORES", values);
  return (
    <>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <div className="title">Informacion de Contacto</div>
          <p>
            <label>
              Codigo de cliente:
              <input
                type="text"
                name="clientCode"
                value="xmxwebdemo2"
                className="formText"
                required
                disabled
              />
            </label>
          </p>
          <p>
            <label>
              Usuario:*
              <input
                type="text"
                name="user"
                className="formText"
                placeholder="Usuario:*"
                value={values.User}
                onChange={handleChange}
                required
              />
              {errors.user && <p className="danger">{errors.user}</p>}
            </label>
          </p>
          <p>
            <label>
              Nombre:*
              <input
                type="text"
                name="name"
                placeholder="Nombre:*"
                className="formText"
                alue={values.Name}
                onChange={handleChange}
                required
              />
              {errors.name && <p className="danger">{errors.name}</p>}
            </label>
          </p>
          <p>
            <label>
              Cargo:*
              <input
                type="text"
                name="position"
                placeholder="Cargo:*"
                className="formText"
                value={values.Position}
                onChange={handleChange}
                required
              />
              {errors.position && <p className="danger">{errors.position}</p>}
            </label>
          </p>
          <p>
            <label>
              Telefono:*
              <input
                type="text"
                name="phone"
                placeholder="Telefono:*"
                className="formText"
                alue={values.Phone}
                onChange={handleChange}
                required
              />
              {errors.phone && <p className="danger">{errors.phone}</p>}
            </label>
          </p>
          <p>
            <label>
              Correo Electrónico:*
              <input
                type="email"
                name="email"
                placeholder="Correo Electrónico:*"
                className="formText"
                alue={values.Email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="danger">{errors.email}</p>}
            </label>
          </p>
          <p>
            <label>
              Numero celular:*
              <input
                type="text"
                name="cellphone"
                placeholder="Numero celular:*"
                className="formText"
                alue={values.Cellphone}
                onChange={handleChange}
                required
              />
              {errors.cellphone && <p className="danger">{errors.cellphone}</p>}
            </label>
          </p>
          <p>
            <label>
              Tipo de contacto:*
              <select
                name="contactType"
                defaultValue="default"
                value={values.ContactType}
                onChange={handleChange}
                required
              >
                <option disabled hidden value="default">
                  --Seleccione tipo de contacto--
                </option>
                <option value="Contacto Comercial" key="CC">
                  Contacto Comercial
                </option>
                <option value="Pago de factura" key="pay">
                  Pago de factura
                </option>
                <option value="Representante legal" key="RL">
                  Representante legal
                </option>
                <option value="Retiro de mercaderia" key="RM">
                  Retiro de mercaderia
                </option>
              </select>
            </label>
          </p>
          <p>
            <label>
              Autorizado para acceder a WebStore
              <input
                type="checkbox"
                name="webStoreAuth"
                className="formCheckbox"
                value={values.WebStore}
                onChange={handleCheck}
              />
            </label>
          </p>
          <p>
            <label>
              Autorizado para crear ordenes
              <input
                type="checkbox"
                name="orderAuth"
                className="formCheckbox"
                value={values.Orders}
                onChange={handleCheck}
              />
            </label>
          </p>
          <p>
            <label>
              ¿Desea que se envie la informacion de acceso al usuario?
              <input
                type="checkbox"
                name="infoSend"
                className="formCheckbox"
                value={values.SendInfo}
                onChange={handleCheck}
              />
            </label>
          </p>
          <p>
            <input
              type="submit"
              value="Aceptar"
              className="btn"
              disabled={!formIsValid()}
            />
            <button className="btn">Cancelar</button>
          </p>
        </form>
      </div>
    </>
  );
}
