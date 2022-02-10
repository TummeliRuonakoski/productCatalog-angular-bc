import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { PhoneService } from '../phone.service';


@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})

export class PhoneComponent implements OnInit {

  phoneData! : any;
  phoneList! : String;
  phoneId: any;

  chosenPhone: any;
  allReady: boolean = false;
  faCheck = faCheck;
  faTimes = faTimes;
  imageUrl: string = '"assets/" + image;';

  constructor(private phoneService: PhoneService,
    private route: ActivatedRoute) { }


  getOnePhone(): void {
  this.phoneId = this.route.snapshot.params['id'];
  this.route.params.subscribe((params) => {
    this.phoneId = params['id'];
  });
  this.phoneService.getOnePhone(this.phoneId).subscribe(((data: any) => {
    this.chosenPhone = data;
    this.allReady = true;
  }));

  } 

  ngOnInit(): void {
    this.getOnePhone();
  }

  changeImage(event: any){
    this.imageUrl = event.target.getAttribute('src');
    document.getElementById('big-image')?.setAttribute('src',this.imageUrl);
  }
}
