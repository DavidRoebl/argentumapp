import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FutureEventPage } from './future-event';

@NgModule({
  declarations: [
    FutureEventPage,
  ],
  imports: [
    IonicPageModule.forChild(FutureEventPage),
  ],
})
export class FutureEventPageModule {}
