import { Component, OnInit } from "@angular/core";
import { Game } from "~/app/game/game";


@Component({
    selector: "result",
    moduleId: module.id,
    templateUrl: "result.html",
})
export class Result implements OnInit {

    score = Game.finalScore;
    msg;

    ngOnInit() { 
        this.msg = (Game.finalLifes == 0) ? "You run out of lives!" : "Time's up!"
    }
}
