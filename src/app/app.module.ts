import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { GridsterModule } from 'angular-gridster2';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { GridComponent } from './grid/grid.component';
import { GridItemComponent } from './grid/grid-item/grid-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    GridComponent,
    GridItemComponent,
  ],
  imports: [
    BrowserModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    GridsterModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
