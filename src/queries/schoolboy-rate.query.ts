import { createQuery } from "react-query-kit";
import { SchoolboyRate } from "../interfaces/entity/SchoolboyRate.ts";
import {
  getAllSchoolboyRates,
  getSchoolboyRatesBySchoolboyId,
} from "../services/api/schoolboy-rate.api.ts";
import {
  SchoolboyRateGetAll,
  SchoolboyRateGetAllBySchoolboy,
} from "../interfaces/request/RateAPI.ts";

export const useAllSchoolboyRates = createQuery<
  SchoolboyRate[],
  SchoolboyRateGetAll
>({
  queryKey: ["schoolboyRates"],
  fetcher: async ({ ClassName }) => {
    return getAllSchoolboyRates({ ClassName });
  },
});

export const useAllSchoolboyRatesBySchoolboyId = createQuery<
  SchoolboyRate[],
  SchoolboyRateGetAllBySchoolboy
>({
  queryKey: ["schoolboyRates"],
  fetcher: async ({ ClassName, SchoolboyId }) => {
    return getSchoolboyRatesBySchoolboyId({ ClassName, SchoolboyId });
  },
});
