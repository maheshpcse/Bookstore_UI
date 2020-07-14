import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ViewProfileComponent } from './admin/view-profile/view-profile.component';
import { LoginComponent } from './access/login/login.component';
import { SignupComponent } from './access/signup/signup.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { BookOrdersComponent } from './book-orders/book-orders.component';
import { BooksComponent } from './books/books.component';
import { BookHistoryComponent } from './book-history/book-history.component';
import { InboxComponent } from './admin/inbox/inbox.component';
import { BookViewComponent } from './book-view/book-view.component';
import { BookOrderFormComponent } from './book-order-form/book-order-form.component';
import { AuthGuardService } from './auth-guard.service';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'book/view',
    component: BookViewComponent
  },
  {
    path: 'book/orders',
    component: BookOrdersComponent
  },
  {
    path: 'book/order/form',
    component: BookOrderFormComponent
  },
  {
    path: 'books/history',
    component: BookHistoryComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  {
    path: 'admin/profile',
    component: ViewProfileComponent
  },
  {
    path: 'admin/settings',
    component: SettingsComponent
  },
  {
    path: 'admin/inbox',
    component: InboxComponent
  },
  {
    path: 'profile',
    canActivate: [AuthGuardService],
    component: LoginComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
