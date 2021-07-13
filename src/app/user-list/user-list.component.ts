import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: string[] = []
  currentUser:string = '';
  _service: DataService;
  constructor(private route: ActivatedRoute, private service: DataService) { 
    this._service = service;
  // If we pass name in query param, use this to fetch values
  //   this.route.queryParams.subscribe(params => {
  //     this.currentUser = params['user'];
  // });
  }

  ngOnInit(): void {
    this.users = this._service.getUserInfo();
  }

}
