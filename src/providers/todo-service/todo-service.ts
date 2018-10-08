// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';


// @Injectable()
// export class TodoServiceProvider {
//   apiUrl = "http://localhost:8100/api";

//   ToDoItem[];
    
 

//   constructor(public http: HttpClient) {
//     console.log('Hello TodoServiceProvider Provider');
//   }
//   etTodo(){
//     return new Promise(resolve => {
//       this.http.get(this.apiUrl+'/todos')
//         .subscribe((res: TodoItem[]) => {
//           resolve(res);
//         },error => {
//           console.log(error);
//       })
//     });
//   }
//   addTodo(data){
//     return new Promise((resolve,reject)=>{
//       this.http.post(this.apiUrl+'/todos', JSON.stringify(data),{
//         headers: new HttpHeaders().set('Content-type','application/json').set("Access-Control-Allow-Origin","*")
//       }).subscribe((data: TodoItem)=>{
//          resolve(data);
//         },err=>{
//           reject(err);
//         });
//     });
//   }
//   remove(data){
//     return new Promise((resolve,reject)=>{
//         this.http.delete(this.apiUrl+'/todos/'+data.id).subscribe((data: TodoItem)=>{
//           resolve(data);
//         },error=>{
//           console.log(error);
//           reject(error);
//         });
//     });
//   }
// }
