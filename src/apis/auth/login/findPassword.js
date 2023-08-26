import axios from "axios";

export const findPassword = async (name, email) => {
  const response = await axios.get(`/api/users/passwords/${name}/${email}`);
  console.log("임시 비밀번호 발급 성공:", response);
};
