import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddTodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-todo',
  templateUrl: 'add-todo.html',
})
export class AddTodoPage {
  title;
  about;
  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTodoPage');
  }
  saveItem(){
 
    if(this.title !== undefined){
      
      this.view.dismiss({
        title: this.title,
        about: this.about
      })
 
    }else{
      this.view.dismiss()
    }
  }
 
  close(){
    this.view.dismiss()
  }
}
