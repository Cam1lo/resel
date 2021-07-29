import { Injectable } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent }                  from '@angular/material/chips';
import { OperationEnum }                      from '../../../../core/enums/operation-enum';
import { Column }                             from '../../../../core/models/Table';

@Injectable()
export class AddTableService {
  public form: FormGroup;
  public initialData: any;

  constructor(private formBuilder: FormBuilder) {
    this.initialData = {
      name   : '',
      columns: []
    };

    this.form = this.formBuilder.group({
      name   : [this.initialData.name, [Validators.required]],
      columns: [this.initialData.columns, [Validators.required]]
    });
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || ''.trim());

    if (value) {
      const formColumns = this.form.get('columns')?.value;
      formColumns.push({
        name           : value,
        columnOperation: {
          operation: null,
          columns  : []
        }
      });
      this.form.get('columns')?.setValue(formColumns);
    }

    event.input.value = '';
  }

  remove(column: string): void {
    const formColumns            = this.form.get('columns')?.value;
    const formColumnsWithoutItem = formColumns.filter((columnValue: string) => column !== columnValue);

    this.form.get('columns')?.setValue(formColumnsWithoutItem);
  }

  setColumns(): void {
    console.log(this.form.get('columns')?.value);
  }

  optionSort(): void {
    console.log('asd');

    //  TODO: Order columns in selection order
  }

  behaviorColumnRemove(column: any, columnIndex: number): void {
    const columnBehavior = this.form.get('columns')?.value[columnIndex].columnOperation?.columns as Column[];
    this.removeFirst(columnBehavior, column);
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
}
