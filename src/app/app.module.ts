import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { BodyComponent } from './layout/body/body.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutComponent } from './layout/body/about/about.component';
import { WorkComponent } from './layout/body/work/work.component';
import { ContactComponent } from './layout/body/contact/contact.component';

const appRoutes: Routes = [
  { path:'', component: LayoutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AboutComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes, {}
    )
  ],
  exports: [RouterModule],
  providers: [ { provide: LocationStrategy, useClass: PathLocationStrategy } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
