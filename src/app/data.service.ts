import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private sharedDataSubject = new BehaviorSubject<any>(null);
    sharedData$ = this.sharedDataSubject.asObservable();
  
    constructor() { }
  
    updateData(newData: any) {
      this.sharedDataSubject.next(newData);
    }
}
