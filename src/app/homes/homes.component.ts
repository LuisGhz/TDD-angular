import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {

  homes$;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.homes$ = this.dataService.getHomes$();

  }

}
