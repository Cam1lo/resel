import { Injectable }    from '@angular/core';
import { Column, Table } from './models/Table';

@Injectable({
  providedIn: 'root'
})
export class MatTableService {

  constructor() {
  }

  initializeMatTable(table: Table): { displayedColumns: string[], dataSource: any } {
    const displayedColumns = table.tableData.columns.map((column: Column) => column.name);
    const dataSource       = [];

    for (const row of table.tableData.rows) {
      const rowData: any = {};
      displayedColumns.forEach((column: string, index: number) => {
        rowData[column] = row.data[index];
      });

      dataSource.push(rowData);
    }

    return {
      displayedColumns,
      dataSource
    };
  }

  createMatTableTemplate(displayedColumns: string[]): string {
    let innerHtml = `<table mat-table [dataSource]="dataSource">`;

    displayedColumns.forEach((displayedColumn: string) => {
      innerHtml +=
        `<ng-container matColumnDef="${displayedColumn}">
          <th mat-header-cell *matHeaderCellDef>${displayedColumn}</th>
          <td mat-cell *matCellDef="let element">{{ element.${displayedColumn} }}</td>
         </ng-container>`;
    });

    innerHtml +=
      `<tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
       <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
       </table>`
    ;

    return innerHtml;
  }
}
