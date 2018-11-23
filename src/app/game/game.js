"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var timer_1 = require("tns-core-modules/timer");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var Game = /** @class */ (function () {
    // Get a router for navigating to results when the game finishes.
    // Also hides the action bar
    function Game(router, page) {
        this.router = router;
        // Constants for the mole's images.
        this.MOLE_OUT = "out";
        this.MOLE_IN = "in";
        // Variables for controlling the gameplay.
        this.moles = Array(9).fill(this.MOLE_IN);
        this.timeRemaining = 30;
        this.lifes = 10;
        this.score = 0;
        page.actionBarHidden = true;
    }
    Game_1 = Game;
    // When view is shown, bootstrap the game with an interval that
    // shows a random amount of moles every second, for a second.
    Game.prototype.ngOnInit = function () {
        var _this = this;
        this.timer = timer_1.setInterval(function () {
            if (--_this.timeRemaining == 0)
                _this.onGameFinished();
            for (var i = 0; i < _this.moles.length; i++) {
                if (Math.random() > 0.8) {
                    _this.moles[i] = _this.MOLE_OUT;
                    setTimeout(function (i) { return _this.moles[i] = _this.MOLE_IN; }, 1000, i);
                }
            }
        }, 1000);
    };
    // If a mole is tapped, increase score, otherwise decrease lives.
    Game.prototype.tapMole = function (pos) {
        if (this.moles[pos] == this.MOLE_OUT) {
            this.score++;
            this.moles[pos] = this.MOLE_IN;
        }
        else if (--this.lifes == 0)
            this.onGameFinished();
    };
    // Clear the interval, set final values and redirect to results when the game ends.
    Game.prototype.onGameFinished = function () {
        timer_1.clearInterval(this.timer);
        Game_1.finalLifes = this.lifes;
        Game_1.finalScore = this.score;
        this.router.navigate(["result"]);
    };
    Game = Game_1 = __decorate([
        core_1.Component({
            selector: "game",
            moduleId: module.id,
            templateUrl: "game.html",
            styleUrls: ["game.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, page_1.Page])
    ], Game);
    return Game;
    var Game_1;
}());
exports.Game = Game;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsZ0RBQW9FO0FBQ3BFLDBDQUF5QztBQUN6QyxnQ0FBK0I7QUFTL0I7SUFFSSxpRUFBaUU7SUFDakUsNEJBQTRCO0lBQzVCLGNBQTJCLE1BQWMsRUFBRSxJQUFTO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFJekMsbUNBQW1DO1FBQ25DLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLDBDQUEwQztRQUMxQyxVQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFFbkIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFVBQUssR0FBRyxDQUFDLENBQUM7UUFaOEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFBQSxDQUFDO2FBSjVFLElBQUk7SUFrQmIsK0RBQStEO0lBQy9ELDZEQUE2RDtJQUM3RCx1QkFBUSxHQUFSO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFXLENBQUM7WUFDckIsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQztnQkFBQyxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDckQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUN6QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDdEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDO29CQUM5QixVQUFVLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQTVCLENBQTRCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCxpRUFBaUU7SUFDakUsc0JBQU8sR0FBUCxVQUFRLEdBQUc7UUFDUCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNuQyxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEQsQ0FBQztJQUNELG1GQUFtRjtJQUNuRiw2QkFBYyxHQUFkO1FBQ0kscUJBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsTUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLE1BQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQTdDUSxJQUFJO1FBTmhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLFdBQVc7WUFDeEIsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO1NBQzFCLENBQUM7eUNBS3FDLGVBQU0sRUFBTyxXQUFJO09BSjNDLElBQUksQ0E4Q2hCO0lBQUQsV0FBQzs7Q0FBQSxBQTlDRCxJQThDQztBQTlDWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHNldEludGVydmFsLCBjbGVhckludGVydmFsIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdGltZXJcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImdhbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcImdhbWUuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiZ2FtZS5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgR2FtZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICAvLyBHZXQgYSByb3V0ZXIgZm9yIG5hdmlnYXRpbmcgdG8gcmVzdWx0cyB3aGVuIHRoZSBnYW1lIGZpbmlzaGVzLlxuICAgIC8vIEFsc28gaGlkZXMgdGhlIGFjdGlvbiBiYXJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcGFnZTpQYWdlKSB7IHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTt9XG4gICAgLy8gU3RhdGljIHZhcmlhYmxlcyBjYW4gYmUgYWNjZXNlZCBmcm9tIG90aGVyIHZpZXdzLlxuICAgIHN0YXRpYyBmaW5hbExpZmVzO1xuICAgIHN0YXRpYyBmaW5hbFNjb3JlO1xuICAgIC8vIENvbnN0YW50cyBmb3IgdGhlIG1vbGUncyBpbWFnZXMuXG4gICAgTU9MRV9PVVQgPSBcIm91dFwiO1xuICAgIE1PTEVfSU4gPSBcImluXCI7XG4gICAgLy8gVmFyaWFibGVzIGZvciBjb250cm9sbGluZyB0aGUgZ2FtZXBsYXkuXG4gICAgbW9sZXMgPSBBcnJheSg5KS5maWxsKHRoaXMuTU9MRV9JTik7XG4gICAgdGltZVJlbWFpbmluZyA9IDMwO1xuICAgIHRpbWVyO1xuICAgIGxpZmVzID0gMTA7XG4gICAgc2NvcmUgPSAwO1xuXG4gICAgLy8gV2hlbiB2aWV3IGlzIHNob3duLCBib290c3RyYXAgdGhlIGdhbWUgd2l0aCBhbiBpbnRlcnZhbCB0aGF0XG4gICAgLy8gc2hvd3MgYSByYW5kb20gYW1vdW50IG9mIG1vbGVzIGV2ZXJ5IHNlY29uZCwgZm9yIGEgc2Vjb25kLlxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKC0tdGhpcy50aW1lUmVtYWluaW5nID09IDApIHRoaXMub25HYW1lRmluaXNoZWQoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tb2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC44KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9sZXNbaV0gPSB0aGlzLk1PTEVfT1VUO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KChpKSA9PiB0aGlzLm1vbGVzW2ldID0gdGhpcy5NT0xFX0lOLCAxMDAwLCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIC8vIElmIGEgbW9sZSBpcyB0YXBwZWQsIGluY3JlYXNlIHNjb3JlLCBvdGhlcndpc2UgZGVjcmVhc2UgbGl2ZXMuXG4gICAgdGFwTW9sZShwb3MpIHtcbiAgICAgICAgaWYgKHRoaXMubW9sZXNbcG9zXSA9PSB0aGlzLk1PTEVfT1VUKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3JlKys7XG4gICAgICAgICAgICB0aGlzLm1vbGVzW3Bvc10gPSB0aGlzLk1PTEVfSU47XG4gICAgICAgIH0gZWxzZSBpZiAoLS10aGlzLmxpZmVzID09IDApIHRoaXMub25HYW1lRmluaXNoZWQoKTtcbiAgICB9XG4gICAgLy8gQ2xlYXIgdGhlIGludGVydmFsLCBzZXQgZmluYWwgdmFsdWVzIGFuZCByZWRpcmVjdCB0byByZXN1bHRzIHdoZW4gdGhlIGdhbWUgZW5kcy5cbiAgICBvbkdhbWVGaW5pc2hlZCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgICAgR2FtZS5maW5hbExpZmVzID0gdGhpcy5saWZlcztcbiAgICAgICAgR2FtZS5maW5hbFNjb3JlID0gdGhpcy5zY29yZTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicmVzdWx0XCJdKTtcbiAgICB9XG59XG4iXX0=