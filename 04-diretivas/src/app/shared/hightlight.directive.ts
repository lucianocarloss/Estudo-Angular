import { Directive, HostListener, HostBinding,
  ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[Hightlight]'
})
export class HightlightDirective {
  @HostListener('mouseenter') onMouseOver(){

    this.backgroundColor  = this.hightLightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){

    this.backgroundColor  = this.defaltColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: any;

  @Input() defaltColor: any = "white";
  @Input('Hightlight') hightLightColor: any = "yellow";

    // @HostBinding('style.backgroundColor') get setColor(){
    //   return this.backgroundColor;
    // }
    // private backgroundColor: any;
  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaltColor;
  }

}
