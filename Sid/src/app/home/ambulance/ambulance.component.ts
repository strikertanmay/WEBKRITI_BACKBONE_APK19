import { Component, OnInit, Input } from '@angular/core';
import { HasService } from '@app/has.service';

@Component({
  selector: 'app-ambulance',
  templateUrl: './ambulance.component.html',
  styleUrls: ['./ambulance.component.scss']
})
export class AmbulanceComponent implements OnInit {
  @Input() ambulance: any;
  location = '';
  phone = '';
  name = '';
  number = '';
  constructor(private has: HasService) {}

  ngOnInit() {
    this.location = this.ambulance.location;
    this.phone = this.ambulance.phone_number;
    this.name = this.ambulance.driver_name;
    this.number = this.ambulance.ambulance_number;
  }

  update() {
    this.has.update(this.number, this.phone, this.location, this.name, this.ambulance.id).subscribe((data: any) => {
      this.ambulance = data.data.update_ambulances.returning[0];
      this.ambulance.edit = false;
      location.reload();
    });
  }
  cancel() {
    this.ambulance.edit = false;
    location.reload();
  }
}
