import { Routes } from '@angular/router';
import { GeneralLayoutComponent } from './shared/layouts/general-layout-component/general-layout-component';
import { DatesPage } from './receptions/pages/dates-page/dates-page';
import { ListCustomerPage } from './customers/pages/list-customer-page/list-customer-page';

export const routes: Routes = [
  {
    path: '',
    component: GeneralLayoutComponent,
    children: [
      {
        path: 'customers',
        component: ListCustomerPage
      },
      {
        path: '',
        component: DatesPage
      }
    ]
  }
];
