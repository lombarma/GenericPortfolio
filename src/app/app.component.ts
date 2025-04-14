import {CvTemplateComponent} from './cv-template/cv-template.component';
import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ItemComponent} from './item/item.component';
import {DynamicTextComponent} from './dynamic-text/dynamic-text.component';
import {LinksBarComponent} from './links-bar/links-bar.component';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ItemComponent,
    DynamicTextComponent,
    LinksBarComponent,
    NgStyle,
    CvTemplateComponent,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
