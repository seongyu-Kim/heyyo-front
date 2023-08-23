import axios from "axios";

// 회원가입
export const signup = (
  name,
  nickname,
  password,
  email,
  phoneNumber,
  recommendNickname,
) => {
  axios
    .post(
      "/api/users/register",
      {
        name: name,
        nickname: nickname,
        password: password,
        email: email,
        phoneNumber: phoneNumber,
        recommendNickname: recommendNickname,
      },
      {
        withCredentials: true,
      },
    )
    .then(function (response) {
      console.log(response);
      window.location.href = "/survey";
    })
    .catch(function (error) {
      console.log(error);
    });
};
