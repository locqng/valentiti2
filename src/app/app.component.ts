import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  noText = 'No';
  yesText = 'Yes';
  noClick = 0;
  noClickStyle = ''
  noClickStyleYes = ''
  clickYes = false;
  buttonSize = 1;
  tempButtonSize = 1;

  onNoClick() {
    if (this.noText === 'No') {
      this.noBehavior();
    }
    else {
      this.yesBehavior();
    }
  }

  onYesClick() {
    if (this.noText === 'Yes') {
      this.noClick = -1;
      this.noBehavior()
    }
    else {
      this.yesBehavior();
    }
  }

  checkStyle(noClick: number) {
    switch (noClick) {
      case 0: {
        this.buttonSize = this.tempButtonSize;
        this.noText = 'No';
        this.yesText = 'Yes';
        this.noClickStyle = '';
        this.noClickStyleYes = '';
        break;
      }
      case 1: {
        this.noClickStyle = 'no-button-1st'
        this.noClickStyleYes = 'yes-button-1st'
        break;
      }
      case 2: {
        this.noClickStyle = 'no-button-2nd'
        break;
      }
      case 3: {
        this.noClickStyle = 'no-button-3rd'
        this.noClickStyleYes = 'yes-button-3rd'
        break;
      }
      case 4: {
        this.noClickStyle = '';
        this.noClickStyleYes = '';
        this.noClick = 0;
        this.buttonSize = 1;
        this.noText = 'Yes';
        this.yesText = 'No';
      }
    }
  }

  noBehavior() {
    this.buttonSize += 0.2;
    this.tempButtonSize += 0.2;
    this.noClick++;
    this.checkStyle(this.noClick);
  }

  yesBehavior() {
    this.clickYes = true;
    console.log('YAY');
  }
}
