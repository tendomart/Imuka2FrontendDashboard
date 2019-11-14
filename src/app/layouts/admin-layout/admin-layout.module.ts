import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
<<<<<<< HEAD
=======
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent } from "../../pages/icons/icons.component";
mport { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';


import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';
>>>>>>> 2a54c543bf1ac7e66f2b8974ab5cd704c5c6bee3

import { AdddealComponent } from "../../pages/adddeal/adddeal.component";
import { AlldealsComponent } from "../../pages/alldeals/alldeals.component";
import { DealdetailsComponent } from "../../pages/dealdetails/dealdetails.component";
import { EditdealComponent } from "../../pages/editdeal/editdeal.component";
import { NgxPaginationModule } from "ngx-pagination";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgxPaginationModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
<<<<<<< HEAD
=======

    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,

    IconsComponent,
    MapsComponent,
    NotificationsComponent,
>>>>>>> 2a54c543bf1ac7e66f2b8974ab5cd704c5c6bee3
    AdddealComponent,
    AlldealsComponent,
    DealdetailsComponent,
    EditdealComponent
  ]
})
export class AdminLayoutModule {}
