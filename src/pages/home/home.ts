import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddTodoPage } from '../add-todo/add-todo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public Items = [];
  
   constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
 
  }
  
   ionViewDidLoad(){
  }
 
   addItem(){
     let addModal = this.modalCtrl.create(AddTodoPage);
     addModal.onDidDismiss((item) => {
       if(item){
         this.saveItem(item);
        //  console.log(this.Items.length);
       }
     });
     addModal.present();
   }
   delete(item) {
    var index = this.Items.indexOf(item, 0);
    if (index > -1) {
        this.Items.splice(index, 1);
    }
}
   saveItem(item){
     this.Items.push(item);
   }
}
