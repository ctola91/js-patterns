export interface IOrder {
    validate(): boolean;
    sale(): void;
}