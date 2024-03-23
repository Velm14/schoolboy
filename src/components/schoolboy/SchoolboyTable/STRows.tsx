import { FC } from "react";
import { Link, TableCell, TableRow } from "@mui/material";
import { rowsBuilder } from "../../../services/utils/rows-builder.ts";
import { SchoolboyTableEntities } from "../../../interfaces/ui/SchoolboyTableEntities.ts";

interface CellClick {
  rowId: string;
  columnId: string;
}

interface Props extends SchoolboyTableEntities {
  onCellClick: (props: CellClick) => void;
  onActionCellClick: (rowId: string) => void;
}

export const STRows: FC<Props> = ({
  classColumns,
  schoolboys,
  rates,
  onCellClick,
  onActionCellClick,
}) => {
  const rows = rowsBuilder({ classColumns, schoolboys, rates });
  return (
    <>
      {rows.map((row, index) => (
        <TableRow key={row.id}>
          <TableCell key={`index-${index}`}>{index}</TableCell>
          {row.actionColumn && (
            <TableCell key={row.actionColumn.id}>
              <Link
                href="#"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  onActionCellClick(row.id);
                }}
              >
                {row.actionColumn.text}
              </Link>
            </TableCell>
          )}
          {row.columns.map((column) => (
            <TableCell
              key={column.id}
              style={{ cursor: "pointer" }}
              onClick={() => {
                onCellClick({ rowId: row.id, columnId: column.id });
              }}
            >
              {column.text}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};
