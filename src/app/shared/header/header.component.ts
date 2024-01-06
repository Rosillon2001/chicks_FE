import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// SideMenu
import { SideMenuComponent } from '../side-menu/side-menu.component';
// NgIconComponent
import { NgIconComponent } from '@ng-icons/core';
// Interfaces
import { Menu } from '../../mock/interfaces/menu.interface';
// Services
import { DataService } from '../../mock/data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SideMenuComponent, NgIconComponent, CommonModule],
  providers: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  // Variables
  menu_data: Menu[] = [];
  cart_count: number = Math.floor(Math.random() * 10) + 1;
  open_side: boolean = false;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    console.log('HeaderComponent');
    this.dataService.getMenuData().then((data) => {
      this.menu_data = data;
      console.log(this.menu_data);
    });
  }

  // Open Side Menu
  openSideMenu() {
    this.open_side = !this.open_side;
  }
}
