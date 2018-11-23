import { Component, OnInit } from "@angular/core";
import { setInterval, clearInterval } from "tns-core-modules/timer";
import { Router } from "@angular/router";


@Component({
    selector: "juego",
    moduleId: module.id,
    templateUrl: "juego.html",
})
export class Juego implements OnInit {
    // Get a router for navigating to results when the game finishes.
    public constructor(private router: Router) {}
    // Static variables can be accesed from other views.
    static finalLifes = 10;
    static finalScore = 0;
    // Constants for the mole's images.
    TOPO_FUERA = "out";
    TOPO_DENTRO = "in";
    // Variables for controlling the gameplay.
    topos = Array(9).fill(this.TOPO_DENTRO);
    timeRemaining = 10;
    timer;
    lifes = 10;
    score = 0;

    // When view is shown, bootstrap the game with an interval that
    // shows a random amount of moles every second, for a second.
    ngOnInit() {
        this.timer = setInterval(() => {
            if (--this.timeRemaining == 0) this.onGameFinished();
            for (var i = 0; i < this.topos.length; i++) {
                if (Math.random() > 0.8) {
                    this.topos[i] = this.TOPO_FUERA;
                    setTimeout((i) => this.topos[i] = this.TOPO_DENTRO, 1000, i);
                }
            }
        }, 1000);
    }

    // If a mole is tapped, increase score, otherwise decrease lives.
    tapTopo(pos) {
        if (this.topos[pos] == this.TOPO_FUERA) {
            this.score++;
            this.topos[pos] = this.TOPO_DENTRO;
        } else if (--this.lifes == 0) this.onGameFinished();
    }
    // Clear the interval and redirect to results when the game ends.
    onGameFinished() {
        clearInterval(this.timer);
        Juego.finalLifes = this.lifes;
        Juego.finalScore = this.score;
        this.router.navigate(["resultado"]);
    }
}
