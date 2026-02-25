import { Component, OnInit } from '@angular/core';
import { VotingService } from '../Services/voting-service';
import { PollModel } from '../Models/poll-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-voting',
  imports: [FormsModule],
  templateUrl: './voting.html',
  styleUrl: './voting.css',
})
export class Voting  implements OnInit{
 
  newPoll: PollModel = {
    id: null,
    question: '',
    options: 
    [
      {voteOption: '', voteCount: 0},
      {voteOption: '', voteCount: 0}
    ]
  }
  polls: PollModel[] = [];

  constructor(private pollService: VotingService){}

  ngOnInit(): void {
    
    this.loadPolls();
  }

  loadPolls(){
    this.pollService.getPolls().subscribe({
      next: (data) =>{
        this.polls = data;
      },

      error: (error) =>{
           console.error("Error fetching polls: ",error)
      }
    });
  }

  
createPoll()
{
  this.pollService.createPoll(this.newPoll).subscribe({
    next: (cretatedPoll) => {
        this.polls.push(cretatedPoll);
        this.resetPoll();
    },
    error: (error) =>{
          console.error("Error creating poll: ", error)
    }
  });
}

addOptions()
{
  this.newPoll.options.push({voteOption:'', voteCount:0});
}

resetPoll()
{
  this.newPoll = {
    id: null,
    question:'',
    options:[
      {voteOption:'', voteCount:0},
      {voteOption:'', voteCount:0}
    ]
  }
}

vote(pollId: number | null, optionId:number)
{
  console.log(pollId, optionId);
   this.pollService.vote(pollId, optionId).subscribe({
    next: () =>{
        this.loadPolls();
    },

    error: (error) =>
    {
      console.error("Error on updateing vote: ", error);
    }
   
   })
}

}
