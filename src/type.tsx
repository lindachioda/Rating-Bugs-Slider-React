
export type Recensioni = {
    id:number,
    recensione:string,
    titolo:string,
    voto:number,
    img:string,
}

export type RecensioniPosition = Recensioni &{
    positionClass:string,
}