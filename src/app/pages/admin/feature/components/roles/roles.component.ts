import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles:any[] = [{
    name:'Admin'
  },
  {
    name:'Manager'
  }

]


  constructor() { }

  ngOnInit(): void {
  }

}
