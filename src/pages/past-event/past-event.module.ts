import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PastEventPage } from './past-event';

@NgModule({
  declarations: [
    PastEventPage,
  ],
  imports: [
    IonicPageModule.forChild(PastEventPage),
  ],
})
export class PastEventPageModule {}
