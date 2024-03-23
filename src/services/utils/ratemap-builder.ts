import { SchoolboyRate } from "../../interfaces/entity/SchoolboyRate.ts";

type RateByColumnId = Record<string, SchoolboyRate>;
type RateBySchoolboyId = Record<string, RateByColumnId>;
export const rateMapBuilder = (rates: SchoolboyRate[]): RateBySchoolboyId => {
  const rateMap: RateBySchoolboyId = {};
  for (const rate of rates) {
    if (!rateMap[rate.SchoolboyId]) {
      rateMap[rate.SchoolboyId] = {};
    }
    if (!rateMap[rate.SchoolboyId][rate.ColumnId]) {
      rateMap[rate.SchoolboyId][rate.ColumnId] = rate;
    } else {
      console.log("Duplicated rate", rate);
    }
  }
  return rateMap;
};
