import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BodyComponent } from "./body/body.component";
import { LoginComponent } from "../signup/login/login.component";
import { RegisterComponent } from "../signup/register/register.component";
import { SearchFilterComponent } from "./search-filter/search-filter.component";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  declarations: [
    BodyComponent,
    LoginComponent,
    RegisterComponent,
    SearchFilterComponent
  ],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
