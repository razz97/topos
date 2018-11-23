import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { Juego } from "./juego/juego";
import { Bienvenida } from "~/app/bienvenida/bienvenida";
import { Resultado } from "~/app/resultado/resultado";

const routes: Routes = [
    { path: "", redirectTo: "/bienvenida", pathMatch: "full" },
    { path: "juego", component: Juego },
    { path: "bienvenida", component: Bienvenida },
    { path: "resultado", component: Resultado },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
