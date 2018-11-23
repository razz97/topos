"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var game_1 = require("~/app/game/game");
var page_1 = require("ui/page");
var Result = /** @class */ (function () {
    function Result(page) {
        this.score = game_1.Game.finalScore;
        page.actionBarHidden = true;
    }
    Result.prototype.ngOnInit = function () {
        this.msg = (game_1.Game.finalLifes == 0) ? "You run out of lives!" : "Time's up!";
    };
    Result = __decorate([
        core_1.Component({
            selector: "result",
            moduleId: module.id,
            templateUrl: "result.html",
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], Result);
    return Result;
}());
exports.Result = Result;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHdDQUF1QztBQUN2QyxnQ0FBK0I7QUFRL0I7SUFDSSxnQkFBbUIsSUFBUztRQUM1QixVQUFLLEdBQUcsV0FBSSxDQUFDLFVBQVUsQ0FBQztRQURRLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQUEsQ0FBQztJQUk3RCx5QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLFdBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUE7SUFDOUUsQ0FBQztJQVBRLE1BQU07UUFMbEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsYUFBYTtTQUM3QixDQUFDO3lDQUUwQixXQUFJO09BRG5CLE1BQU0sQ0FRbEI7SUFBRCxhQUFDO0NBQUEsQUFSRCxJQVFDO0FBUlksd0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIn4vYXBwL2dhbWUvZ2FtZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwicmVzdWx0XCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCJyZXN1bHQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN1bHQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwYWdlOlBhZ2UpIHsgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO31cbiAgICBzY29yZSA9IEdhbWUuZmluYWxTY29yZTtcbiAgICBtc2c7XG5cbiAgICBuZ09uSW5pdCgpIHsgXG4gICAgICAgIHRoaXMubXNnID0gKEdhbWUuZmluYWxMaWZlcyA9PSAwKSA/IFwiWW91IHJ1biBvdXQgb2YgbGl2ZXMhXCIgOiBcIlRpbWUncyB1cCFcIlxuICAgIH1cbn1cbiJdfQ==