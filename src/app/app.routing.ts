import { Routes } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { HomeComponent } from "./layouts/home/home.component";

import { LoginComponent } from "./layouts/signup/login/login.component";
import { RegisterComponent } from "./layouts/signup/register/register.component";
export const AppRoutes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  { path: "home", component: HomeComponent },
  { path: "home/login", component: LoginComponent },
  { path: "home/signup", component: RegisterComponent },
  {
    path: "home/admindashboard",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
      }
    ]
  },
  {
    path: "**",
    redirectTo: "home"
  }
];
