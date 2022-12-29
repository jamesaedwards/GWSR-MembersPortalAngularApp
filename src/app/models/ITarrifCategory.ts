import { ITarrif } from "./ITarrif";

export interface ITarrifCategory{
    id: number;
    name: string;
    description: string;
    tarrifs: ITarrif[];
    seats: number;
}