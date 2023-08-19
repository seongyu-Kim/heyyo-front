import axios from "axios";

// 문자인증
export const certificationPhoneNumber = async (phoneNumber) => {
  try {
    const response = await axios.get(`/api/users/sms/${phoneNumber}`);
    console.log("인증번호 전송 성공", response);

    return response.data.certificationNumber;
  } catch (error) {
    console.error("인증번호 전송 실패:", error.response.data);
  }
};
