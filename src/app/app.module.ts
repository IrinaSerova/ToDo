import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
<<<<<<< HEAD
import { RegistrationPage } from '../pages/registration/registration';
=======
import { LoginPage } from '../pages/login/login';

>>>>>>> 1864ed1cbb0a40a90c69c914b4cdd1ffe0746b78

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
<<<<<<< HEAD
    RegistrationPage
=======
    LoginPage,
>>>>>>> 1864ed1cbb0a40a90c69c914b4cdd1ffe0746b78
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
<<<<<<< HEAD
    RegistrationPage
=======
    LoginPage,
>>>>>>> 1864ed1cbb0a40a90c69c914b4cdd1ffe0746b78
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
