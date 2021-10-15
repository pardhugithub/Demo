import { Component, OnInit } from '@angular/core';
import { Theme } from '../models/theme';
import { SnackerService } from '../services/snacker.service';
import { ThemeService } from '../services/theme.service';
@Component({
  selector: 'app-menu-theme',
  templateUrl: './menu-theme.component.html',
  styleUrls: ['./menu-theme.component.sass']
})
export class MenuThemeComponent implements OnInit {
  themeClass = 'default';
  constructor(public themeService: ThemeService, private snacker:SnackerService) { }

  ngOnInit(): void {
    this.themeService.theme$.subscribe(
      (t: Theme) => (this.themeClass = t.name)
    );

    this.snacker.sendSuccessMessage("Snackbar Success Message")
    //this.snacker.sendErrorMessage("Snackbar Error Message")
    //this.snacker.sendWarningMessage("Snackbar Warning Message")

  }

}
