import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { HomePage } from '../home/home';
import { AppProvider } from '../../providers/app/app';
import { TabsPage } from '../../pages/tabs/tabs';
import { RegisterPage } from '../../pages/register/register';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  pushPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _app: AppProvider) { 

  this.pushPage = RegisterPage;
  }

  user: any = {
    email:"",
    password:""
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public createAccount() {
    console.log("push works",this.navCtrl.push)
    this.navCtrl.push(RegisterPage);
    console.log("register is working",RegisterPage);
  }

  onLogin() {
    console.log("login",this.user)
     this._app.login(this.user)
      .subscribe((response: any) => {
        window.sessionStorage.setItem('token', response.token);
        window.sessionStorage.setItem('userId', response.UserId);
        console.log("works",response);
        this.navCtrl.setRoot(TabsPage);
        
      },
    
  err=>{ 
console.log(err.message);    
  })
    
  }

  
}