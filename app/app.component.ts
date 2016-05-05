import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { SpotService } from './spot.service';
import { SpotComponent } from './spot.component';
import { AdminComponent} from './admin.component';


@Component({
  selector: 'panamout',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Spots']">Find a Spot!</a>
      <a [routerLink]="['Admin']">Add a spot!</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    SpotService
  ],
  styleUrls: ['app/app.component.css']
})

@RouteConfig([
  {
    path: '/spots',
    name: 'Spots',
    component: SpotComponent,
    useAsDefault: true
  }, 
  {
    path: '/admin',
    name: 'Admin',
    component: AdminComponent
  }
])
export class AppComponent {
  title = 'Panamout';
}