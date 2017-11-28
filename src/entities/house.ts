import { Reform } from "./reform";

export class House {
    public $key: string;
    public description: string;
    public images: string[] = [];
    public reforms: Reform[] = [];

    // public spentTotal(): number {
    //     let spents: number[] = this.reforms.map(a => a.spent);

    //     let spentTotal: number = 0;

    //     spents.forEach(spent => {
    //         spentTotal = (spentTotal + spent);
    //     });

    //     return spentTotal;
    // }
}