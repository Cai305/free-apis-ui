import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApisService } from './apis.service';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Api } from './api.interface';
import { Image } from '../assets/images/images'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {

api_images = Image;



  apisObservable: any;


  amimals_Api: any[] = [];
  developments_Api: any[] = [];
  books_Api: any[] = [];
  cryptocurrency_Api: any[] = [];
  dictionaries_Api: any[] = [];
  finances_Api: any[] = [];
  games_Comics_Api:any[] = [];
  geocoding_Api:any[] = [];
  music_Api:any[] = [];
  government_Api :any[] = [];
  personality_Api :any[] = [];
  security_Api :any[] = [];
  sports_Fitness_Api:any[] = [];
  weather_Api :any[] = [];
  transportation_Api : any[] = [];
  test_Data_Api : any[] = [];
  uncategories_Api:any[] = [];
  view_data :any[]= [];

  constructor(private api: ApisService) {}

  ngOnInit(): void {


    this.apisObservable = this.api.getAllApis().subscribe((response) => {
      this.apisObservable = response.entries;
      this.view_data = response.entries
      console.log(this.apisObservable);

      this.apisObservable.forEach((element: any) => {
        switch (element.Category) {
          case 'Animals':
            this.amimals_Api.push(element);
            break;

          case 'Development':
            this.developments_Api.push(element);
            break;

          case 'Books':
            this.books_Api.push(element);
            break;

          case 'Cryptocurrency':
            this.cryptocurrency_Api.push(element);
            break;

          case 'Dictionaries':
            this.dictionaries_Api.push(element);
            break;

          case 'Finance':
            this.finances_Api.push(element);
            break;

          case 'Games & Comics':
            this.games_Comics_Api.push(element);
            break;

          case 'Geocoding':
            this.geocoding_Api.push(element);
            break;

          case 'Music':
            this.music_Api.push(element);
            break;

          case 'Government':
            this.government_Api.push(element);
            break;

          case 'Personality':
            this.personality_Api.push(element);
            break;

          case 'Security':
            this.security_Api.push(element);
            break;

          case 'Sports & Fitness':
            this.sports_Fitness_Api.push(element);
            break;

          case 'Weather':
            this.weather_Api.push(element);
            break;

          case 'Transportation':
            this.transportation_Api.push(element);
            break;

          case 'Test Data':
            this.test_Data_Api.push(element);
            break;

          default:
            this.uncategories_Api.push(element);
            break;
        }
      });



    });
  }
  ngOnDestroy(): void {}

  selectCategory(category:string){

    switch (category) {
      case 'Animals':
        this.view_data = this.amimals_Api;
        console.log(this.view_data)
        break;

      case 'Development':
        this.view_data = this.developments_Api;
        break;

      case 'Books':
        this.view_data=this.books_Api;
        break;

      case 'Cryptocurrency':
        this.view_data=this.cryptocurrency_Api;
        break;

      case 'Dictionaries':
        this.view_data=this.dictionaries_Api;
        break;

      case 'Finance':
        this.view_data=this.finances_Api;
        break;

      case 'Games & Comics':
        this.view_data=this.games_Comics_Api;
        break;

      case 'Geocoding':
        this.view_data=this.geocoding_Api;
        break;

      case 'Music':
        this.view_data = this.music_Api;
        break;

      case 'Government':
        this.view_data=this.government_Api;
        break;

      case 'Personality':
        this.view_data=this.personality_Api;
        break;

      case 'Security':
        this.view_data=this.security_Api;
        break;

      case 'Sports & Fitness':
        this.view_data=this.sports_Fitness_Api;
        break;

      case 'Weather':
        this.view_data=this.weather_Api;
        break;

      case 'Transportation':
        this.view_data=this.transportation_Api;
        break;

      case 'Test Data':
        this.view_data=this.test_Data_Api;
        break;

      case 'Anime':
        this.view_data=this.test_Data_Api;
        break;

      default:
        this.view_data=this.uncategories_Api;
        break;
    }


    return console.log(category);

  }
}
