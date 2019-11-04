import { Routes } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { HomeComponent } from "./layouts/home/home.component";
// import { BodyComponent } from "./layouts/home/body/body.component";
// import { LoginComponent } from "./layouts/signup/login/login.component";
// import { RegisterComponent } from "./layouts/signup/register/register.component";
export const AppRoutes: Routes = [
  {
    path: "",
    redirectTo: "homepage",
    pathMatch: "full"
  },
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "",
        loadChildren: "./layouts/home/home.module#HomeModule"
      }
    ]
  },
  // { path: "login", component: LoginComponent },
  // { path: "signup", component: RegisterComponent },
  {
    path: "",
    component: AdminLayoutComponent,

    loadChildren: "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
  },
  {
    path: "**",
    redirectTo: "homepage"
  }
];
