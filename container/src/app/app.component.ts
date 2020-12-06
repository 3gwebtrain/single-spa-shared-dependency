import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'container';
  constructor(private renderer:Renderer2){}

  ngOnInit(){
    this.renderer.addClass(document.body, 'single-spa');
  }

  sendMessage() {
    const event = new Event('toggleClock');
    window.dispatchEvent(event);
  }

}
