import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

// elemente uygulananacak olan kısım.

@Directive({
  selector: '[appHighlightText]'
})
export class HighlightTextDirective implements OnInit {

  // karşılığı element document.getElementById() ile seçilir
  // elementRef servis sayesinde ilgili html elementine bağnaıp js kodu çalıştırabilir ve tasarım uygulayabiliriz.

  @Input() content:string = '';
  @Input() visible:boolean = false;

  constructor(private elementRef:ElementRef) {
    // elementin refransına nativeElement üzerinden ulaşırız.
    this.elementRef.nativeElement.style.color = "red";
    this.elementRef.nativeElement.style.backgroundColor = "blue";
    // document.getElementById()?.style.colo

   }
  ngOnInit(): void {

    if(this.content != ''){
      this.elementRef.nativeElement.innerText = this.content;
    }

    console.log('visible', this.visible)

    if(!this.visible){
      this.elementRef.nativeElement.style.display = 'none';
    }

  }



   // angular tarafında bir elemente bir event binding yapıyoruz
   @HostListener('mouseenter') onMouseEnter() {
     this.elementRef.nativeElement.style.textDecoration = 'underline';
   }

   @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.textDecoration = 'none';
  }



}
