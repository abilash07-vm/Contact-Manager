import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { FormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactModelComponent } from './contact-model/contact-model.component';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ContactNewComponent } from './contact-new/contact-new.component';

@NgModule({
  declarations: [ContactListComponent, ContactModelComponent, ContactNewComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    // Material
    MatCardModule,
    MatIconModule,
  ],
})
export class ContactModule {}