import { Reform } from "./reform";

export class House {
    public $key: string;
    public description: string;

    public address: string;
    public number: string;
    public neighborhood: string;
    public city: string;
    public state: string;

    public images: string[] = [];
    public reforms: Reform[] = [];

    public addressComplete(): string {
        return `${this.number} ${this.address}, ${this.city}`
    }

    // public spentTotal(): number {
    //     let spents: number[] = this.reforms.map(a => a.spent);

    //     let spentTotal: number = 0;

    //     spents.forEach(spent => {
    //         spentTotal = (spentTotal + spent);
    //     });

    //     return spentTotal;
    // }
}