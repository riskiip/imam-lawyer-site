import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
})
export class HeaderComponent implements OnInit {
  onDefault = true;
  isHomeActive = false;
  isPracticeActive = false;
  isAboutActive = false;
  isBlogActive = false;
  isContactActive = false;

  constructor(private route: Router) {
  }

  ngOnInit() {
  }

  navigatePage(event: any) {
    switch (event) {
      case 'contact':
        this.isHomeActive = false;
        this.onDefault = false;
        this.isPracticeActive = false;
        this.isAboutActive = false;
        this.isBlogActive = false;
        this.isContactActive = true;
        this.route.navigate([ '/contact' ]);
        break;
      case 'practice':
        this.isHomeActive = false;
        this.onDefault = false;
        this.isPracticeActive = true;
        this.isAboutActive = false;
        this.isBlogActive = false;
        this.isContactActive = false;
        this.route.navigate([ '/practice' ]);
        break;
      case 'about':
        this.isHomeActive = false;
        this.onDefault = false;
        this.isPracticeActive = false;
        this.isAboutActive = true;
        this.isBlogActive = false;
        this.isContactActive = false;
        this.route.navigate([ '/about' ]);
        break;
      case 'blog':
        this.isHomeActive = false;
        this.onDefault = false;
        this.isPracticeActive = false;
        this.isAboutActive = false;
        this.isBlogActive = true;
        this.isContactActive = false;
        this.route.navigate([ '/blog' ]);
        break;
      default:
        this.isHomeActive = true;
        this.isPracticeActive = false;
        this.isAboutActive = false;
        this.isBlogActive = false;
        this.isContactActive = false;
        this.route.navigate([ '/' ]);
        break;
    }
  }

}
