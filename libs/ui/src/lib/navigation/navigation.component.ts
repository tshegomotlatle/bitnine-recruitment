import { Component } from '@angular/core';

@Component({
  selector: 'bitnine-recruitment-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  showSearchBar : boolean = false;

  constructor(){

  }

  toggleSearchBarShow() : void
  {
    if (this.showSearchBar)
      this.showSearchBar = false;
    else
      this.showSearchBar = true;
  }
}
