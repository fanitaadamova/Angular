import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
export class NewThemeComponent  {
  theme: Theme | undefined
  constructor() { }


  newThemeHandler(form: NgForm): void{
    if(form.invalid){
      return
    }

    console.log(form.value);
    

  }

}
