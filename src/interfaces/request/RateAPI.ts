import { WithClass } from "./WithClass.ts";

export interface SchoolboyRateGetAll extends WithClass {}

export interface SchoolboyRateGetAllBySchoolboy extends WithClass {
  SchoolboyId: number;
}

export interface SchoolboyRateDelete extends WithClass {
  SchoolboyId: number;
  ColumnId: number;
}

export interface SchoolboyRateUpdate extends WithClass {
  SchoolboyId: number;
  ColumnId: number;
  Title: string;
}
