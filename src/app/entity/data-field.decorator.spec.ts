/*
 *     This file is part of ndb-core.
 *
 *     ndb-core is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     ndb-core is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with ndb-core.  If not, see <http://www.gnu.org/licenses/>.
 */

import { EntityMapperService } from './entity-mapper.service';
import { Entity } from './entity';
import {MockDatabase} from '../database/mock-database';
import {Database} from '../database/database';
import {DatabaseField} from './database-field.decorator';

class TestClass extends Entity {
  @DatabaseField('string')
  fieldUndefined: string;

  @DatabaseField('string')
  fieldWithDefault = 'default';

  @DatabaseField('date', { generateIndex: true } )
  fieldDate: Date;
}

fdescribe('@DatabaseField Decorator', () => {

  it('assigns correct default values', async () => {
    const testClass = new TestClass('1');

    expect(testClass.fieldUndefined).toBe(undefined);
    expect(testClass.fieldWithDefault).toBe('default');
  });

  it('results in full schema', async () => {
    const testClass = new TestClass('1');

    expect(TestClass.schema).toMatch({
      fieldUndefined: { dataType: 'string' },
      fieldWithDefault: { dataType: 'string' },
      fieldDate: { dataType: 'date' },
    });
  });

});
