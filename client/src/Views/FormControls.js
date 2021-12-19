import axios from "axios";
const BACK_SERVER =
  process.env.REACT_APP_BACK_SERVER || "http://localhost:3001";

export async function registerContact(contact) {
  try {
    const response = await axios.post(`${BACK_SERVER}/signup`, contact);
    return response.data;
  } catch (err) {
    return err.response.status;
  }
}

export const passwordGenerator = () => {
  var numbers = "0123456789";
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberLenght = 4;
  var charlenght = 4;
  var password1 = "";
  var password2 = "";
  for (var i = 0; i < numberLenght; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password1 += chars.substring(randomNumber, randomNumber + 1);
  }
  for (var j = 0; j < charlenght; j++) {
    var randomChar = Math.floor(Math.random() * numbers.length);
    password2 += numbers.substring(randomChar, randomChar + 1);
  }
  return password1 + password2;
};
