import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BodyComponent } from "./body/body.component";
import { LoginComponent } from "../signup/login/login.component";
import { RegisterComponent } from "../signup/register/register.component";

const routes: Routes = [
  { path: "homepage", component: BodyComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
