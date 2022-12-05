class Alumno{
    constructor(id,name,nota1,nota2,nota3,nota4){
        this.id = id
        this.name = name
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
        this.nota4 = nota4
    }
    
    promedio(){
        return ((this.nota1*0.15)+(this.nota2*0.2)+(this.nota3*0.25)+(this.nota4*0.4))
    }

    condicion(){
        if(this.promedio()>=12){
            return "aprobado"
        } else{
            return "desaprobado"
        }
    }

    obsequio(){
        if(this.promedio()>=17){
            return "Se le obsequiara una Mochila"
        } else{
            return "No tiene obsequio"
        }
    }

}