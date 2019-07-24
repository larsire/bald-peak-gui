import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: "app-child-with-param",
  templateUrl: "./child-with-param.component.html",
  styleUrls: ["./child-with-param.component.sass"]
})
export class ChildWithParamComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }
  id: string;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
  }

}
