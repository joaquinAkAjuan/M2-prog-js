class Plant
{
    constructor(naam)
    {
    this.naam = naam;
    }
}
class Dino
{


    constructor(naam, vleeseter, leeftijd)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.leeft = true;
        this.honger = true;
    }

    eetDino(stego)
    {
        this.stego = stego;
        dino.leeft = false;
        console.log("Trex eet de dino stego")
    }

    eetPlant(grass)
    {
        this.grass = grass;
        console.log("Stego eet de plant")
    }



    runApplication()
    {
        console.log("hello world!");


        let appNaam = "Shinra tensei";
        let versienummer = 1.1;
        let versiedatum = Date;
        let autheur = "Joaquin de Boer";
        let copyright = "k hoek je moer";
        let distributeur = "Joaquins laptop";
        let darkmode = true;

        console.log(appNaam);
        console.log(versienummer);
        console.log(versiedatum);
        console.log(autheur);
        console.log(copyright);
        console.log(distributeur);
        console.log(darkmode);
    }
}
let trex = new Dino("Trex",true,10);
let stego = new Dino("Stego",false,14);
let yuty = new Dino("Yuty",true,18);
console.log(trex);
console.log(stego);
let eetdin = new Dino(eetDino);
console.log(eetdin);
let eetpla = new Dino(eetPlant);
console.log(eetpla);
console.log(yuty);
