import { Component } from '@angular/core';

import { CurrentPage } from '../current/current';
import { FuturePage } from '../future/future';
import { PastPage } from '../past/past';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PastPage;
  tab2Root = CurrentPage;
  tab3Root = FuturePage;

  constructor() {

  }
}
