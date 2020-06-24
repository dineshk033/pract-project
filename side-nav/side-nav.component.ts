import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';

import { FormControl } from '@angular/forms';
import { MENU_TREE } from './side-nav.model';

@Component({
  selector: 'mach-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  public selectedItem: string;
  public toggleIcon: boolean;
  public mobileQuery: MediaQueryList;
  public searchMenuItem;
  public searchValue = new FormControl('');
  private _mobileQueryListener: () => void;
  public menuItem = MENU_TREE;
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private breakpointObserver: BreakpointObserver
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.toggleIcon = true;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  menuSearch(arg) {
    this.searchMenuItem = this.menuItem.map((el) => {
      return el.children.filter((cel) =>
        cel.name.toLowerCase().includes(this.searchValue.value.toLowerCase())
      );
    });
    this.searchMenuItem = this.searchMenuItem.flat();
  }

  clearSearch() {
    this.searchValue.setValue('');
  }
}
