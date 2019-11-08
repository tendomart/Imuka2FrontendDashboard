import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
// import { UserComponent } from '../../pages/user/user.component';
// import { TableComponent } from '../../pages/table/table.component';
// import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from "../../pages/icons/icons.component";
// import { MapsComponent } from '../../pages/maps/maps.component';
// import { NotificationsComponent } from '../../pages/notifications/notifications.component';
// import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { AdddealComponent } from "../../pages/adddeal/adddeal.component";
import { AlldealsComponent } from "../../pages/alldeals/alldeals.component";
import { DealdetailsComponent } from "../../pages/dealdetails/dealdetails.component";
import { EditdealComponent } from "../../pages/editdeal/editdeal.component";
//Add investor Route
import { PagesInvestorComponent } from '../../pages/pages-investor/pages-investor.component';
///home/tendo/Imuka2FrontendDashboard/src/app/pages-investor
export const AdminLayoutRoutes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  { path: "dashboard", component: DashboardComponent },
  { path: "adddeal", component: AdddealComponent },
  { path: "alldeals", component: AlldealsComponent },
  { path: "dealdetails", component: DealdetailsComponent },
  { path: "editdeal", component: EditdealComponent },
  { path: "pages-investor", component: PagesInvestorComponent }
];
