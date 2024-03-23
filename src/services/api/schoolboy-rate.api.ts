import {
  SchoolboyRateDelete,
  SchoolboyRateGetAll,
  SchoolboyRateGetAllBySchoolboy,
  SchoolboyRateUpdate,
} from "../../interfaces/request/RateAPI.ts";
import { SchoolboyRate } from "../../interfaces/entity/SchoolboyRate.ts";
import { requestAPI } from "./base.ts";

export const getAllSchoolboyRates = async (
  req: SchoolboyRateGetAll,
): Promise<SchoolboyRate[]> => {
  const res = await requestAPI<{ Items: SchoolboyRate[]; Quantity: number }>(
    `/${req.ClassName}/Rate`,
    "GET",
  );
  return res.Items;
};

export const getSchoolboyRatesBySchoolboyId = async (
  req: SchoolboyRateGetAllBySchoolboy,
): Promise<SchoolboyRate[]> => {
  const res = await requestAPI<{ Items: SchoolboyRate[]; Quantity: number }>(
    `/${req.ClassName}/Rate/${req.SchoolboyId}`,
    "GET",
  );
  return res.Items;
};

export const updateSchoolboyRate = async (
  req: SchoolboyRateUpdate,
): Promise<void> => {
  return requestAPI(`/${req.ClassName}/Rate`, "POST", {
    data: {
      SchoolboyId: req.SchoolboyId,
      ColumnId: req.ColumnId,
      Title: req.Title,
    },
  });
};

export const deleteSchoolboyRate = async (
  req: SchoolboyRateDelete,
): Promise<void> => {
  return requestAPI(`/${req.ClassName}/UnRate`, "POST", {
    data: {
      SchoolboyId: req.SchoolboyId,
      ColumnId: req.ColumnId,
    },
  });
};
