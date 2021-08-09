import { Injectable }         from '@angular/core';
import { Observable, of }     from 'rxjs';
import { Row, Table } from '../models/Table';
import { tables }             from './data/tables';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  constructor() {
  }

  getAllTables(): Observable<Table[]> {
    return of(tables);
  }

  getTableById(id: string): Observable<Table | undefined> {
    const foundTable = tables.find((table) => table.id === Number(id));
    return of(foundTable);
  }

  createTable(table: { name: string, columns: [] }): void {
    tables.push({
      id       : tables.length,
      name     : table.name,
      tableData: {
        columns: table.columns,
        rows   : []
      }
    });
  }

  updateDataTable(tableId: any, dataTable: any): void {
    const rows: Row[] = [];

    dataTable.forEach((data: any) => {
      rows.push({
        data: Object.values(data)
      });
    });

    this.getTableById(tableId).subscribe((table) => {
      if (table) {
        table.tableData.rows = rows;
      }
    });
  }
}
