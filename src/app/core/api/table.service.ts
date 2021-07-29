import { Injectable }         from '@angular/core';
import { Observable, of }     from 'rxjs';
import { Column, Row, Table } from '../models/Table';
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

  createTable(tableName: string, columns: any): void {
    const tableColumns: Column[] = columns.map((columnData: any) => {
      if (columnData.length > 0) {
        return {
          name           : columnData[0],
          columnOperation: null
        };
      }
      else if (columnData.length > 1) {
        return {
          name           : columnData[0],
          columnOperation: {
            columns  : columnData[1][0],
            operation: columnData[1][1]
          }
        };
      }
      else {
        return null;
      }
    });

    tables.push({
      id       : tables.length,
      name     : tableName,
      tableData: {
        columns: tableColumns,
        rows   : []
      }
    });

    console.log(tables);
  }
}
