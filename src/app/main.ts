import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

import {Dataprovider} from '../dataprovider';

platformBrowserDynamic().bootstrapModule(AppModule);
Dataprovider.initialize();
  