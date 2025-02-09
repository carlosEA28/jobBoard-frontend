import axios from "axios";
import Cookies from "js-cookie";

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
      if (res.status === 200) {
        window.location.href = "/signin";
      }
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
      Cookies.set("token", res.data.token);
      console.log(res.status, res.data);
      console.log(Cookies.get());

      if (res.status === 200) {
        window.location.href = "/";
      }
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

export async function getUserInfo() {
  try {
    const data = await axios.get(`http://localhost:8080/user/currentUser`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      withCredentials: true,
    });

    const { data: userInfo } = await axios.get(
      `http://localhost:8080/user/info/${data.data}`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        withCredentials: true,
      }
    );

    console.log(userInfo);

    return userInfo;
  } catch (error) {
    console.error("Erro ao buscar info", error);
    throw error;
  }
}
