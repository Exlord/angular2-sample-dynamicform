import {Component, OnInit} from '@angular/core';

import {Field} from './field';
import {FieldType} from './field-type.enum';
import {FieldService} from './field.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  fields: Field[];
  FieldTypes: typeof FieldType = FieldType;
  fieldToEdit: Field = null;

  constructor(private fieldService: FieldService) {
  }

  ngOnInit() {
    this.getFields();
  }

  getFields(): void {
    this.fieldService
      .getFields()
      .then(fields => this.fields = fields);
  }

  onSave() {
    this.getFields();
  }

  delete(field: Field) {
    this.fieldService
      .delete(field.id)
      .then(this.getFields.bind(this));
  }

  edit(field) {
    this.fieldToEdit = field;
  }
}
