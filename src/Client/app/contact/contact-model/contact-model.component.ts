import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/Client/interfaces/contact';

@Component({
  selector: 'app-contact-model',
  templateUrl: './contact-model.component.html',
  styleUrls: ['./contact-model.component.scss'],
})
export class ContactModelComponent implements OnInit {
  @Input('contact') contact!: Contact;

  constructor() {}

  ngOnInit(): void {}
}
