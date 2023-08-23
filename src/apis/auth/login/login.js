import axios from "axios";

export const login = (email, password) => {
  axios
    .post(
      "/api/users/login",
      {
        email: email,
        password: password,
      },
      {
        withCredentials: true,
      },
    )
    .then(function (response) {
      const accessToken = response.headers.authorization;
      sessionStorage.setItem("accessToken", accessToken);

      const userNickName = response.data.nickname;
      console.log("nickName:", userNickName);
      sessionStorage.setItem("userNickName", userNickName);

      window.location.href = "/";
    })
    .catch(function (error) {
      alert("이메일 또는 비밀번호가 일치하지 않습니다.");
    });
};
