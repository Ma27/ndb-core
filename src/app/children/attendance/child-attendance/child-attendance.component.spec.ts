import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAttendanceComponent } from './child-attendance.component';
import {ActivatedRoute} from '@angular/router';
import {Child} from '../../child';
import {ChildrenService} from '../../children.service';
import {UiHelperModule} from '../../../ui-helper/ui-helper.module';
import {DatePipe, PercentPipe} from '@angular/common';
import {EntityMapperService} from '../../../entity/entity-mapper.service';
import {DemoData} from '../../../database/demo-data';
import {AttendanceDaysComponent} from '../attendance-days/attendance-days.component';
import {AttendanceDayBlockComponent} from '../attendance-days/attendance-day-block.component';
import {MatSelectModule, MatTooltipModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {Database} from '../../../database/database';
import {MockDatabaseManagerService} from '../../../database/mock-database-manager.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('ChildAttendanceComponent', () => {
  let component: ChildAttendanceComponent;
  let fixture: ComponentFixture<ChildAttendanceComponent>;

  const mockChildrenService = {
    getChild: (id) => {
      return Observable.create(function (observer) {
        observer.onNext(new Child('22'));
        observer.onCompleted();
      });
    },
    getAttendances: () => {
      return Observable.create(function (observer) {
        observer.onNext(DemoData.getMonthAttendanceEntities());
        observer.onCompleted();
      });
    }
  };

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ ChildAttendanceComponent, AttendanceDaysComponent, AttendanceDayBlockComponent ],
      imports: [
        UiHelperModule,
        MatSelectModule,
        FormsModule,
        MatTooltipModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        DatePipe, PercentPipe,
        { provide: ActivatedRoute, useValue: {params: of({id: '22'})} },
        { provide: ChildrenService, useValue: mockChildrenService },
        { provide: Database, useValue: new MockDatabaseManagerService().getDatabase() },
        EntityMapperService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildAttendanceComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
