import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MasinfoPage } from '../masinfo/masinfo';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any[] = [];

  constructor(public navCtrl: NavController,
    public userServiceProvider: UserServiceProvider) {

  }

  ionViewDidLoad(){
    this.userServiceProvider.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data['results'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  otraPagina(){
    this.navCtrl.push(MasinfoPage);
  }

}
