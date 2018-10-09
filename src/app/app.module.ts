import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { Form2Component } from './form2/form2.component';

const rooter: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'form',
    component: Form2Component
  }
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    TableComponent,
    FooterComponent,
    Form2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rooter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
