import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { SpotService } from './spot.service';
import { SpotComponent } from './spot.component';
import { AdminComponent} from './admin.component';


@Component({
  selector: 'panamout',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    SpotService
  ]  
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