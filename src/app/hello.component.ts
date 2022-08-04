import { Component, OnInit } from "@angular/core";
@Component({
    selector: "app-root",
    template: "./hello.component.html",
})
export class helloComponent {
    user = {
        name: "John",
        age: 30,
        class: "1A",
    };
}