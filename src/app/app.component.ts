import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'infigrade-seo';
constructor(private _router:Router){}
  ngOnInit(){

  }

 public navigatetoAboutUs(){
  this._router.navigate(['/aboutus']);
  }
}
