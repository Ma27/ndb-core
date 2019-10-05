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

import {DemoDataServiceConfig, DemoDataService} from './demo-data.service';
import {
  ClassProvider,
  FactoryProvider,
  ModuleWithProviders,
  NgModule,
  ValueProvider
} from '@angular/core';
import {DemoSchoolGenerator} from './demo-data-generators/demo-school-generator.service';
import {DemoChildGenerator} from './demo-data-generators/demo-child-generator.service';
import {DemoChildSchoolRelationGenerator} from './demo-data-generators/demo-child-school-relation-generator.service';
import {DemoAttendanceGenerator} from './demo-data-generators/demo-attendance-generator.service';
import {DemoNoteGeneratorService} from './demo-data-generators/demo-note-generator.service';

const DEFAULT_DEMO_GENERATOR_PROVIDERS = [
  ...DemoChildGenerator.provider({count: 150}),
  ...DemoSchoolGenerator.provider({count: 8}),
  ...DemoChildSchoolRelationGenerator.provider(),
  ...DemoAttendanceGenerator.provider(),
  ...DemoNoteGeneratorService.provider({minNotesPerChild: 2, maxNotesPerChild: 10, groupNotes: 5}),

  // TODO: demo data for ASER (from admission till passed or today)
  // TODO: demo data for EducationalMaterials (every child, 2-10 entries for past year)
  // TODO: demo data for HeightWeight (from admission till age 12; every 6 months)

  // TODO: remove database/demo-data.ts
];

@NgModule()
export class DemoDataModule {
  static forRoot(
    demoDataGeneratorProviders: (ValueProvider|ClassProvider|FactoryProvider)[] = DEFAULT_DEMO_GENERATOR_PROVIDERS
  ): ModuleWithProviders {
    return {
      ngModule: DemoDataModule,
      providers: [
        DemoDataService,
        { provide: DemoDataServiceConfig, useValue: {dataGeneratorProviders: demoDataGeneratorProviders} },
        demoDataGeneratorProviders,
      ],
    };
  }
}
