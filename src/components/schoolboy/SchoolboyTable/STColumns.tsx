import { ClassColumn } from "../../../interfaces/entity/ClassColumn.ts";
import { FC } from "react";
import { TableCell } from "@mui/material";

interface Props {
  classColumns: ClassColumn[];
}

export const STColumns: FC<Props> = ({ classColumns }) => {
  return (
    <>
      <TableCell>Ім’я учня</TableCell>
      {classColumns.map((column) => (
        <TableCell key={column.Id}>{column.Title}</TableCell>
      ))}
    </>
  );
};
