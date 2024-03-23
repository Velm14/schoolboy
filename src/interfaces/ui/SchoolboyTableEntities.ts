import { ClassColumn } from "../entity/ClassColumn.ts";
import { Schoolboy } from "../entity/Schoolboy.ts";
import { SchoolboyRate } from "../entity/SchoolboyRate.ts";

export interface SchoolboyTableEntities {
  classColumns: ClassColumn[];
  schoolboys: Schoolboy[];
  rates: SchoolboyRate[];
}
