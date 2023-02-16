import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./layouts/auth/auth.component";
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";
import { ContactComponent } from "./views/contact/contact.component";
import { AboutComponent } from "./views/about/about.component";
import { AluminiComponent } from "./views/alumini/alumini.component";
import { CampsComponent } from "./views/camps/camps.component";

const routes: Routes = [
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  { path: "profile", component: ProfileComponent },
  { path: "landing", component: LandingComponent },
  { path: "contact", component:  ContactComponent },
  { path: "about", component:  AboutComponent },
  { path: "alumini", component:  AluminiComponent },
  { path: "camps", component:  CampsComponent },
  { path: "", component: LandingComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
