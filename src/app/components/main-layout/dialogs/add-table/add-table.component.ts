import { COMMA, ENTER }      from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef }      from '@angular/material/dialog';
import { TableService }      from '../../../../core/api/table.service';
import { AddTableService }   from './add-table.service';

@Component({
  selector   : 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls  : ['./add-table.component.scss'],
  providers  : [AddTableService]
})
export class AddTableComponent implements OnInit {
  isSubmitting                = false;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  columns: string[]           = [];
  selectable: any;

  constructor(public addTableService: AddTableService,
              private tableService: TableService,
              private matDialogRef: MatDialogRef<AddTableComponent>) {
  }

  ngOnInit(): void {
  }

  innerOnSubmit(): void {
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.columns.push(value);
    }

    // Clear the input value
    event.input.value = '';
  }

  remove(column: any): void {
    const index = this.columns.indexOf(column);

    if (index >= 0) {
      this.columns.splice(index, 1);
    }
  }
}
