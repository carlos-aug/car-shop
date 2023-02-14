export default interface ICar {
  id?: string | undefined;
  model: string;
  year: number;
  color: string;
  status?: true;
  buyValue: number;
  doorsQty: number;
  seatsQty: number;
}