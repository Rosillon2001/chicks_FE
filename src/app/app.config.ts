import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
// Ng Icons
import { provideIcons } from '@ng-icons/core';
// Icons
import { featherChevronDown, featherShoppingCart, featherUser, featherMenu, featherX, featherSearch,
  featherDollarSign, featherFeather, featherSliders, featherCircle, featherChevronUp,
  featherChevronLeft, featherChevronRight } from '@ng-icons/feather-icons';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideIcons({ featherChevronDown, featherShoppingCart, featherUser, featherMenu, featherX,
      featherSearch, featherDollarSign, featherFeather, featherSliders, featherCircle, featherChevronUp,
      featherChevronLeft, featherChevronRight })
  ]
};
