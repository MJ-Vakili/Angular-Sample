import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { UserService } from '../user.service';
import { User } from '../user';
import { debounceTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone: true,
  imports: [
    // ...
    MatTableModule,
    CommonModule
  ],
})
export class UserComponent {
  displayedColumns: string[] = ['_id', 'name', 'balance', 'age', 'gender', 'company', 'email', 'phone', 'address'];
  allColumns: string[] = [...this.displayedColumns, 'isActive', 'registered'];
  dataSource: User[] = [];// =  //ELEMENT_DATA;
  constructor(private userService: UserService) {
    userService.getUsers().subscribe((x: User[]) => {
      x.map((y) => {
        //y.registeredString = y.registered.toString();
        this.dataSource.push(y);
      });
      console.log(x, x[0].registered)
    });
  }
}
