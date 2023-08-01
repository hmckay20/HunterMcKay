import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  interns: any[] = [];

  constructor(private firestore: AngularFirestore) {
    firestore.collection('interns').valueChanges().subscribe(data => {
      this.interns = data;
    });
  }
}
