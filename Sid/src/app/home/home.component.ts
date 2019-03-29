import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';
import gql from 'graphql-tag';

import { QuoteService } from './quote.service';
import { Apollo } from 'apollo-angular';
import { numberTypeAnnotation } from 'babel-types';
import { HasService } from '@app/has.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  textBox = false;
  moderator = false;
  isLoading: boolean;
  number = '';
  location = '';
  name = '';
  phone = '';
  ambList: any[] = [];

  constructor(private has: HasService) {}

  ngOnInit() {
    this.getAmb();
    this.has.isModerator().subscribe(data => {
      this.moderator = data.data.moderators[0];
    });
  }
  initInputTextBox() {
    this.textBox = true;
  }

  removeTextBox() {
    this.textBox = false;
  }

  submit() {
    this.has.add(this.number, this.phone, this.location, this.name).subscribe((data: any) => {
      this.ambList.push(data.data.insert_ambulances.returning[0]);
      this.location = '';
      this.phone = '';
      this.name = '';
      this.number = '';
      this.textBox = false;
    });
  }

  getAmb() {
    this.has.getAmb().subscribe((data: any) => {
      this.ambList.push(...data.data.ambulances);
    });
  }
  editAmbulance(id: any) {
    console.log(id);

    this.ambList.forEach(amb => {
      console.log(amb.id, id);

      if (amb.id === id) {
        amb.edit = true;
      }
    });
    console.log(this.ambList);
  }
  deleteAmbulance(id: any) {
    this.has.deleteAmb(id).subscribe(data => {
      location.reload();
    });
  }
}
