import { Component, OnInit }  from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute }     from '@angular/router';
import { TableService }       from '../../core/api/table.service';
import { MatTableService }    from '../../core/mat-table.service';
import { Table }              from '../../core/models/Table';

@Component({
  selector   : 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls  : ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  table: Table;
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  tableInnerHtml: string;
  isHold: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private tableService: TableService,
              private matTableService: MatTableService) {

    this.table     = this.activatedRoute.snapshot.data.table;
    const matTable = this.matTableService.initializeMatTable(this.table);

    this.displayedColumns = matTable.displayedColumns;
    this.dataSource       = matTable.dataSource;
    this.tableInnerHtml   = this.matTableService.createMatTableTemplate(this.displayedColumns);
  }

  ngOnInit(): void {
  }

  addRow(): void {
    console.log('add Row');
  }

  showAddMultipleDialog(): void {
    console.log('add Multiple');
  }

  saveTable(): void {
    console.log('save');
  }
}
