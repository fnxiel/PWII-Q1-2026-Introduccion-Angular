import { IArtista } from "./IArtista"
import { IPortada } from "./IPortada"

export interface ICancion{
    id: number
    nombre: string
    artista: IArtista
    portada: IPortada
    duracion: string
}