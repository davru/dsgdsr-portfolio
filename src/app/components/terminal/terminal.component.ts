import { Component, OnInit } from '@angular/core';
import { Termynal } from '../../../scripts/termynal';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-terminal',
    templateUrl: './terminal.component.html',
    styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
    constructor(public themeService: ThemeService) { }

    ngOnInit(): void {
        const termynal = new Termynal('#termynal', { startDelay: 600 });
    }
}
