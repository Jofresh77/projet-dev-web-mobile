import {Component, Input, OnInit} from '@angular/core';
import {DrawerComponent} from "../drawer/drawer.component";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() drawer!: DrawerComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
