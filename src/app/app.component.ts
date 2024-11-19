import {Component, HostListener, OnInit, Renderer2} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ItemComponent} from './item/item.component';
import {DATA} from './constants/data.constant';
import {Data} from './types/data.type';
import {DynamicTextComponent} from './dynamic-text/dynamic-text.component';
import {LinksBarComponent} from './links-bar/links-bar.component';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemComponent, DynamicTextComponent, LinksBarComponent, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  data: Data = DATA;
  x: number = 0;
  y: number = 0;
  visible: boolean = false;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderer.setStyle(document.body, 'background-color', this.data.backgroundColor);
  }

  onClick(elementId: string): void{
    const element = document.getElementById(elementId);
    if(element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }


  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.x = e.clientX;
    this.y = e.clientY;
    this.visible = true;
  }
}
