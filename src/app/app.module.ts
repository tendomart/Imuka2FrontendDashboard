import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule } from "@angular/common/http";
// Forms module
import { FormsModule } from "@angular/forms";
import { DataTableModule } from "angular-6-datatable";
//Search Sort Pagination in Angular 6 Modules

import { SidebarModule } from "./sidebar/sidebar.module";
import { FooterModule } from "./shared/footer/footer.module";
import { NavbarModule } from "./shared/navbar/navbar.module";
import { FixedPluginModule } from "./shared/fixedplugin/fixedplugin.module";

import { AppComponent } from "./app.component";
import { AppRoutes } from "./app.routing";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
//import { RegisterComponent } from "./layouts/login/register/register.component";
//import { BodyComponent } from "./layouts/home/body/body.component";
import { HeaderComponent } from "./layouts/home/header/header.component";
import { FooterComponent } from "./layouts/home/footer/footer.component";

import { HomeComponent } from "./layouts/home/home.component";
// import { LoginComponent } from "./layouts/signup/login/login.component";
// import { RegisterComponent } from "./layouts/signup/register/register.component";
import { DevTblService } from "./sharedservice/table.service";
import { NgxPaginationModule } from "ngx-pagination";

// Importing social login module and facebook login provider.
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
 // Client id for the facebook oauth. This is used for validation of our application to facebook.
// https://developers.facebook.com/
const facebook_oauth_client_id: string = '489836511607486';
// let config = new AuthServiceConfig([
//   {
//     id: FacebookLoginProvider.PROVIDER_ID,
//     provider: new FacebookLoginProvider(facebook_oauth_client_id)
//   }
// ]);
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,

    // RegisterComponent,
    //BodyComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent

    //LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    DataTableModule,
    NgxPaginationModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
  ],
  providers: [DevTblService],
  bootstrap: [AppComponent]
})
export class AppModule {}
