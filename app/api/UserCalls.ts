import axios from "axios";

export async function CreateAccount(
  firstName: string,
  secondName: string,
  email: string,
  password: string
) {
  const userData = {
    firstName,
    secondName,
    email,
    password,
  };

  await axios
    .post("http://localhost:8080/user/register", userData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((res) => {
      console.log(res.status, res.data);
    })
    .catch((error) => {
      if (error.response) {
        console.error(
          "Erro na resposta do servidor:",
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        console.error("Erro de rede ou servidor não respondeu:", error.request);
      } else {
        console.error("Erro desconhecido:", error.message);
      }
    });
}

export async function LoginLocalUser(email: string, password: string) {
  const userLoginData = {
    email,
    password,
  };

  await axios
    .post("http://localhost:8080/user/login/local", userLoginData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((res) => {
      console.log(res.status, res.data);
    })
    .catch((error) => {
      if (error.response) {
        console.error(
          "Erro na resposta do servidor:",
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        console.error("Erro de rede ou servidor não respondeu:", error.request);
      } else {
        console.error("Erro desconhecido:", error.message);
      }
    });
}
