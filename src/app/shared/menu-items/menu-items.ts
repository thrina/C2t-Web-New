import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    routerLink: 'dashboard',
    name: 'Dashboard'
  },
  {
    routerLink: 'news',
    name: 'News'
  },
  {
    routerLink: 'events',
    name: 'Events'
  },
  {
    routerLink: 'profiles',
    name: 'Profiles'
  },
  {
    routerLink: 'categories',
    name: 'Categories'
  }
];

@Injectable()
export class MenuItems {
  getAll() {
    return MENUITEMS;
  }


}
