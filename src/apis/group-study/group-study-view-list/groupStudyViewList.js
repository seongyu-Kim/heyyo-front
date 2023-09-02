import axios from "axios";

// 키워드에 따른 최근에 생긴 그룹 공부방 리스트 가져오기
export const groupStudyViewNewList = (mbti) => {
  return axios
    .get(`/api/group-studies/detail/recent/${mbti}`, {
      headers: {
        Authorization: sessionStorage.getItem("accessToken"),
      },
    })
    .then((response) => {
      console.log("파라미터에 담긴 mbti", mbti);
      return response.data;
    })
    .catch((error) => {
      console.log("실패:", error.response.data);
      throw error;
    });
};

// 키워드에 해당하는 좋아요를 가장 많이 받은 그룹 공부방 리스트 가져오기
export const groupStudyViewBestList = (mbti) => {
  return axios
    .get(`/api/group-studies/detail/best/${mbti}`, {
      headers: {
        Authorization: sessionStorage.getItem("accessToken"),
      },
    })
    .then((response) => {
      console.log("파라미터에 담긴 mbti", mbti);
      return response.data;
    })
    .catch((error) => {
      console.log("실패:", error.response.data);
      throw error;
    });
};
