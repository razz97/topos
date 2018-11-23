"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var Welcome = /** @class */ (function () {
    function Welcome(page) {
        this.title = "WHACK \nA MOLE!";
        page.actionBarHidden = true;
    }
    Welcome.prototype.ngOnInit = function () { };
    Welcome = __decorate([
        core_1.Component({
            selector: "welcome",
            moduleId: module.id,
            templateUrl: "welcome.html",
            styleUrls: ["welcome.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], Welcome);
    return Welcome;
}());
exports.Welcome = Welcome;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlbGNvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsZ0NBQStCO0FBUS9CO0lBQ0ksaUJBQW1CLElBQVM7UUFFNUIsVUFBSyxHQUFHLGlCQUFpQixDQUFBO1FBRk8sSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFBQSxDQUFDO0lBRzdELDBCQUFRLEdBQVIsY0FBYSxDQUFDO0lBSkwsT0FBTztRQU5uQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxjQUFjO1lBQzNCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztTQUM3QixDQUFDO3lDQUUwQixXQUFJO09BRG5CLE9BQU8sQ0FNbkI7SUFBRCxjQUFDO0NBQUEsQUFORCxJQU1DO0FBTlksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwid2VsY29tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwid2VsY29tZS5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJ3ZWxjb21lLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBXZWxjb21lIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocGFnZTpQYWdlKSB7IHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTt9XG5cbiAgICB0aXRsZSA9IFwiV0hBQ0sgXFxuQSBNT0xFIVwiXG4gICAgbmdPbkluaXQoKSB7IH1cblxufVxuIl19