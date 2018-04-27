import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DebitsPage } from './debits';

@NgModule({
  declarations: [
    DebitsPage,
  ],
  imports: [
    IonicPageModule.forChild(DebitsPage),
  ],
})
export class DebitsPageModule {}
