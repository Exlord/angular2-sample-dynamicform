import {Component, OnInit} from '@angular/core';

import {Field} from '../field/field';
import {FieldType} from '../field/field-type.enum';
import {FieldService} from '../field/field.service';
import {FormService} from '../form/form.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  fields: Field[];
  data: any[];

  constructor(private fieldService: FieldService,
              private formService: FormService) {
  }

  ngOnInit() {
    return this.getFields().then(() => {
      return this.getData();
    })
  }

  getFields(): Promise<Field[]> {
    return this.fieldService
      .getFields()
      .then(fields => this.fields = fields);
  }

  getData(): Promise<Field[]> {
    return this.formService
      .getData()
      .then(data => this.data = data);
  }
}
