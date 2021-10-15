import { Component, OnInit } from '@angular/core';
import { Theme } from '../models/theme';
import { ThemeService } from '../services/theme.service';
@Component({
  selector: 'app-menu-theme',
  templateUrl: './menu-theme.component.html',
  styleUrls: ['./menu-theme.component.sass']
})
export class MenuThemeComponent implements OnInit {
  themeClass = 'default';
  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.theme$.subscribe(
      (t: Theme) => (this.themeClass = t.name)
    );
  }

}
