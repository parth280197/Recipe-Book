import {Component, Output, EventEmitter} from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  @Output() changeNavigationHandler = new EventEmitter();
  changeNavigation = event => {
    let link = event.target.innerText.toLowerCase();
    this.changeNavigationHandler.emit(link);
  };
}
