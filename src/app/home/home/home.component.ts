import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// Data Service
import { DataService } from '../../mock/data.service';
// Interfaces
import { Item } from '../../mock/interfaces/item.interface';
// NgIconComponent
import { NgIconComponent } from '@ng-icons/core';
// Item Component
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgIconComponent, ItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  // Items
  items: Item[] = [];
  items_mock: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    console.log('HomeComponent');
    this.dataService.getItemData().then((data: Item[]) => {
      console.log(data);
      this.items = data;
    });
  }
}
