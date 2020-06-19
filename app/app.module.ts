import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material-module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { WaferToolsComponent } from './wafer-tools/wafer-tools.component';
import { InspectionToolsComponent } from './inspection-tools/inspection-tools.component';
import { GlobalEnvironmentComponent } from './global-environment/global-environment.component';
import { LtpRecipeComponent } from './ltp-recipe/ltp-recipe.component';

@NgModule({
  declarations: [AppComponent, SideNavComponent, WaferToolsComponent, InspectionToolsComponent, GlobalEnvironmentComponent, LtpRecipeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
