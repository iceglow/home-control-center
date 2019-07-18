import {Component, ComponentFactoryResolver, Injector, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {DashboardCard} from '../../../dashboard-card';

@Component({
  selector: 'app-dashboard-card-spawner',
  templateUrl: './dashboard-card-spawner.component.html',
  styleUrls: ['./dashboard-card-spawner.component.scss']
})
export class DashboardCardSpawnerComponent implements OnInit {
  @ViewChild('spawn', {read: ViewContainerRef}) container;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  @Input() set card(data: DashboardCard) {
    if (!data) {
      return;
    }
    const inputProviders = Object.keys(data.input).map((inputName) => {
      if (!data.input[inputName])
        return undefined;
      return {provide: data.input[inputName].key, useValue: data.input[inputName].value, deps: []};
    });
    const injector = Injector.create(inputProviders, this.container.parentInjector);
    const factory = this.resolver.resolveComponentFactory(data.component);
    const component = factory.create(injector);
    if (component.instance.hasOwnProperty("data")) {
      component.instance['data'] = data.data;
    }
    this.container.insert(component.hostView);
  }

  ngOnInit() {
  }

}
