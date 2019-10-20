import {Component, Output, EventEmitter} from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  @Output() changeNavigationHandler = new EventEmitter();
  changeNavigation = (link: string) => {
    this.changeNavigationHandler.emit(link.toLowerCase());
  };
}
