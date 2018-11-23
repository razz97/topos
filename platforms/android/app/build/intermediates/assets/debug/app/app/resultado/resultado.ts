import { Component, OnInit } from "@angular/core";
import { Juego } from "~/app/juego/juego";


@Component({
    selector: "resultado",
    moduleId: module.id,
    templateUrl: "resultado.html",
})
export class Resultado implements OnInit {

    score = Juego.finalScore;
    msg;

    ngOnInit() { 
        this.msg = (Juego.finalLifes == 0) ? "You run out of lives!" : "Time's up!"
    }
}
