import { Component, OnInit, Input } from '@angular/core';
// Common Module
import { CommonModule } from '@angular/common';
// NgIconComponent
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit {

  // Item Data
  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
