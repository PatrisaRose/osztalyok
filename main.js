import Szemely from "./szemely.js";

$(function () {
  const szuloElem = $(".tarolo")
  //Példányosítás
  const SZEMELY1 = new Szemely("Béla", 1965, szuloElem);
  const SZEMELY2 = new Szemely("Jolán", 1975, szuloElem);
  console.log(SZEMELY1);
  const lista = [1, 2];
  console.log(lista);
  console.log(SZEMELY2);
  SZEMELY1.nev = "Kálmám";
  console.log(SZEMELY1);
  //futásidőben változtathatók az osztály példányok
  //console.log(SZEMELY1.#szulNev) 
  console.log(SZEMELY1.getSzulnev());
  //console.log(SZEMELY1.Szulnev);
  console.log(SZEMELY1.kor());

});
