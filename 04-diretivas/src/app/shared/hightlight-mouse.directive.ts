import { Directive, HostListener, HostBinding,
  ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[HightlightMouse]'
})
export class HightlightMouseDirective {
  
  @HostListener('mouseenter') onMouseOver(){

    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'grey'
    //   );
    this.backgroundColor  = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){

    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'white'
    //   );
    this.backgroundColor  = 'white';
  }

  // @HostBinding('style.backgroundColor') backgroundColor: any;
    @HostBinding('style.backgroundColor') get setColor(){
      return this.backgroundColor;
    }

    private backgroundColor: any;

  constructor(
    //rivate _elementRef: ElementRef,
    //private _renderer: Renderer2
    ) { }

}
