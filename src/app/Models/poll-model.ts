export interface PollModel {
    id: number | null;
    question: string;
    options: OptionVote[];
}

export interface OptionVote{
    voteOption : string;
    voteCount : number;
}

