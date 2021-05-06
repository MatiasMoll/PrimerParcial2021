export class Actor {
    public nombre:string;
    public apellido:string;
    public pais:any;
    public fechaNacimiento:Date;
    private edad:number;

    constructor(
        nombre:string,
        apellido:string,
        pais:any,
        fechaNacimiento:Date
    ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
        this.fechaNacimiento = fechaNacimiento;
        this.edad = new Date().getFullYear() - fechaNacimiento.getFullYear();
    }

    getEdad():number{
        return this.edad;
    }
}
