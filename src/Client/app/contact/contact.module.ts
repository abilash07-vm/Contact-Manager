import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactModelComponent } from './contact-model/contact-model.component';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from 'src/Client/environments/environment';

@NgModule({
  declarations: [
    ContactListComponent,
    ContactModelComponent,
    ContactNewComponent,
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // Material
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,

    // Firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
  ],
})
export class ContactModule {}
