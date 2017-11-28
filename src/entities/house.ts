export class House {
    $key: string;
    description: string;
    images: string[];
    reforms: {
        description: string;
        spent: number;
    }
}