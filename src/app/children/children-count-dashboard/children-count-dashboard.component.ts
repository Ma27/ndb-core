import { Component, OnInit } from '@angular/core';
import {ChildrenService} from '../children.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-children-count-dashboard',
  templateUrl: './children-count-dashboard.component.html',
  styleUrls: ['./children-count-dashboard.component.scss']
})
export class ChildrenCountDashboardComponent implements OnInit {
  totalChildren: number;
  childrenByCenter = [];

  constructor(private childrenService: ChildrenService,
              public router: Router) { }

  ngOnInit() {
    this.childrenService.getChildren()
      .subscribe(results => {
        this.totalChildren = results.length;

        const countMap = new Map<string, number>();
        results.forEach(child => {
          let count = countMap.get(child.center);
          if (count === undefined) {
            count = 0;
          }

          count++;
          countMap.set(child.center, count);
        });
        this.childrenByCenter = Array.from(countMap.entries()); // direct use of Map creates change detection problems
      });
  }


  goToChildrenList(filterString: string) {
    this.router.navigate(['/child'], {queryParams: {filter: filterString}});
  }
}