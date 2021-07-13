import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/Client/interfaces/contact';
import { ContactServices } from 'src/Client/Services/contact-services.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  constructor(private contactService: ContactServices) {}

  contacts: Contact[] = [];
  ngOnInit(): void {
    this.contactService.getAllContacts().subscribe((data: any) => {
      this.contacts = data;
    });
  }
}
