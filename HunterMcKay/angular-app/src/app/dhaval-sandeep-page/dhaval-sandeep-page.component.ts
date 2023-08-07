import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dhaval-sandeep-page',
  templateUrl: './dhaval-sandeep-page.component.html',
  styleUrls: ['./dhaval-sandeep-page.component.scss']
})
export class DhavalSandeepPageComponent {
  thanksMessage: string = '';
  title: string = 'The 2023 FCSA Interns';

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.firestore.collection('ThankYou').doc('RealEstate').valueChanges()
      .subscribe((data: any) => {
        this.thanksMessage = data?.thanks;
      });
  }
}
