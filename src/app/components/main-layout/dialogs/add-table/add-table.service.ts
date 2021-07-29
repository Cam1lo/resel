import { Injectable } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

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
}
