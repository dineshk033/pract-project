import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalEnvironmentComponent } from './global-environment/global-environment.component';
import { InspectionToolsComponent } from './inspection-tools/inspection-tools.component';
import { WaferToolsComponent } from './wafer-tools/wafer-tools.component';
import { LtpRecipeComponent } from './ltp-recipe/ltp-recipe.component';

const routes: Routes = [
  {
    path: 'global',
    component: GlobalEnvironmentComponent,
  },
  {
    path: 'inspmt',
    component: InspectionToolsComponent,
  },
  {
    path: 'monitor-loader',
    component: WaferToolsComponent,
  },
  {
    path: 'ltp',
    component: LtpRecipeComponent,
  },
  {
    path: 'cagcode',
    component: LtpRecipeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
