import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  articles = []
isChecked: boolean = false;
isChecked1: boolean = false;
isChecked2: boolean = false;
constructor(){
  this.articles.push({ "isChecked" : false});
  this.articles.push({ "isChecked" : false});
  this.articles.push({ "isChecked" : false});
}
test= "";
checked(i){  
  this.articles.forEach(x=> x.isChecked = false);
  this.articles[i]['isChecked'] = !this.articles[i]['isChecked'];
}

}
