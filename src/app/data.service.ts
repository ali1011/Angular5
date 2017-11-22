import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['goaal_1', 'goal_2', 'goal_3']);
  goal=this.goals.asObservable();
  
  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }

}
