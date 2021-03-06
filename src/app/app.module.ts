import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { IconsModule } from './shared/icons/icons.module';
import { ProfileModule } from './profile/profile.module';
import { AngularFirestore } from '@angular/fire/firestore';

import { SigninPageModule } from './signin/signin.module';
import { ManagematchesPageModule } from './managematches/managematches.module';
import { AuthService } from './shared/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from './shared/user.service';
import { HttpClientModule } from '@angular/common/http';
import { Firebase } from '@ionic-native/firebase/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    ProfileModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    IconsModule,
    SigninPageModule,
    ManagematchesPageModule,
    HttpClientModule,
    ManagematchesPageModule],
  providers: [
    StatusBar,
    AuthService,
    UserService,
    AngularFireAuth,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFirestore,
    Firebase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
