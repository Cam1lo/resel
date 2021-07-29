import { COMMA, ENTER }      from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormArray }         from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef }      from '@angular/material/dialog';
import { TableService }      from '../../../../core/api/table.service';
import { AddTableService }   from './add-table.service';
import { OperationEnum }     from '../../../../core/enums/operation-enum';

@Component({
  selector   : 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls  : ['./add-table.component.scss'],
  providers  : [AddTableService]
})
export class AddTableComponent implements OnInit {
  isSubmitting                = false;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  selectable: any;

  constructor(public addTableService: AddTableService,
              private tableService: TableService,
              private matDialogRef: MatDialogRef<AddTableComponent>) {
  }

  ngOnInit(): void {
  }

  innerOnSubmit(): void {
    console.log(this.addTableService.form.get('columns')?.value);
  }

  keys(): Array<string> {
    return Object.keys(OperationEnum);
  }
}
