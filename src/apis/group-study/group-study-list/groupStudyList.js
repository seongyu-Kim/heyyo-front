import axios from "axios";

// 최근에 생긴 그룹공부방 리스트 가져오기
export const groupStudyNewList = () => {
    return axios
        .get(`/api/group-studies/recent`, {
            headers: {
                Authorization: sessionStorage.getItem("accessToken"),
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log("실패:", error.response.data);
            throw error;
        });
};

// 오늘 하루 좋아요를 가장 많이 받은 리스트 가져오기
export const groupStudyLikeList = () => {
    return axios
        .get(`/api/group-studies/best`, {
            headers: {
                Authorization: sessionStorage.getItem("accessToken"),
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log("실패:", error.response.data);
            throw error;
        });
};

// 추천 공부방 api
export const groupStudyRecommendList = () => {
    return axios
        .get(`/api/group-studies/recommend`, {
            headers: {
                Authorization: sessionStorage.getItem("accessToken"),
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log("실패:", error.response.data);
            throw error;
        });
};