import { IPhoto } from "../Interface/photo";

export class Photo implements IPhoto {
    albumId!: number; 
    id!: number;
    title!: string;
    url!:string;
    thumbnailUrl!: string

}
