import { Component } from '@angular/core';
import Email from '../../../scripts/smtp.js';
import { environment } from '../../../environments/environment';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    standalone: true,
    imports: [
        ReactiveFormsModule,
        FormsModule
    ]
})
export class ContactComponent {
    public send(form: NgForm): void {
        const { name, email, message } = form.form.value

        Email.send({
            Host: environment.email_server,
            Port: environment.email_port,
            Username: 'contact@dsgdsr.me',
            From: 'contact@dsgdsr.me',
            To: 'contact@dsgdsr.me',
            Password: environment.email_key,
            Subject: `Contact from portfolio - ${name} [${email}]`,
            Body: message
        }).then(console.log).catch(console.error);
    }
}
