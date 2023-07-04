
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit, OnChanges {
 
  @Input('title') titleFromApp: string = '';
  @Output() onChildOutput = new EventEmitter<boolean>();

  isActive = false;
  inputValue = 'Hello';

  ngOnInit() {
    //debugger;
    console.log('CREATED');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes');
    console.log(changes);

  }

  activeUsers = [
    { name: 'Mitko', age: 21 },
    { name: 'Fani', age: 23 },
    { name: 'Rimi', age: 19 },
    { name: 'Mimi', age: 20 }
  ]



  handleClick(event: Event): void {
    console.log(event);

    this.isActive = !this.isActive;
    this.onChildOutput.emit(this.isActive);

  }
}
