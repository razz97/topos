import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { Juego } from "./juego/juego";

const routes: Routes = [
    { path: "", redirectTo: "/juego", pathMatch: "full" },
    { path: "juego", component: Juego },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
