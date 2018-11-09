import { Component, OnInit } from "@angular/core";

@Component({
    selector: "juego",
    moduleId: module.id,
    templateUrl: "juego.html",
})
export class Juego implements OnInit {


    test = "out"
    estados = ["out","out","out","out","out","out","out","out","out"];
    // estados = Array(9).map(() => "out");

    ngOnInit() {

       // this.
      //estados[1] = "out";
    }


}
