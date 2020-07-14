import { environment } from './../environments/environment';
export class Apiservice {
    public static API = {
        SIGNUP: environment.apiUrl + '/signup',
        LOGIN: environment.apiUrl + '/login'
    }
}