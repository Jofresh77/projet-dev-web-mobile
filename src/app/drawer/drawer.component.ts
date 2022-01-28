import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {
  @ViewChild(MatDrawer) drawer!: MatDrawer;

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(): void {
    this.drawer.toggle();
  }
}
