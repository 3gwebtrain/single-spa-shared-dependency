import { Renderer2 } from "@angular/core";
import { Component, ElementRef, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "child1-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "child1";

  constructor(public elementRef: ElementRef, private renderer: Renderer2) {
    this.elementRef.nativeElement.classList.add("class");

    // const child = this.elementRef.nativeElement.children;

    $("h1").css({ border: "2px solid orange" });
  }

  ngOnInit() {
    window.addEventListener("toggleClock", () => {
      console.log(" i am hearing from parent");
    });
  }
}
