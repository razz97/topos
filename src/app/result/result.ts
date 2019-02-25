import { Component, OnInit } from "@angular/core";
import { Game } from "~/app/game/game";
import { Page } from "ui/page";


@Component({
    selector: "result",
    moduleId: module.id,
    templateUrl: "result.html",
})
export class Result implements OnInit {
    public constructor(page:Page) { page.actionBarHidden = true;}
    score = Game.finalScore;
    msg;

    ngOnInit() { 
        this.msg = (Game.finalLifes == 0) ? "You run out of lives!" : "Time's up!"
    }
}
