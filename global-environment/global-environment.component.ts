import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { GlobalEnvModel } from './global-environment.model';
import { Tooltip } from '@syncfusion/ej2-angular-popups';
import { FetchApiService } from '../apiservice/fetch-api.service';

@Component({
  selector: 'app-global-environment',
  templateUrl: './global-environment.component.html',
  styleUrls: ['./global-environment.component.css']
})
export class GlobalEnvironmentComponent implements OnInit {

  constructor(private service: FetchApiService) { }

  public globalEnvDataSrc: MatTableDataSource<GlobalEnvModel>;
  public displayedColumns: string[]
  public isEditMode: boolean;
  public selectedRow: number;
  public selectedRowObj: GlobalEnvModel;
  public isReadOnly: boolean;
  public currentMaxVal: number;
  public currentMinVal: number;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('inputEle') inputEle;

  ngOnInit(): void {
    this.isEditMode = false;
    this.isReadOnly = false;
    this.selectedRow = 0;
    this.currentMaxVal = null;
    this.currentMinVal = null;
    this.displayedColumns = ['NAME', 'TYPE', 'VALUE'];
    this.getGlobalData();
  }

  public getGlobalData() {
    this.service.getGlobalEnvData("UDBCGlobals").subscribe((res: any) => {
      res.forEach(element => {
        if (element.VALUE_LIST != null) {
          let tempValList = element.VALUE_LIST.split("/");
          element.VALUE_LIST = tempValList;
        }
      });
      this.globalEnvDataSrc = new MatTableDataSource<GlobalEnvModel>(res);
      this.globalEnvDataSrc.paginator = this.paginator;
      this.globalEnvDataSrc.sort = this.sort;
      this.selectedRowObj = res[0];
      this.selectedRow = 0;
    });
  }

  public onRowSelect(row, rowIndex) {
    if (!this.isEditMode) {
      this.selectedRow = rowIndex;
      this.selectedRowObj = row;
      if (row.VFORMULA == "READONLY") {
        this.isReadOnly = true;
      } else {
        this.isReadOnly = false;
      }
      if (row.TYPE == "N") {
        let tempMinMax = row.VFORMULA.split("-");
        this.currentMinVal = tempMinMax[0];
        this.currentMaxVal = tempMinMax[1];
      }
      if (row.NAME == "ODD_EVEN_WAFER_ATTRIBUTE") {
        if (row.VALUE_LIST == null) {
          this.service.getOddEvenWaferAttrList("UDBCGlobals/ODD_EVEN_WAFER_ATTRIBUTE").subscribe((res: any) => {
            let valueList = res[0].VALUE_LIST.split("/")
            this.globalEnvDataSrc.data.forEach(ele => {
              if (ele.NAME == "ODD_EVEN_WAFER_ATTRIBUTE") {
                ele.VALUE_LIST = valueList;
              }
            })
          });
        }
      }
    }
  }

  public onEdit() {
    this.isEditMode = true;
  }

  public onCancel() {
    this.isEditMode = false;
  }

  public onUpdate() {
    let isValid: boolean = true;
    let errorMsg: string = "";
    if (this.selectedRowObj.VALUE_LIST == null) {
      this.selectedRowObj.VALUE = this.inputEle.nativeElement.value;
    }
    if (this.selectedRowObj.VALUE == "" || this.selectedRowObj.VALUE == null) {
      errorMsg = "This field is required.";
      isValid = false;
    } else {
      if (this.selectedRowObj.TYPE == "N") {
        if (parseInt(this.selectedRowObj.VALUE) < this.currentMinVal || parseInt(this.selectedRowObj.VALUE) > this.currentMaxVal) {
          // errorMsg = this.selectedRowObj.ERRORMSG;
          errorMsg = "Please enter the valid number.";
          isValid = false;
        } else {
          isValid = true;
        }
      } else {
        if (this.selectedRowObj.VFORMULA == null) {
          isValid = true;
        } else {
          let currentRegex = new RegExp(this.selectedRowObj.VFORMULA, "g");
          if (currentRegex.test(this.selectedRowObj.VALUE)) {
            isValid = true;
          } else {
            isValid = false;
            // errorMsg = this.selectedRowObj.ERRORMSG;
            errorMsg = "Please enter the valid string.";
          }
        }
      }
    }
    if (isValid) {
      this.isEditMode = false;
      this.service.modifyGlobalEnvData("UDBCGlobals", this.selectedRowObj).subscribe((res: any) => {
        this.getGlobalData();
      },
        (error) => {
          this.getGlobalData();
        });
    } else {
      let tooltip = new Tooltip({
        position: "BottomCenter",
        cssClass: "errorToolTip",
        opensOn: "click",
        content: errorMsg,
        closeDelay: 2000
      }, this.inputEle.nativeElement as HTMLElement);
      tooltip.open();
      tooltip.close();
    }
  }

  onSync() {
    this.service.syncGlobalEnvData("UDBCGlobals").subscribe((res: any) => {
      // this.getGlobalData();
    },
      (error) => {
        // this.getGlobalData();
      });
  }

}
