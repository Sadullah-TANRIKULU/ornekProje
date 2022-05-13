import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = 'Örnek Proje';

  constructor() { }

  ngOnInit(): void {
    this.setTitle()      // projede ilk çalışan function ngOnInit oduğu için tanımladığımız setTitle() ı burada çağırıyoruz. 
  }
  setTitle() {
    this.title = 'asd'
  }

}
