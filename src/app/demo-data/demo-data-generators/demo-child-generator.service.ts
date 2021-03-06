import {Child} from '../../children/child';
import {Gender} from '../../children/Gender';
import {religions} from '../fixtures/religions';
import {languages} from '../fixtures/languages';
import {dropoutTypes} from '../fixtures/dropout-types';
import {Injectable} from '@angular/core';
import {DemoDataGenerator} from '../demo-data-generator';
import {faker} from '../faker';
import {centersWithProbability} from '../fixtures/centers';


export class DemoChildConfig {
  count: number;
}

@Injectable()
export class DemoChildGenerator extends DemoDataGenerator<Child> {
  static count: number;

  /**
   * This function returns a provider object to be used in an Angular Module configuration:
   *   `providers: [DemoUserProvider.provider({count: 150})]`
   * @param config The configuration specifying the number of entities the service should generate.
   */
  static provider(config: DemoChildConfig) {
    return [
      { provide: DemoChildGenerator, useClass: DemoChildGenerator },
      { provide: DemoChildConfig, useValue: config },
    ];
  }


  constructor(public config: DemoChildConfig) {
    super();
  }

  generateEntities(): Child[] {
    const data = [];

    for (let i = 1; i <= this.config.count; i++) {
      const child = new Child(String(i));
      child.name = faker.name.firstName() + ' ' + faker.name.lastName();
      child.projectNumber = String(i);
      child.religion = faker.random.arrayElement(religions);
      child.gender = faker.random.arrayElement([Gender.MALE, Gender.FEMALE]);
      child.dateOfBirth = faker.dateOfBirth(5, 20);
      child.motherTongue = faker.random.arrayElement(languages);
      child.center = faker.random.arrayElement(centersWithProbability);

      child.admissionDate = faker.date.past(child.age - 4);

      if (faker.random.number(100) > 80) {
        this.makeChildDropout(child);
      }

      data.push(child);
    }
    return data;
  }

  private makeChildDropout(child: Child) {
    child.dropoutDate = faker.date.between(child.admissionDate, new Date());
    child.dropoutRemarks = faker.lorem.sentence();
    child.dropoutType = faker.random.arrayElement(dropoutTypes);
    child.status = 'Dropout';
  }
}
