import { Component, OnInit } from "@angular/core";
import { DealrestApiService } from "../../../sharedservice/dealrest-api.service";
@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.scss"]
})
export class BodyComponent implements OnInit {
  Deal: any = [];

  constructor(public restApi: DealrestApiService) {}

  ngOnInit() {
    this.loadDeals();
  }

  // Get deals list
  loadDeals() {
    return this.restApi.getDeals().subscribe((data: {}) => {
      this.Deal = data;
    });
  }

  // Delete deal
  deleteDeals(id) {
    if (window.confirm("Are you sure, you want to delete?")) {
      this.restApi.deleteDeal(id).subscribe(data => {
        this.loadDeals();
      });
    }
  }
}
