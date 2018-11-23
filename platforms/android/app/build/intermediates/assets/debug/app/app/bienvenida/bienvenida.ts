import { Component, OnInit } from "@angular/core";


@Component({
    selector: "bienvenida",
    moduleId: module.id,
    templateUrl: "bienvenida.html",
    styleUrls: ["bienvenida.css"]
})
export class Bienvenida implements OnInit {

    title = "WHACK \nA MOLE!"
    ngOnInit() { }

}
