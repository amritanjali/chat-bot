import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

export interface User {
	// "ChatSource": "String",
	"SessionID": string
	"in": string
	"op": string
	"cbid": string
	"cbot": string
	"key": string
}
@Injectable({
	providedIn: 'root'
})
export class ChatbotService {

	constructor(private http: HttpClient) { }
	chatbotResponse(msg) {
		const url = "https://robomatic-ai.p.rapidapi.com/api.php";
		const header = {
			headers: new HttpHeaders({
				"x-rapidapi-host": "robomatic-ai.p.rapidapi.com",
				"x-rapidapi-key": "8198e94074msh8413f51000c8dabp1b0d02jsn0b02f5ca124e",
				"content-type": "application/x-www-form-urlencoded"
			})
		}

		var body = "ChatSource=RapidAPI&SessionID=RapidAPI1&in=What's%202%20plus%205%3F&op=in&cbid=1&cbot=1&key=RHMN5hnQ4wTYZBGCF3dfxzypt68rVP";
		let httpParams = new HttpParams({
			fromObject: {
				ChatSource: 'RapidAPI',
				SessionID: 'RapidAPI1',
				in: msg,
				op: 'in',
				cbid: '1',
				cbot: '1',
				key: 'RHMN5hnQ4wTYZBGCF3dfxzypt68rVP'
			}
		});

		console.log("params====>" + httpParams)
		return this.http.post<User>(url, httpParams, header)
	}
}