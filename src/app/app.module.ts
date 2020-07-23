import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
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
import { OrderBookComponent } from './order-book/order-book.component';
import { BookOrderFormComponent } from './book-order-form/book-order-form.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { AuthInterceptorService } from './auth-interceptor.service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from './../environments/environment';
import { ChatMeComponent } from './chat-me/chat-me.component';
import { SocketIoService } from './socket-io.service';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { ChatBossComponent } from './chat-boss/chat-boss.component';
import { ReactiveFoamsComponent } from './reactive-foams/reactive-foams.component';

const config: SocketIoConfig = { url: environment.socketUrl, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidemenuComponent,
    NotFoundComponent,
    ViewProfileComponent,
    LoginComponent,
    SignupComponent,
    SettingsComponent,
    NotificationsComponent,
    BookOrdersComponent,
    BooksComponent,
    BookHistoryComponent,
    InboxComponent,
    BookViewComponent,
    OrderBookComponent,
    BookOrderFormComponent,
    ChatMeComponent,
    ChatRoomComponent,
    ReactiveFoamsComponent,
    ChatBossComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    ToastrModule.forRoot(),
    SocketIoModule.forRoot(config)
  ],
  providers: [
    AuthService,
    AuthInterceptorService,
    AuthGuardService,
    SocketIoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
