import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year: number;
  version = '1.0.0';
  phone: string;
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    const dateNow = new Date();
    this.year = dateNow.getFullYear();
    this.phone = '61996423080';
  }
  changeLang(language: string) {
    this.translate.use(language);
  }
}
