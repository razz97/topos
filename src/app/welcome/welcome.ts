import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";

@Component({
    selector: "welcome",
    moduleId: module.id,
    templateUrl: "welcome.html",
    styleUrls: ["welcome.css"]
})
export class Welcome implements OnInit {
    public constructor(page:Page) { page.actionBarHidden = true;}

    title = "WHACK \nA MOLE!"
    ngOnInit() { }

}
