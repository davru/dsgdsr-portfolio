import { Component, OnInit } from '@angular/core';
import { Termynal } from '../../../scripts/termynal';

@Component({
    selector: 'app-terminal',
    templateUrl: './terminal.component.html',
    styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        const termynal = new Termynal('#termynal', { startDelay: 600 });
    }
}
