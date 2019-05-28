import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Pulpit',  icon: 'pe-7s-display2', class: '' },
    { path: '/user', title: 'Mój profil',  icon:'pe-7s-user', class: '' },
    { path: '/table', title: 'Delegacja',  icon:'pe-7s-note2', class: '' },
    { path: '/typography', title: 'Rozliczenie',  icon:'pe-7s-cash', class: '' },
    { path: '/icons', title: 'Samochody',  icon:'pe-7s-science', class: '' },
    { path: '/maps', title: 'Przejazdy',  icon:'pe-7s-car', class: '' },
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
