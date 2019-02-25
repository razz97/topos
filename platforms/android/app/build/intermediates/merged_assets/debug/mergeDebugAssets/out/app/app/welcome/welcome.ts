import { Component, OnInit } from "@angular/core";


@Component({
    selector: "welcome",
    moduleId: module.id,
    templateUrl: "welcome.html",
    styleUrls: ["welcome.css"]
})
export class Welcome implements OnInit {

    title = "WHACK \nA MOLE!"
    ngOnInit() { }

}
