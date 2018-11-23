"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var game_1 = require("~/app/game/game");
var Result = /** @class */ (function () {
    function Result() {
        this.score = game_1.Game.finalScore;
    }
    Result.prototype.ngOnInit = function () {
        this.msg = (game_1.Game.finalLifes == 0) ? "You run out of lives!" : "Time's up!";
    };
    Result = __decorate([
        core_1.Component({
            selector: "result",
            moduleId: module.id,
            templateUrl: "result.html",
        })
    ], Result);
    return Result;
}());
exports.Result = Result;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHdDQUF1QztBQVF2QztJQUxBO1FBT0ksVUFBSyxHQUFHLFdBQUksQ0FBQyxVQUFVLENBQUM7SUFNNUIsQ0FBQztJQUhHLHlCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsV0FBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQTtJQUM5RSxDQUFDO0lBUFEsTUFBTTtRQUxsQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxhQUFhO1NBQzdCLENBQUM7T0FDVyxNQUFNLENBUWxCO0lBQUQsYUFBQztDQUFBLEFBUkQsSUFRQztBQVJZLHdCQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJ+L2FwcC9nYW1lL2dhbWVcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJyZXN1bHRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcInJlc3VsdC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFJlc3VsdCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBzY29yZSA9IEdhbWUuZmluYWxTY29yZTtcbiAgICBtc2c7XG5cbiAgICBuZ09uSW5pdCgpIHsgXG4gICAgICAgIHRoaXMubXNnID0gKEdhbWUuZmluYWxMaWZlcyA9PSAwKSA/IFwiWW91IHJ1biBvdXQgb2YgbGl2ZXMhXCIgOiBcIlRpbWUncyB1cCFcIlxuICAgIH1cbn1cbiJdfQ==