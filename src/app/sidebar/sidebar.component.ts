import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/home', title: 'Pulpit',  icon: 'pe-7s-display2', class: '' },
    { path: '/delegation', title: 'Delegacja',  icon:'pe-7s-note2', class: '' },
    { path: '/rides', title: 'Przejazdy',  icon:'pe-7s-helm', class: '' },
    { path: '/cars', title: 'Samochody',  icon:'pe-7s-car', class: '' },
    { path: '/contracts', title: 'Umowy',  icon:'pe-7s-note2', class: '' },
    { path: '/customers', title: 'Placówki',  icon:'pe-7s-id', class: '' },
    { path: '/visits', title: 'Wizyty',  icon:'pe-7s-display1', class: '' },
    { path: '/raports', title: 'Raporty',  icon:'pe-7s-file', class: '' },
    { path: '/user', title: 'Mój profil',  icon:'pe-7s-user', class: '' },
    { path: '/notifications', title: 'Powiadomienia',  icon:'pe-7s-bell', class: '' },
    { path: '/upgrade', title: 'Druki',  icon:'pe-7s-rocket', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
