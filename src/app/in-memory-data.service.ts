/**
 * Created by Exlord on 6/13/2017.
 */
import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const fields = [
      {id: 0, name: 'name', type: 1, label: 'Name', help: 'this is help text'},
      {id: 1, name: 'last_name', type: 1, label: 'Last Name', help: 'this is another help text'},
    ];
    const form = [
      {id: 0, name: 'name1', last_name: 'last_name1'},
      {id: 1, name: 'name2', last_name: 'last_name2'}
    ];
    return {fields, form};
  }
}
