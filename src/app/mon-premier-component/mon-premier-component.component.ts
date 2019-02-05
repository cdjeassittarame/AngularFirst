import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../shared/userservice/user.service';

export interface UserEntity {
  nom: string;
  prenom: string;
  id: Int16Array;
}

@Component({
  selector: 'app-mon-premier-component',
  templateUrl: './mon-premier-component.component.html',
  styleUrls: ['./mon-premier-component.component.css']
})
export class MonPremierComponentComponent implements OnInit {

  public user;

  constructor(private userservice: UserService) {
  }

  ngOnInit() {

    this.userservice.getAll().subscribe((data) => {
      this.user = data;
    });

  }


}
