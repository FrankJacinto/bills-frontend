import { Injectable } from '@angular/core';

/**
 * This is a singleton class
 */
@Injectable()
export class AppConfig {

    //public baseApiPath:string="https://rivdu-backend.herokuapp.com/";
    public baseApiPath:string="http://localhost:8093/";

    constructor(){

    }
}
