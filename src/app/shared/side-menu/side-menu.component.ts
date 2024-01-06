import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
// Interfaces
import { Menu } from '../../mock/interfaces/menu.interface';
// Services
import { DataService } from '../../mock/data.service';
// NgIconComponent
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent implements OnInit{

  // Output
  @Output() newOpenState = new EventEmitter<boolean>();

  // Variables
  menu_data: Menu[] = [];

  constructor(
    private dataService: DataService
  ) { }

  // Obteain the menu data on component init
  ngOnInit() {
    this.dataService.getMenuData().then((data) => {
      this.menu_data = data;
      console.log(this.menu_data);
    });
  }

  // Close Side Menu
  openSideMenu(open_side: boolean) {
    this.newOpenState.emit(open_side);
  }

}
