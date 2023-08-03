
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HamgurgerMenuComponent } from '../hamgurger-menu/hamgurger-menu.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent {
  p: number = 1;
  interns: any[] = [];
  title: string = 'The 2023 FCSA Interns';
  constructor(private firestore: AngularFirestore) {
    firestore.collection('interns').valueChanges().subscribe(data => {
      this.interns = data;
    });
  }
}
