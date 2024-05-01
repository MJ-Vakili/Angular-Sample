import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbCardModule, NbButtonModule, NbDialogModule, NbThemeModule, NbLayoutModule, NbContextMenuModule, NbActionsModule, NbMenuModule, NbIconModule, NbSidebarModule, NbAlertComponent, NbAlertModule, NbToastrService, NbToastrModule, NbInputModule, NbFormFieldModule, NbSelectModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    ProfileComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbActionsModule,
    NbMenuModule.forRoot(),
    NbContextMenuModule,
    NbEvaIconsModule,
    NbIconModule,
    NbSidebarModule,
    NbDialogModule.forRoot(),
    NbButtonModule,
    NbCardModule,
    NbAlertModule,
    NbToastrModule.forRoot(),
    NbInputModule,
    NbButtonModule,
    NbFormFieldModule,
    NbSelectModule,
    FormsModule,
    ReactiveFormsModule,
    UserComponent,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
