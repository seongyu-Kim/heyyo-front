import axios from "axios";

// 닉네임 중복확인
export const checkNicknameDuplicate = (nickname) => {
  return axios
    .get(`/api/users/duplicate/nicknames/${nickname}`)
    .then((response) => {
      console.log("사용가능 닉네임:", response);
      return {
        isDuplicateNickname: false,
        message: "사용 가능한 닉네임입니다.",
      };
    })
    .catch((error) => {
      console.error("사용불가 닉네임:", error.response.data);
      return {
        isDuplicateNickname: true,
        message: "이미 사용 중인 닉네임입니다.",
      };
    });
};

// 이메일 중복확인
export const checkEmailDuplicate = (email) => {
  return axios
    .get(`/api/users/duplicate/emails/${email}`)
    .then((response) => {
      console.log("사용가능 이메일:", response);
      return {
        isDuplicateEmail: false,
        message: "사용 가능한 이메일입니다.",
      };
    })
    .catch((error) => {
      console.log("사용불가 이메일:", error.response.data);
      return {
        isDuplicateEmail: true,
        message: "이미 사용 중인 이메일입니다.",
      };
    });
};
