export interface Column {
  id: string;
  text: string;
}

export interface Row {
  id: string;
  actionColumn?: Column;
  columns: Column[];
}
