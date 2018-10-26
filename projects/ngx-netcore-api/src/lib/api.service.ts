import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorizationTokenService } from './authorization-token.service';

export const BASE_URL = 'BASE_URL';
export const AUTHORIZATION_TOKEN_SERVICE = 'AUTHORIZATION_TOKEN_SERVICE';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(
        private http: HttpClient,
        @Inject(BASE_URL) private baseUrl,
        @Inject(AUTHORIZATION_TOKEN_SERVICE) private tokenService: AuthorizationTokenService
    ) { }

    get<T>(entityRoute: string): Observable<T> {
        return this.http.get<T>(
            this.getApiRoute(entityRoute),
            {
                headers: this.getHeaders()
            });
    }

    post<T>(entityRoute: string, body: T): Observable<T> {
        return this.http.post<T>(
            this.getApiRoute(entityRoute),
            body,
            {
                headers: this.getHeaders()
            });
    }

    put<T>(entityRoute: string, body: T): Observable<T> {
        return this.http.put<T>(
            this.getApiRoute(entityRoute),
            body,
            {
                headers: this.getHeaders()
            });
    }

    delete<T>(entityRoute: string): Observable<T> {
        return this.http.delete<T>(entityRoute);
    }

    private getApiRoute(entityRoute: string): string {
        return `${this.baseUrl}/${entityRoute}`;
    }

    private getHeaders(): HttpHeaders {
        let headersObj = null;
        const accessToken = this.tokenService.getToken();

        if (accessToken) {
            headersObj = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            };
        } else {
            headersObj = {
                'Content-Type': 'application/json'
            };
        }

        return new HttpHeaders(headersObj);
    }

}
