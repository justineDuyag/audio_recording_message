import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
  [x: string]: any;

  constructor(private alertCtrl: AlertController, private  router:  Router) { }



  btnClick(){
    console.log('btn Clicked');
    this.router.navigateByUrl('tab2');
    this.router.navigateByUrl('tabs');
  }

}
