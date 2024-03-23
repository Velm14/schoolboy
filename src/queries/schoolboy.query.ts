import { createQuery } from "react-query-kit";
import { Schoolboy } from "../interfaces/entity/Schoolboy.ts";
import { getAllSchoolboys } from "../services/api/schoolboy.api.ts";
import { SchoolboyGetAll } from "../interfaces/request/SchoolboyAPI.ts";

export const useAllSchoolboys = createQuery<Schoolboy[], SchoolboyGetAll>({
  queryKey: ["schoolBoys"],
  fetcher: async ({ ClassName }) => {
    return getAllSchoolboys({ ClassName });
  },
});
