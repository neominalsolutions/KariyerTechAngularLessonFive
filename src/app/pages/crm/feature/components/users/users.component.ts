import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // bu componente özellk geçmemizi sağlayan yapılar olarak Input değerini kullanabiliriz.
  @Input() bgColor:string | undefined;


  users: any[] = [{
    name: 'ali',
    surname: 'tan'
  },
  {
    name: 'Ayşe',
    surname: 'Can'
  },
  {
    name: 'Kadir',
    surname: 'Han'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
