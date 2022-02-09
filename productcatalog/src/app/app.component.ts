import { Component, Input } from '@angular/core';
import { PhonesComponent } from './phones/phones.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'productcatalog';
  @Input()searchPhones!: PhonesComponent;
  
}
