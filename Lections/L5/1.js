function solve(input){
    let dohod_za_mesec=Number(input.shift());
    let broi_meseci=Number(input.shift());
    let neobhodima_suma=Number(input.shift());

    let neobhodima_suma1=(dohod_za_mesec*30)/100;
    let suma_za_spestqvane=dohod_za_mesec-(neobhodima_suma+neobhodima_suma1);
    let suma_za_tri_meseca=3*suma_za_spestqvane;
    let procenti1=(suma_za_spestqvane/dohod_za_mesec)*100;

    console.log(`She can save ${procenti1.toFixed(2)}%`);
    console.log(`${suma_za_tri_meseca}`);
    	

}
solve(["1500",
"3",
"800"
])