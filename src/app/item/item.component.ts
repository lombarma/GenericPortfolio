import {Component, Input} from '@angular/core';
import {Item} from '../types/item.type';
import {SkillComponent} from '../skill/skill.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    SkillComponent,
    NgOptimizedImage,
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() item: Item | undefined;

}
