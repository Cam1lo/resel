import { OperationEnum } from '../enums/operation-enum';

export class Table {
  id: number;
  name: string;
  tableData: TableData;
}

export class TableData {
  columns: Column[];
  rows: Row[];
}

export class Column {
  name: string;
  columnOperation: ColumnOperation | null;
}

class ColumnOperation {
  columns: Column[];
  operation: OperationEnum;
}

export class Row {
  data: any[];
}
