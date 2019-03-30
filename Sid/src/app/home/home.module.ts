import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GraphqlModule } from '@app/graphql/graphql.module';
import { AmbulanceComponent } from './ambulance/ambulance.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GraphqlModule
  ],
  declarations: [HomeComponent, AmbulanceComponent],
  providers: [QuoteService]
})
export class HomeModule {}
