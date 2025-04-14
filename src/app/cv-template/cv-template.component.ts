import {Component, HostListener, OnInit, Renderer2} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {ItemComponent} from '../item/item.component';
import {DATA} from '../constants/data.constant';
import {Data} from '../types/data.type';
import {DynamicTextComponent} from '../dynamic-text/dynamic-text.component';
import {LinksBarComponent} from '../links-bar/links-bar.component';
import {NgStyle} from '@angular/common';
import {CvDataService} from '../services/cv-data.service';

@Component({
  selector: 'app-cv-template',
  standalone: true,
  imports: [RouterOutlet, ItemComponent, DynamicTextComponent, LinksBarComponent, NgStyle],
  templateUrl: './cv-template.component.html',
  styleUrl: './cv-template.component.css'
})
export class CvTemplateComponent implements OnInit {
  title = 'Portfolio';
  // @ts-ignore
  data: Data;
  x: number = 0;
  y: number = 0;
  visible: boolean = false;

  constructor(
    private renderer: Renderer2,
    private cvDataService: CvDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.data = this.cvDataService.getData();
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
