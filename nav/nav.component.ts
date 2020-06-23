import { Component, ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { MenuItem, FlatNode, TREE_DATA, MENU_TREE } from './nav.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
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
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit() {
    this.toggleIcon = true;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  private _transformer = (node: MenuItem, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      navigation: node.navigation,
    };
  };

  treeControl = new FlatTreeControl<FlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: FlatNode) => node.expandable;

  public onSelectMenu(item) {
    this.selectedItem = item;
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
