export interface INotificacion{
  titulo: string
  descripcion: string
  tipo: "Informacion" | "Advertencia" | "Error"
}