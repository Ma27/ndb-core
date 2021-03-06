import {DemoChildGenerator} from './demo-child-generator.service';
import {DemoDataGenerator} from '../demo-data-generator';
import {Injectable} from '@angular/core';
import {Child} from '../../children/child';
import {faker} from '../faker';
import {WarningLevel} from '../../children/attendance/warning-level';
import {Aser} from '../../children/aser/aser';


/**
 * Generate ASER results every 12 months for each Child until passing.
 * Builds upon the generated demo Child entities.
 */
@Injectable()
export class DemoAserGeneratorService extends DemoDataGenerator<Aser> {
  /**
   * This function returns a provider object to be used in an Angular Module configuration:
   *   `providers: [DemoAserGeneratorService.provider()]`
   */
  static provider() {
    return [
      { provide: DemoAserGeneratorService, useClass: DemoAserGeneratorService },
    ];
  }


  constructor(
    private demoChildren: DemoChildGenerator,
  ) {
    super();
  }

  public generateEntities(): Aser[] {
    const data = [];

    for (const child of this.demoChildren.entities) {
      data.push(...this.generateAserResultsForChild(child));
    }

    return data;
  }

  private generateAserResultsForChild(child: Child): Aser[] {
    const data = [];

    let date = new Date(child.admissionDate.getTime());
    let previousResult = new Aser('');
    const firstLanguage = child.motherTongue.toLowerCase();
    do {
      const aserResult = new Aser(faker.random.uuid());
      aserResult.child = child.getId();
      aserResult.date = date;
      aserResult.math = this.selectNextSkillLevel(Aser.MathLevels, previousResult.math);
      aserResult.english = this.selectNextSkillLevel(Aser.ReadingLevels, previousResult.english);
      aserResult[firstLanguage] = this.selectNextSkillLevel(Aser.ReadingLevels, previousResult[firstLanguage]);

      data.push(aserResult);

      date = new Date(date.getFullYear() + 1, 2, 1);
      previousResult = aserResult;
    } while (
      date < this.getEarlierDateOrToday(child.dropoutDate)
      && previousResult.getWarningLevel() !== WarningLevel.OK
    );

    return data;
  }

  /**
   * Randomly select the next Aser level for a skill based on the previous result.
   * @param skillRange The array of skill levels for the desired subject (Aser.MathLevels or Aser.ReadingLevels)
   * @param previousSkillLevel The string indicating the level from the previous test for this subject
   */
  private selectNextSkillLevel(skillRange: string[], previousSkillLevel: string): string {
    const previousSkillLevelIndex = skillRange.indexOf(previousSkillLevel);

    let nextSkillLevelIndex;
    const random = faker.random.number(100);
    if (random < 20) {
      nextSkillLevelIndex = previousSkillLevelIndex;
    } else if (random < 90) {
      nextSkillLevelIndex = previousSkillLevelIndex + 1;
    } else {
      nextSkillLevelIndex = previousSkillLevelIndex + 2;
    }

    return skillRange[this.trimToValidIndex(nextSkillLevelIndex, skillRange)];
  }

  /**
   * Convert the given number to a valid index of the array by capping it to a range of [0, array.lenght -1]
   * @param index
   * @param array
   */
  private trimToValidIndex(index: number, array: any[]) {
    if (index < 0) {
      return 0;
    }
    return Math.min(index, array.length - 1);
  }
}
