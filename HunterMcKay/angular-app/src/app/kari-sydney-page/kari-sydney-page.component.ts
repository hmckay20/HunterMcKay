import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-kari-sydney-page',
  templateUrl: './kari-sydney-page.component.html',
  styleUrls: ['./kari-sydney-page.component.scss']
})

  export class KariSydneyPageComponent implements OnInit {
    thanksMessage: string = '';
    opener: string = '';
    closing: string = '';
    signOff: string = '';
    title: string = 'The 2023 FCSA Interns';
  
    constructor(private firestore: AngularFirestore) { }
  
    ngOnInit() {
      this.firestore.collection('ThankYou').doc('Einstein').valueChanges()
        .subscribe((data: any) => {
          this.thanksMessage = data?.thanks;
          this.opener = data?.opener;
          this.closing = data?.closing;
          this.signOff = data?.signOff;
        });
    }
}


