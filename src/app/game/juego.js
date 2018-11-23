"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var timer_1 = require("tns-core-modules/timer");
var router_1 = require("@angular/router");
var Juego = /** @class */ (function () {
    // Get a router for navigating to results when the game finishes.
    function Juego(router) {
        this.router = router;
        // Constants for the mole's images.
        this.TOPO_FUERA = "out";
        this.TOPO_DENTRO = "in";
        // Variables for controlling the gameplay.
        this.topos = Array(9).fill(this.TOPO_DENTRO);
        this.timeRemaining = 10;
        this.lifes = 10;
        this.score = 0;
    }
    Juego_1 = Juego;
    // When view is shown, bootstrap the game with an interval that
    // shows a random amount of moles every second, for a second.
    Juego.prototype.ngOnInit = function () {
        var _this = this;
        this.timer = timer_1.setInterval(function () {
            if (--_this.timeRemaining == 0)
                _this.onGameFinished();
            for (var i = 0; i < _this.topos.length; i++) {
                if (Math.random() > 0.8) {
                    _this.topos[i] = _this.TOPO_FUERA;
                    setTimeout(function (i) { return _this.topos[i] = _this.TOPO_DENTRO; }, 1000, i);
                }
            }
        }, 1000);
    };
    // If a mole is tapped, increase score, otherwise decrease lives.
    Juego.prototype.tapTopo = function (pos) {
        if (this.topos[pos] == this.TOPO_FUERA) {
            this.score++;
            this.topos[pos] = this.TOPO_DENTRO;
        }
        else if (--this.lifes == 0)
            this.onGameFinished();
    };
    // Clear the interval and redirect to results when the game ends.
    Juego.prototype.onGameFinished = function () {
        timer_1.clearInterval(this.timer);
        Juego_1.finalLifes = this.lifes;
        Juego_1.finalScore = this.score;
        this.router.navigate(["resultado"]);
    };
    // Static variables can be accesed from other views.
    Juego.finalLifes = 10;
    Juego.finalScore = 0;
    Juego = Juego_1 = __decorate([
        core_1.Component({
            selector: "juego",
            moduleId: module.id,
            templateUrl: "juego.html",
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], Juego);
    return Juego;
    var Juego_1;
}());
exports.Juego = Juego;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVlZ28uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJqdWVnby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnREFBb0U7QUFDcEUsMENBQXlDO0FBUXpDO0lBQ0ksaUVBQWlFO0lBQ2pFLGVBQTJCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSXpDLG1DQUFtQztRQUNuQyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLDBDQUEwQztRQUMxQyxVQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEMsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFFbkIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFVBQUssR0FBRyxDQUFDLENBQUM7SUFaa0MsQ0FBQztjQUZwQyxLQUFLO0lBZ0JkLCtEQUErRDtJQUMvRCw2REFBNkQ7SUFDN0Qsd0JBQVEsR0FBUjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBVyxDQUFDO1lBQ3JCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUM7Z0JBQUMsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3JELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDekMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3RCLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQztvQkFDaEMsVUFBVSxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsV0FBVyxFQUFoQyxDQUFnQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDakUsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsaUVBQWlFO0lBQ2pFLHVCQUFPLEdBQVAsVUFBUSxHQUFHO1FBQ1AsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDdkMsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hELENBQUM7SUFDRCxpRUFBaUU7SUFDakUsOEJBQWMsR0FBZDtRQUNJLHFCQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLE9BQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM5QixPQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUF4Q0Qsb0RBQW9EO0lBQzdDLGdCQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO0lBTGIsS0FBSztRQUxqQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxZQUFZO1NBQzVCLENBQUM7eUNBR3FDLGVBQU07T0FGaEMsS0FBSyxDQTRDakI7SUFBRCxZQUFDOztDQUFBLEFBNUNELElBNENDO0FBNUNZLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgc2V0SW50ZXJ2YWwsIGNsZWFySW50ZXJ2YWwgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy90aW1lclwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImp1ZWdvXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCJqdWVnby5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEp1ZWdvIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvLyBHZXQgYSByb3V0ZXIgZm9yIG5hdmlnYXRpbmcgdG8gcmVzdWx0cyB3aGVuIHRoZSBnYW1lIGZpbmlzaGVzLlxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuICAgIC8vIFN0YXRpYyB2YXJpYWJsZXMgY2FuIGJlIGFjY2VzZWQgZnJvbSBvdGhlciB2aWV3cy5cbiAgICBzdGF0aWMgZmluYWxMaWZlcyA9IDEwO1xuICAgIHN0YXRpYyBmaW5hbFNjb3JlID0gMDtcbiAgICAvLyBDb25zdGFudHMgZm9yIHRoZSBtb2xlJ3MgaW1hZ2VzLlxuICAgIFRPUE9fRlVFUkEgPSBcIm91dFwiO1xuICAgIFRPUE9fREVOVFJPID0gXCJpblwiO1xuICAgIC8vIFZhcmlhYmxlcyBmb3IgY29udHJvbGxpbmcgdGhlIGdhbWVwbGF5LlxuICAgIHRvcG9zID0gQXJyYXkoOSkuZmlsbCh0aGlzLlRPUE9fREVOVFJPKTtcbiAgICB0aW1lUmVtYWluaW5nID0gMTA7XG4gICAgdGltZXI7XG4gICAgbGlmZXMgPSAxMDtcbiAgICBzY29yZSA9IDA7XG5cbiAgICAvLyBXaGVuIHZpZXcgaXMgc2hvd24sIGJvb3RzdHJhcCB0aGUgZ2FtZSB3aXRoIGFuIGludGVydmFsIHRoYXRcbiAgICAvLyBzaG93cyBhIHJhbmRvbSBhbW91bnQgb2YgbW9sZXMgZXZlcnkgc2Vjb25kLCBmb3IgYSBzZWNvbmQuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoLS10aGlzLnRpbWVSZW1haW5pbmcgPT0gMCkgdGhpcy5vbkdhbWVGaW5pc2hlZCgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRvcG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3Bvc1tpXSA9IHRoaXMuVE9QT19GVUVSQTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoaSkgPT4gdGhpcy50b3Bvc1tpXSA9IHRoaXMuVE9QT19ERU5UUk8sIDEwMDAsIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgLy8gSWYgYSBtb2xlIGlzIHRhcHBlZCwgaW5jcmVhc2Ugc2NvcmUsIG90aGVyd2lzZSBkZWNyZWFzZSBsaXZlcy5cbiAgICB0YXBUb3BvKHBvcykge1xuICAgICAgICBpZiAodGhpcy50b3Bvc1twb3NdID09IHRoaXMuVE9QT19GVUVSQSkge1xuICAgICAgICAgICAgdGhpcy5zY29yZSsrO1xuICAgICAgICAgICAgdGhpcy50b3Bvc1twb3NdID0gdGhpcy5UT1BPX0RFTlRSTztcbiAgICAgICAgfSBlbHNlIGlmICgtLXRoaXMubGlmZXMgPT0gMCkgdGhpcy5vbkdhbWVGaW5pc2hlZCgpO1xuICAgIH1cbiAgICAvLyBDbGVhciB0aGUgaW50ZXJ2YWwgYW5kIHJlZGlyZWN0IHRvIHJlc3VsdHMgd2hlbiB0aGUgZ2FtZSBlbmRzLlxuICAgIG9uR2FtZUZpbmlzaGVkKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICBKdWVnby5maW5hbExpZmVzID0gdGhpcy5saWZlcztcbiAgICAgICAgSnVlZ28uZmluYWxTY29yZSA9IHRoaXMuc2NvcmU7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInJlc3VsdGFkb1wiXSk7XG4gICAgfVxufVxuIl19