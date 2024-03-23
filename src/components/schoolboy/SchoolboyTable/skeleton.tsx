import { Skeleton, TableCell, TableRow } from "@mui/material";
import { FC } from "react";

export const STColumnsLoader = () => {
  return (
    <>
      <TableCell>Ім’я учня</TableCell>
      <TableCell>
        <Skeleton animation="wave" variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton animation="wave" variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton animation="wave" variant="text" />
      </TableCell>
    </>
  );
};

interface STRowsLoaderProps {
  numRows: number;
}
export const STRowsLoader: FC<STRowsLoaderProps> = ({ numRows }) => {
  return [...Array(numRows)].map((i) => (
    <TableRow key={i}>
      <TableCell>
        <Skeleton animation="wave" variant="text" />
      </TableCell>
      <TableCell align="right">
        <Skeleton animation="wave" variant="text" />
      </TableCell>
      <TableCell align="right">
        <Skeleton animation="wave" variant="text" />
      </TableCell>
      <TableCell align="right">
        <Skeleton animation="wave" variant="text" />
      </TableCell>
      <TableCell align="right">
        <Skeleton animation="wave" variant="text" />
      </TableCell>
    </TableRow>
  ));
};
