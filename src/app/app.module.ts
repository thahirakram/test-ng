import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { FooterComponent } from './footer/footer.component';

const rooter: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'table',
    component: TableComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    TableComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rooter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
