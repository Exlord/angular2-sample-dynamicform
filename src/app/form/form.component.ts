import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';

import {Field} from '../field/field';
import {FieldType} from '../field/field-type.enum';
import {FieldService} from '../field/field.service';
import {FormService} from './form.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  fields: Field[];
  form: FormGroup = null;
  submitted: boolean = false;

  constructor(private fieldService: FieldService,
              private formService: FormService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
   return this.getFields().then(() => {
     let fields = {};
     for (let i = 0, l = this.fields.length; i < l; i++) {
       let field = this.fields[i] as Field;
       fields[field.name] = [null];
     }

     this.form = this.fb.group(fields);
    });
  }

  getFields(): Promise<Field[]> {
    return this.fieldService
      .getFields()
      .then(fields => this.fields = fields);
  }

  save(value: any): void {
    this.submitted = true;
    this.formService.create(value).then(() => {
      this.submitted = false;
      this.form.reset();
    });
  }
}
