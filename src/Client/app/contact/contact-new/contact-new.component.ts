import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {
  AngularFireStorage,
  AngularFireStorageReference,
} from '@angular/fire/storage';

import { ContactServices } from 'src/Client/Services/contact-services.service';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.scss'],
})
export class ContactNewComponent implements OnInit {
  contactFormGroup!: FormGroup;
  uploadProgress: number[] = [];
  links: string[] = [];
  ref: AngularFireStorageReference;

  constructor(
    private formBuilder: FormBuilder,
    private fireStorage: AngularFireStorage,
    private contactServices: ContactServices,
    private router: Router
  ) {
    this.ref = this.fireStorage.ref('Temp');
  }

  ngOnInit(): void {
    this.contactFormGroup = this.formBuilder.group({
      name: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      address: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      phone: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('[0-9]+'),
      ]),
      photourl: this.formBuilder.control('', [Validators.required]),
    });
  }
  uploadImage($event: any) {
    let files: File[] = $event.target.files;
    let index = this.links.length;
    if (files && files[0]) {
      for (let i = 0; i < files.length; i++) {
        this.uploadProgress.push(0);
        this.links.push('');
      }
      for (let i = 0; i < files.length; i++) {
        this.ref
          .child(files[i].name)
          .put(files[i])
          .then((snapshot: any) => {
            let linkRef: AngularFireStorageReference = this.ref.child(
              files[i].name
            );
            linkRef.getDownloadURL().subscribe((url) => {
              this.contactFormGroup.controls['photourl'].setValue(url);
              console.log(url);
            });
          });
      }
    }
  }
  onSubmit(formData: any) {
    if (this.contactFormGroup.valid) {
      this.contactServices.postAContact(formData).subscribe((data) => {
        this.router.navigate(['/', 'contacts']);
      });
    } else {
      alert('please fill all required fields..');
    }
  }
}
