import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dynamic-text',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-text.component.html',
  styleUrls: ['./dynamic-text.component.css']
})
export class DynamicTextComponent implements AfterViewInit {
  @ViewChild('texteDynamique') texteDynamique!: ElementRef;

  //phrases = ['Front-End Engineer at Ekino.', 'Computer Sciences student'];
  @Input() phrases: string[] = [""];
  indexPhrase = 0;

  ngAfterViewInit() {
    this.animateText();
  }

  async animateText() {
    while (true) {
      await this.eraseText(this.texteDynamique.nativeElement, 100);
      await this.animateTextElement(this.texteDynamique.nativeElement, this.phrases[this.indexPhrase], 100);
      this.indexPhrase = (this.indexPhrase + 1) % this.phrases.length;
      await this.sleep(2000);
    }
  }

  async eraseText(element: HTMLElement, speed: number) {
    while (element.innerText.length > 0) {
      element.innerText = element.innerText.slice(0, -1);
      await this.sleep(speed);
    }
  }

  async animateTextElement(element: HTMLElement, text: string, speed: number) {
    for (let i = 0; i < text.length; i++) {
      element.innerText += text[i];
      await this.sleep(speed);
    }
  }

  private async sleep(speed: number) {
    return new Promise(resolve => setTimeout(resolve, speed));
  }
}
