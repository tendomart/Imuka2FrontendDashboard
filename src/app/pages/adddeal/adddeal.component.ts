import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { DealrestApiService } from "../../sharedservice/dealrest-api.service";

@Component({
  selector: "app-adddeal",
  templateUrl: "./adddeal.component.html",
  styleUrls: ["./adddeal.component.css"]
})
export class AdddealComponent implements OnInit {
  constructor(public restApi: DealrestApiService, public router: Router) {}

  ngOnInit() {}

  addDeal(dataDeal) {
    this.restApi.createDeal(this.dealDetails).subscribe((data: {}) => {
      this.router.navigate(["/alldeals"]);
    });
  }

  //image upload
  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  public message: string;

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
    console.log("hello" + this.fileData.name);
    console.log("hello" + this.fileData.size);
    console.log("hello" + this.fileData.type);
  }

  preview() {
    // Show preview
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = _event => {
      this.previewUrl = reader.result;
    };
  }

  formdata() {
    const formData = new FormData();
    formData.append("file", this.fileData);
    console.log("here:" + formData);
    // this.http.post("url/to/your/api", formData).subscribe(res => {
    //   console.log(res);
    //   this.uploadedFilePath = res.data.filePath;
    //   alert("SUCCESS !!");
    // });
    return formData;
  }
  @Input() dealDetails = {
    companyName: "",
    companyType: "",
    companyIndustry: "",
    companyAddress: "",
    companyTel: "",
    raisedAmount: "",
    createdDate: "",
    BriefDealDesc: "",
    DealDetailedDesc: "",
    image: "assets/soya.jpg"
  };
}
