import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Launch } from '../../models/launchs/Launch';
import { Rocket } from '../../models/rockets/Rocket';
import { CompanyInfo } from '../../models/company/CompanyInfo';
import { Capsule } from '../../models/capsule/Capsule';
import { Launchpads } from '../../models/launchpads/Launchpads';
import { CoreDetails } from '../../models/CoreDetails';

/*
  Generated class for the SpaceXApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpaceXApiProvider {
  private baseUrl = "https://api.spacexdata.com/v2"

  constructor(public http: HttpClient) {
    console.log('Hello SpacexServiceProvider Provider');
  }
  
  getAllLaunches() : Observable<Launch[]>{
    return this.http.get<Launch[]>(this.baseUrl + "/launches/all")
  }

  getPreviousLaunches() : Observable<Launch[]>{
    return this.http.get<Launch[]>(this.baseUrl + "/launches")
  }

  getNextLaunches() : Observable<Launch[]>{
    return this.http.get<Launch[]>(this.baseUrl + "/launches/upcoming")
  }

  getAllRockets() : Observable<Rocket[]>{
    return this.http.get<Rocket[]>(this.baseUrl + "/rockets")
  }

  getOneRocket(rocketId: string) : Observable<Rocket>{
    return this.http.get<Rocket>(this.baseUrl + "/rockets/" + rocketId)
  }

  getSpaceXInfo() : Observable<CompanyInfo>{
    return this.http.get<CompanyInfo>(this.baseUrl + "/info")
  }

  getAllCapsules() : Observable<Capsule[]>{
    return this.http.get<Capsule[]>(this.baseUrl + "/capsules")
  }

  getAllLaunchpads() : Observable<Launchpads[]>{
    return this.http.get<Launchpads[]>(this.baseUrl + "/launchpads")
  }

  getLaunchpad(siteId: string) : Observable<Launchpads>{
    return this.http.get<Launchpads>(this.baseUrl + "/launchpads/" + siteId)
  }

  getAllCores(): Observable<CoreDetails[]>{
    return this.http.get<CoreDetails[]>(this.baseUrl + "/parts/cores")
  }

  getLaunch(flight_number: string) : Observable<Launch[]>{
    return this.http.get<[Launch]>(this.baseUrl + "/launches?flight_number=" + flight_number)
  }
}
