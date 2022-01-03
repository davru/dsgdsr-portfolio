import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import {
  Sun,
  Moon,
  ArrowDown,
  Github,
  Twitter,
  Codepen,
  Linkedin
} from 'angular-feather/icons';

const icons = {
  Sun,
  Moon,
  ArrowDown,
  Github,
  Twitter,
  Codepen,
  Linkedin
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule {}
