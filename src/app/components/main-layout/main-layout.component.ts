import { Component, OnInit }       from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute }          from '@angular/router';
import { Table }                   from '../../core/models/Table';
import { AddTableComponent }       from './dialogs/add-table/add-table.component';

@Component({
  selector   : 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls  : ['./main-layout.component.scss']
})

export class MainLayoutComponent implements OnInit {
  tables: Table[];

  constructor(private activatedRoute: ActivatedRoute,
              private dialog: MatDialog) {
    this.tables = this.activatedRoute.snapshot.data.tables;
  }

  showAddDialog(): void {
    const dialogRef: MatDialogRef<AddTableComponent> = this.dialog.open(AddTableComponent);
  }

  ngOnInit(): void {
  }
}
