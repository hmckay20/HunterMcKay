import { Component, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-pictures-page',
  templateUrl: './pictures-page.component.html',
  styleUrls: ['./pictures-page.component.scss']
})
export class PicturesPageComponent {
  
    pictures: any[] = [];

    constructor(private firestore: AngularFirestore) {
      firestore.collection('pictures').valueChanges().subscribe(data => {
        this.pictures = data;
      });
    }
  }

