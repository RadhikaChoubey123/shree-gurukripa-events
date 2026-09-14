import { useQuery } from "@tanstack/react-query";
import { getHeroSlides } from "../api/homeApi";

export function useHero() {

    return useQuery({

        queryKey:["hero"],

        queryFn:getHeroSlides

    });

}