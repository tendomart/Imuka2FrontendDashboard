import { Component, OnInit } from "@angular/core";

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "nc-bank", class: "" },
  {
    path: "/adddeal",
    title: "Add Deal",
    icon: "nc-tile-56",
    class: ""
  },
  { path: "/alldeals", title: "All Deals", icon: "nc-caps-small", class: "" },
  {
    path: "/dealdetails",
    title: "Deal detais",
    icon: "nc-caps-small",
    class: ""
  },
  { path: "/editdeal", title: "Edit Deal", icon: "nc-bell-55", class: "" }
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
