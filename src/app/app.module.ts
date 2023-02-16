import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthComponent } from "./layouts/auth/auth.component";
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";
import { AuthNavbarComponent } from "./components/navbars/auth-navbar/auth-navbar.component";
import { FooterComponent } from "./components/footers/footer/footer.component";
import { FooterSmallComponent } from "./components/footers/footer-small/footer-small.component";
import { MapExampleComponent } from "./components/maps/map-example/map-example.component";
import { ContactComponent } from './views/contact/contact.component';
import { AboutComponent } from './views/about/about.component';
import { AluminiComponent } from './views/alumini/alumini.component';
import { CampsComponent } from './views/camps/camps.component';
import { HeaderNewComponent } from './views/header-new/header-new.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FooterSmallComponent,
    MapExampleComponent,
    AuthNavbarComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    ProfileComponent,
    ContactComponent,
    AboutComponent,
    AluminiComponent,
    CampsComponent,
    HeaderNewComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
