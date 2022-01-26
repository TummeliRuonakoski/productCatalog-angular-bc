import { Component, OnInit } from '@angular/core';
import data from '../../assets/phones/phones.json';

@Component({
  selector: 'app-phone',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})

export class PhoneComponent implements OnInit {

  public phoneList:{id:String, imageUrl:String, name:String,snippet:String}[] = data;
  constructor() { 
  }

  ngOnInit(): void {
  }

}
