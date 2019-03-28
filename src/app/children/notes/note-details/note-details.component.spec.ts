import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDetailsComponent } from './note-details.component';
import {
  MAT_DIALOG_DATA,
  MatAutocompleteModule,
  MatDialogModule, MatDialogRef,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import {UiHelperModule} from '../../../ui-helper/ui-helper.module';
import {EntityModule} from '../../../entity/entity.module';
import {FormsModule} from '@angular/forms';
import {ChildSelectComponent} from '../../child-select/child-select.component';
import {ChildBlockComponent} from '../../child-block/child-block.component';
import {Note} from '../note';
import {Database} from '../../../database/database';
import {ChildrenService} from '../../children.service';
import {WarningLevel} from '../../attendance/warning-level';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {SchoolBlockComponent} from '../../../schools/school-block/school-block.component';
import {MockDatabaseManagerService} from '../../../database/mock-database-manager.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('NoteDetailsComponent', () => {
  let component: NoteDetailsComponent;
  let fixture: ComponentFixture<NoteDetailsComponent>;

  let note;

  beforeEach(async(() => {
    note = new Note('');
    note.warningLevel = WarningLevel.WARNING;
    note.date = new Date();
    note.subject = 'test';
    note.author = 'tester';
    note.text = 'foo';
    note.children = ['1', '2'];

    TestBed.configureTestingModule({
      declarations: [
        NoteDetailsComponent,
        ChildSelectComponent,
        ChildBlockComponent,
        SchoolBlockComponent
      ],
      imports: [
        MatDialogModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        NoopAnimationsModule,
        MatIconModule,
        UiHelperModule,
        EntityModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        {provide: Database, useValue: new MockDatabaseManagerService().getDatabase()},
        {provide: MatDialogRef, useValue: {beforeClose: () => { return { subscribe: () => {}}}}},
        {provide: MAT_DIALOG_DATA, useValue: {entity: note}},
        ChildrenService,
        ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
