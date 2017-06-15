import {FieldType} from './field-type.enum';

export class Field {
  id: number;
  name: string;
  type: FieldType;
  label: string;
  help: string;

  constructor() {
    this.type = FieldType.Text;
  }
}
