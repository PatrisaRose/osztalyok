class Szemely {
  #szulNev;
  constructor(nev, szulDatum, szuloElem) {
    //beállítja az adattagokat
    //a konkrét osztálypéldányra mutat a this
    //osztálypéldány = objektum
    this.nev = nev; //publikus adattag
    this.szulDatum = szulDatum;
    this.#szulNev = nev;
    this.setSzulNev(nev);
    szuloElem.append(`<div class="szemely">
                            <h3>${this.nev}</h3>
                            <p>${this.kor()} éves</p>
                            </div>`);
    //Rákattintok a személyekre, akkor írja ki a személyt
    //Készítek egy adattagot a html elemhez

    this.szemelyElem = $(".szemely:last-child");//csak az utolsó html DOM 
    console.log(this.szemelyElem);
    this.szemelyElem.click(()=>{
        console.log(this)
        //function esetén a this -> azt az elemet jelenti, amelyik 
        //nyíl függvéyn esetén -> az aktuális objektumot jelenti
        //Azt a hatókört jelenti, amiben van
    })
  }
  //privát adattagot elérése
  //Itt a tagfüggvények előtt nem kell function!
  getSzulnev() {
    return this.#szulNev;
  }
  setSzulNev(ertek) {
    //ellenőrzés: nagybetűvel kezdődik, nem üres, legalább 3 betü,
    this.#szulNev = ertek;
  }
  //get szulNev(){return this.#szulNev}

  //Kor kiszámítás
  kor() {
    const d = new Date();
    let year = d.getFullYear();
    return year - this.szulDatum;

    //vagy
    //let kor = year - this.szulDatum;
    //return kor;
  }
}

export default Szemely;
