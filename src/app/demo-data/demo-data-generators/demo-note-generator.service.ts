import {DemoChildGenerator} from './demo-child-generator.service';
import {DemoDataGenerator} from '../demo-data-generator';
import {Injectable} from '@angular/core';
import {Child} from '../../children/child';
import {Note} from '../../children/notes/note';
import {faker} from '../faker';
import {WarningLevel} from '../../children/attendance/warning-level';
import {noteIndividualStories} from '../fixtures/notes_individual-stories';
import {noteGroupStories} from '../fixtures/notes_group-stories';
import {centersUnique} from '../fixtures/centers';


export class DemoNoteConfig {
  minNotesPerChild: number;
  maxNotesPerChild: number;
  groupNotes: number;
}

/**
 * Generate a number of Note entities for each Child.
 * Builds upon the generated demo Child entities.
 */
@Injectable()
export class DemoNoteGeneratorService extends DemoDataGenerator<Note> {
  /**
   * This function returns a provider object to be used in an Angular Module configuration:
   *   `providers: [DemoNoteGeneratorService.provider()]`
   */
  static provider(config: DemoNoteConfig = {minNotesPerChild: 2, maxNotesPerChild: 10, groupNotes: 5}) {
    return [
      { provide: DemoNoteGeneratorService, useClass: DemoNoteGeneratorService },
      { provide: DemoNoteConfig, useValue: config },
    ];
  }



  private _teamMembers;
  get teamMembers(): string[] {
    const numberOfTeamMembers = 5;
    if (!this._teamMembers) {
      this._teamMembers = Array(numberOfTeamMembers).fill('').map(() => faker.name.firstName());
    }

    return this._teamMembers;
  }



  constructor(
    private config: DemoNoteConfig,
    private demoChildren: DemoChildGenerator,
  ) {
    super();
  }

  public generateEntities(): Note[] {
    const data = [];

    for (const child of this.demoChildren.entities) {
      const numberOfNotes =
        faker.random.number({min: this.config.minNotesPerChild, max: this.config.maxNotesPerChild});
      for (let i = 0; i < numberOfNotes; i++) {
        data.push(this.generateNoteForChild(child));
      }
    }

    for (const center of centersUnique) {
      const children: Child[] = this.demoChildren.entities.filter(c => c.center === center);
      for (let i = 0; i < this.config.groupNotes; i++) {
        data.push(this.generateGroupNote(children));
      }
    }

    return data;
  }

  private generateNoteForChild(child: Child): Note {
    const note = new Note(faker.random.uuid());

    const selectedStory = faker.random.arrayElement(noteIndividualStories);
    Object.assign(note, selectedStory);

    note.children = [child.getId()];
    note.author = faker.random.arrayElement(this.teamMembers);
    note.date = faker.date.between(child.admissionDate, this.getEarlierDateOrToday(child.dropoutDate));

    this.removeFollowUpMarkerForOldNotes(note);

    return note;
  }

  private removeFollowUpMarkerForOldNotes(note: Note) {
    const lastMonths = new Date();
    lastMonths.setMonth(lastMonths.getMonth() - 1);
    if (note.date < lastMonths) {
      note.warningLevel = WarningLevel.OK;
    }
  }

  private generateGroupNote(children: Child[]) {
    const note = new Note(faker.random.uuid());

    const selectedStory = faker.random.arrayElement(noteGroupStories);
    Object.assign(note, selectedStory);

    note.children = children.map(c => c.getId());
    note.author = faker.random.arrayElement(this.teamMembers);
    note.date = faker.date.past(1);

    this.removeFollowUpMarkerForOldNotes(note);

    return note;
  }
}
