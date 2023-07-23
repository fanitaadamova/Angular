import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css']
})
export class CurrentThemeComponent implements OnInit {
  isLiked = false;
  isSubcribed = false;


  theme: Theme | undefined;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService) { }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  like(): void {
   

    // TODO: get number of likes
    if(this.isLiked){
      // TODO:  - 1 like   
          
    }else{      
      // TODO: + 1 like 
      console.log("I like this");
    }
    
    // TODO: update number of likes


    this.isLiked = !this.isLiked;
  }

  subscribe(): void {
    this.isSubcribed = !this.isSubcribed;
  }


  ngOnInit(): void {
    this.fetchTheme();
  }

  fetchTheme(): void {

    const id = this.activatedRoute.snapshot.params['themeId'];
    this.apiService.getTheme(id).subscribe((theme) => {
      this.theme = theme;
      console.log({ theme });

    })
  }

}
