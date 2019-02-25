import { Component, OnInit } from "@angular/core";
import { setInterval, clearInterval } from "tns-core-modules/timer";
import { Router } from "@angular/router";


@Component({
    selector: "game",
    moduleId: module.id,
    templateUrl: "game.html",
    styleUrls: ["game.css"]
})
export class Game implements OnInit {
    // Get a router for navigating to results when the game finishes.
    public constructor(private router: Router) {}
    // Static variables can be accesed from other views.
    static finalLifes = 10;
    static finalScore = 0;
    // Constants for the mole's images.
    MOLE_OUT = "out";
    MOLE_IN = "in";
    // Variables for controlling the gameplay.
    moles = Array(9).fill(this.MOLE_IN);
    timeRemaining = 10;
    timer;
    lifes = 10;
    score = 0;

    // When view is shown, bootstrap the game with an interval that
    // shows a random amount of moles every second, for a second.
    ngOnInit() {
        this.timer = setInterval(() => {
            if (--this.timeRemaining == 0) this.onGameFinished();
            for (var i = 0; i < this.moles.length; i++) {
                if (Math.random() > 0.8) {
                    this.moles[i] = this.MOLE_OUT;
                    setTimeout((i) => this.moles[i] = this.MOLE_IN, 1000, i);
                }
            }
        }, 1000);
    }

    // If a mole is tapped, increase score, otherwise decrease lives.
    tapMole(pos) {
        if (this.moles[pos] == this.MOLE_OUT) {
            this.score++;
            this.moles[pos] = this.MOLE_IN;
        } else if (--this.lifes == 0) this.onGameFinished();
    }
    // Clear the interval and redirect to results when the game ends.
    onGameFinished() {
        clearInterval(this.timer);
        Game.finalLifes = this.lifes;
        Game.finalScore = this.score;
        this.router.navigate(["result"]);
    }
}
