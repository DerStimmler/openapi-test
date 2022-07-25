import { Component } from '@angular/core';
import {WeatherForecastDto, WeatherForecastService} from "@app-api";
import { Observable } from 'rxjs';

@Component({
  selector: 'openapi-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  weather$: Observable<WeatherForecastDto[]>;

  constructor(private weatherForecastService: WeatherForecastService) {
    this.weather$ = this.weatherForecastService.getWeatherForecast();
  }
}
