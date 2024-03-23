import { Schoolboy } from "../../interfaces/entity/Schoolboy.ts";
import { requestAPI } from "./base.ts";

import { SchoolboyGetAll } from "../../interfaces/request/SchoolboyAPI.ts";

export const getAllSchoolboys = async (
  req: SchoolboyGetAll,
): Promise<Schoolboy[]> => {
  const res = await requestAPI<{ Items: Schoolboy[]; Quantity: number }>(
    `/${req.ClassName}/Schoolboy`,
    "GET",
  );
  return res.Items;
};
