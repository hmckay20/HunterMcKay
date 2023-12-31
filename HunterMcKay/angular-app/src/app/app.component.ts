import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HamgurgerMenuComponent } from './hamgurger-menu/hamgurger-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  interns: any[] = [];
  title: string = 'The 2023 FCSA Interns';
  constructor(private firestore: AngularFirestore) {
    firestore.collection('interns').valueChanges().subscribe(data => {
      this.interns = data;
    });
  }
}
