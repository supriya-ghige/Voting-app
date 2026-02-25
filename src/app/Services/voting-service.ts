import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PollModel } from '../Models/poll-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VotingService {
  
  private baseUrl= 'http://localhost:8080/api/polls'

  constructor(private http: HttpClient){}

  createPoll(poll: PollModel): Observable<PollModel>
  {
    return this.http.post<PollModel>(this.baseUrl, poll);
  }

  getPolls(): Observable<PollModel[]>{
      return this.http.get<PollModel[]>(this.baseUrl);
  }

  vote(pollId: number |null, optionIndex: number): Observable<void>{
       const url = '${this.baseUrl}/vote';
       console.log(pollId, optionIndex);
       return this.http.post<void>('http://localhost:8080/api/polls/vote', {pollId, optionIndex});
  }

}
