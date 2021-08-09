import { Component, OnInit }  from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute }     from '@angular/router';
import { TableService }       from '../../core/api/table.service';
import { MatTableService }    from '../../core/mat-table.service';
import { Row, Table }         from '../../core/models/Table';

@Component({
  selector   : 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls  : ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  table: Table;
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  isHold: boolean;
  matTable;

  constructor(private activatedRoute: ActivatedRoute,
              private tableService: TableService,
              private matTableService: MatTableService) {

    this.table    = this.activatedRoute.snapshot.data.table;
    this.matTable = this.matTableService.initializeMatTable(this.table);

    this.displayedColumns = this.matTable.displayedColumns;
    this.dataSource       = this.matTable.dataSource;
  }

  ngOnInit(): void {
  }

  addRow(): void {
    const newRow: Row = {
      data: []
    };
    this.displayedColumns.forEach(() => {
      newRow.data.push('');
    });

    if (newRow) {
      this.table.tableData.rows.push(newRow);
    }

    this.matTable   = this.matTableService.initializeMatTable(this.table);
    this.dataSource = this.matTable.dataSource;

    console.log(this.table);
  }

  showAddMultipleDialog(): void {
    console.log('add Multiple');
  }

  saveTable(): void {
    this.tableService.updateDataTable(this.table.id, this.dataSource);
  }
}
