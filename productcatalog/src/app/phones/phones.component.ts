import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PhoneService } from '../phone.service';
import { Phones } from './phones.interfaces';
import { PhonesPipe } from './phones.pipe';


@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})

export class PhonesComponent implements OnInit {

  @Input() searchPhones! : string;
  @Output() phoneEvent = new EventEmitter<string>();
  phoneUrl = 'assets/phones/phones.json';
  phones!: Phones[];
  phonesHeader: string = '';

  // phones: Phones[] = [];
  // searchList! : any;
  objectKeys = Object.keys;
  items = { keyOne: 'newest', keyTwo: 'alphabetical'};

  constructor(private phoneService: PhoneService) {}

  getAllPhones(): void{
    this.phoneService.getAllPhones().subscribe(phones => {
      this.phones = phones;
    });
  }

  ngOnInit(): void {
    this.getAllPhones();
  }

  sort(event:any){
    this.phonesHeader = event.target.value;
  }

  sentEvent(){
    this.phoneEvent.emit(this.searchPhones);
  }
}
