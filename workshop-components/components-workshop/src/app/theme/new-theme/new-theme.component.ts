import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
export class NewThemeComponent implements OnChanges {
  theme: Theme | undefined
  constructor() { }
//My desicion
  ngOnChanges(changes: SimpleChanges): void {
    
  }

}
