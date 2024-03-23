import { Column, Row } from "../../interfaces/common/Table.ts";
import { rateMapBuilder } from "./ratemap-builder.ts";
import { SchoolboyTableEntities } from "../../interfaces/ui/SchoolboyTableEntities.ts";
import { stringOrEmpty } from "./string.formatter.ts";

export const rowsBuilder = ({
  classColumns,
  schoolboys,
  rates,
}: SchoolboyTableEntities): Row[] => {
  const rateMap = rateMapBuilder(rates);
  const rows: Row[] = [];
  for (const schoolboy of schoolboys) {
    const columns: Column[] = [];
    for (const column of classColumns) {
      const rate = rateMap?.[schoolboy.Id]?.[column.Id];
      if (!rate) {
        columns.push({ text: "", id: column.Id.toString() });
        continue;
      }
      columns.push({ text: rate.Title, id: rate.ColumnId.toString() });
    }
    rows.push({
      columns,
      actionColumn: {
        id: schoolboy.Id.toString() + "action",
        text: `${stringOrEmpty(schoolboy.LastName)}
               ${stringOrEmpty(schoolboy.FirstName)}
               ${stringOrEmpty(schoolboy.SecondName)}`,
      },
      id: schoolboy.Id.toString(),
    });
  }

  return rows;
};
