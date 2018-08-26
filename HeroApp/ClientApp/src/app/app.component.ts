import { Component, ElementRef, DebugElement } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  e: any;
   
  activate(e) {
    this.e = e.target['innerHTML'];
    console.log(e);
    console.log(e.target['innerHTML']);
  }

}
