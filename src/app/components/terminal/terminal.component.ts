import { Component, OnInit } from '@angular/core';
import { Termynal } from '../../../scripts/termynal';

@Component({
    selector: 'app-terminal',
    templateUrl: './terminal.component.html',
    styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
    private termynal: Termynal;

    constructor() {}

    ngOnInit(): void {
        this.termynal = new Termynal('#termynal', { startDelay: 600 });
    }
}
