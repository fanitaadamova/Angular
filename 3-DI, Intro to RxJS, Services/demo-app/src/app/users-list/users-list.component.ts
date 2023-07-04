import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { User } from '../types/JSONplaceholderUser';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  @Input() users: User[] = [];

  constructor(private cd: ChangeDetectorRef) { }

  //ngOnChanges се тригърва, когато се тригърне changeDetection и така може да извършване някакви действия
  ngOnChanges() {
    console.log('invoked from ngOnChanges');
    console.log(this.users);
  }

  refresh() {
    this.cd.detectChanges();
  }

}
