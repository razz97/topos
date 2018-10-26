import { Component, OnInit } from "@angular/core";

@Component({
    selector: "juego",
    moduleId: module.id,
    templateUrl: "./juego.html",
})
export class AppComponent implements OnInit { 

    estados = Array(6).map(() => "out");

    ngOnInit() {
        
    }


}