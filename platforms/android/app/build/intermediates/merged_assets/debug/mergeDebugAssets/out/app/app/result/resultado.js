"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var juego_1 = require("~/app/juego/juego");
var Resultado = /** @class */ (function () {
    function Resultado() {
        this.score = juego_1.Juego.finalScore;
    }
    Resultado.prototype.ngOnInit = function () {
        this.msg = (juego_1.Juego.finalLifes == 0) ? "You run out of lives!" : "Time's up!";
    };
    Resultado = __decorate([
        core_1.Component({
            selector: "resultado",
            moduleId: module.id,
            templateUrl: "resultado.html",
        })
    ], Resultado);
    return Resultado;
}());
exports.Resultado = Resultado;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0YWRvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzdWx0YWRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDJDQUEwQztBQVExQztJQUxBO1FBT0ksVUFBSyxHQUFHLGFBQUssQ0FBQyxVQUFVLENBQUM7SUFNN0IsQ0FBQztJQUhHLDRCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsYUFBSyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQTtJQUMvRSxDQUFDO0lBUFEsU0FBUztRQUxyQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxnQkFBZ0I7U0FDaEMsQ0FBQztPQUNXLFNBQVMsQ0FRckI7SUFBRCxnQkFBQztDQUFBLEFBUkQsSUFRQztBQVJZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSnVlZ28gfSBmcm9tIFwifi9hcHAvanVlZ28vanVlZ29cIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJyZXN1bHRhZG9cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcInJlc3VsdGFkby5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFJlc3VsdGFkbyBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBzY29yZSA9IEp1ZWdvLmZpbmFsU2NvcmU7XG4gICAgbXNnO1xuXG4gICAgbmdPbkluaXQoKSB7IFxuICAgICAgICB0aGlzLm1zZyA9IChKdWVnby5maW5hbExpZmVzID09IDApID8gXCJZb3UgcnVuIG91dCBvZiBsaXZlcyFcIiA6IFwiVGltZSdzIHVwIVwiXG4gICAgfVxufVxuIl19