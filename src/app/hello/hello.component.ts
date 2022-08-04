import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
  <h2>{{user.name}}</h2>
  <h3>{{user.age}}</h3>`,
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {
  user = {
    name: 'John',
    age: 30,
  }
}
