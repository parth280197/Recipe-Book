import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  ElementRef
} from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective {
  constructor(private elRef: ElementRef) {}
  // @Input() className: string = "";
  @HostBinding("class.open") isOpen = false;
  @HostListener("document:click", ["$event"]) onClick(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
}
