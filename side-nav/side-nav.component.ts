import { Component, OnInit } from '@angular/core';
import { MENU_TREE } from './side-nav.model';

@Component({
  selector: 'mach-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  menuItem = MENU_TREE;
  constructor() {}

  ngOnInit(): void {}
}
