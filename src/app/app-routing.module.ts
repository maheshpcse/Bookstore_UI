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
import { ChatMeComponent } from './chat-me/chat-me.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';


const routes: Routes = [
  // {
  //   path: 'login',
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // },
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
    canActivate: [AuthGuardService],
    component: HomeComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuardService],
    component: DashboardComponent
  },
  {
    path: 'books',
    canActivate: [AuthGuardService],
    component: BooksComponent
  },
  {
    path: 'book/view',
    canActivate: [AuthGuardService],
    component: BookViewComponent
  },
  {
    path: 'book/orders',
    canActivate: [AuthGuardService],
    component: BookOrdersComponent
  },
  {
    path: 'book/order/form',
    canActivate: [AuthGuardService],
    component: BookOrderFormComponent
  },
  {
    path: 'books/history',
    canActivate: [AuthGuardService],
    component: BookHistoryComponent
  },
  {
    path: 'notifications',
    canActivate: [AuthGuardService],
    component: NotificationsComponent
  },
  {
    path: 'admin/profile',
    canActivate: [AuthGuardService],
    component: ViewProfileComponent
  },
  {
    path: 'admin/settings',
    canActivate: [AuthGuardService],
    component: SettingsComponent
  },
  { 
    path: 'admin/inbox',
    canActivate: [AuthGuardService],
    component: InboxComponent
  },
  {
    path: 'chatroom',
    canActivate: [AuthGuardService],
    component: ChatRoomComponent
  },
  {
    path: 'chatme',
    canActivate: [AuthGuardService],
    component: ChatMeComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
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
