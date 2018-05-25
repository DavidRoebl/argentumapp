import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrentPage } from './current';
import { ToastController } from 'ionic-angular';

@NgModule({
  declarations: [
    CurrentPage,
  ],
  imports: [
    IonicPageModule.forChild(CurrentPage),
  ],
})
export class CurrentPageModule {}
