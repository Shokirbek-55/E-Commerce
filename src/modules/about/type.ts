export namespace IEntity {
  export interface Worker {
    id: number;
    position: Position;
    first_name: string;
    image: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  }
  
  interface Position {
    id: number;
    name: string;
  }
}
