import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { Game } from "./game/game";
import { Welcome } from "~/app/welcome/welcome";
import { Result } from "~/app/result/result";

const routes: Routes = [
    { path: "", redirectTo: "/welcome", pathMatch: "full" },
    { path: "game", component: Game },
    { path: "welcome", component: Welcome },
    { path: "result", component: Result },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
