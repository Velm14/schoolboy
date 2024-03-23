import { ClassColumn } from "../../interfaces/entity/ClassColumn.ts";
import { requestAPI } from "./base.ts";
import { ClassColumnGetAll } from "../../interfaces/request/ClassAPI.ts";

export const getAllClassColumns = async (
  req: ClassColumnGetAll,
): Promise<ClassColumn[]> => {
  const res = await requestAPI<{ Items: ClassColumn[]; Quantity: number }>(
    `/${req.ClassName}/Column`,
    "GET",
  );
  return res.Items;
};
