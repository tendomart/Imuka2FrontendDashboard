import { Component, OnInit } from "@angular/core";

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {
    path: "home/admindashboard/dashboard",
    title: "Dashboard",
    icon: "fa fa-home",
    class: ""
  },
  {
    path: "home/admindashboard/adddeal",
    title: "Add Deal",
    icon: "fa fa-plus",
    class: ""
  },
  {
    path: "home/admindashboard/alldeals",
    title: "All Deals",
    icon: "fa fa-braille",
    class: ""
  },
  {
    path: "home/admindashboard/dealdetails",
    title: "Deal detais",
    icon: "fa fa-info-circle",
    class: ""
  },
  {
    path: "home/admindashboard/editdeal",
    title: "Edit Deal",
    icon: "fa fa-edit",
    class: ""
  }
];

@Component({
  moduleId: module.id,
  selector: "sidebar-cmp",
  templateUrl: "sidebar.component.html"
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
