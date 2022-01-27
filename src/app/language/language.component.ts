import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'languageBtn',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent {

  constructor(private translate: TranslateService) { }

  useLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
