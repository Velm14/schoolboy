import { Schoolboy } from "../../../interfaces/entity/Schoolboy.ts";
import { ClassColumn } from "../../../interfaces/entity/ClassColumn.ts";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { STColumnsLoader, STRowsLoader } from "./skeleton.tsx";
import { FC } from "react";
import { STColumns } from "./STColumns.tsx";
import { STRows } from "./STRows.tsx";
import { SchoolboyRate } from "../../../interfaces/entity/SchoolboyRate.ts";

interface RateClick {
  SchoolboyId: number;
  ColumnId: number;
}

interface Props {
  isLoading: boolean;
  schoolboys: Schoolboy[];
  classColumns: ClassColumn[];
  rates: SchoolboyRate[];
  onClickSchoolboy: (schoolboy: Schoolboy) => void;
  onClickRate: (args: RateClick) => void;
}

export const SchoolboyTable: FC<Props> = ({
  isLoading,
  schoolboys,
  classColumns,
  rates,
  onClickSchoolboy,
  onClickRate,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            {isLoading ? (
              <STColumnsLoader />
            ) : (
              <STColumns classColumns={classColumns} />
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <STRowsLoader numRows={5} />
          ) : (
            <STRows
              classColumns={classColumns}
              schoolboys={schoolboys}
              rates={rates}
              onCellClick={(props) => {
                onClickRate({
                  SchoolboyId: parseInt(props.rowId),
                  ColumnId: parseInt(props.columnId),
                });
              }}
              onActionCellClick={(schoolboyId) => {
                onClickSchoolboy(
                  schoolboys.find((s) => s.Id === parseInt(schoolboyId))!,
                );
              }}
            />
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
