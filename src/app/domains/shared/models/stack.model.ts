import { ItemStack } from "./itemStack.model";

export interface Stack {
    id:number;
    categoria:string;
    items: ItemStack[]
}