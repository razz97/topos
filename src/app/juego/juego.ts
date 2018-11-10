import { Component, OnInit } from "@angular/core";

@Component({
    selector: "juego",
    moduleId: module.id,
    templateUrl: "juego.html",
})
export class Juego implements OnInit {

    estados = Array(9).fill("out")

    ngOnInit() {
        
    }


}
