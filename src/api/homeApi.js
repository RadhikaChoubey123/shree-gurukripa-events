import api from "./axios";

export const getHeroSlides = async () => {
    const res = await api.get("/hero");
    return res.data;
};
