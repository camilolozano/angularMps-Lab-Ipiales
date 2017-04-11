import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  sites = [
    {
      Card_title: 'Sitio Uno',
      message: `I am a very simple card. I am good
                at containing small bits of information. I am 
                convenient because I require little markup to use effectively.`,
      image: 'http://static.panoramio.com/photos/large/75437102.jpg'
    },
    {
      Card_title: 'Sitio Dos',
      message: `I am a very simple card. I am good
                at containing small bits of information. I am 
                convenient because I require little markup to use effectively.`,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Plaza_Veinte_de_Julio_en_Ipiales_%28Nari%C3%B1o-Colombia%29.jpg/270px-Plaza_Veinte_de_Julio_en_Ipiales_%28Nari%C3%B1o-Colombia%29.jpg'
    },
    {
      Card_title: 'Sitio Tres',
      message: `I am a very simple card. I am good
                at containing small bits of information. I am 
                convenient because I require little markup to use effectively.`,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Plaza_Veinte_de_Julio_en_Ipiales_%28Nari%C3%B1o-Colombia%29.jpg/270px-Plaza_Veinte_de_Julio_en_Ipiales_%28Nari%C3%B1o-Colombia%29.jpg'
    },
    {
      Card_title: 'Sitio Tres',
      message: `I am a very simple card. I am good
                at containing small bits of information. I am 
                convenient because I require little markup to use effectively.`,
      image: 'http://www.procolombia.co/sites/default/files/iglesia_de_las_lajas_-_narino-_min.jpg?1369776716'
    }
  ];

}
