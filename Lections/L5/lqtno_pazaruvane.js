function solve(input){
    let budjet=Number(input.shift());
    let havliq=Number(input.shift());
    let procentna_otstypka=Number(input.shift());

    let chadyr=2/3*havliq;
    let djapanki=(75*chadyr)/100;
    let plajna_chanta=1/3*(havliq+djapanki);
    let obshta_suma=havliq+chadyr+djapanki+plajna_chanta;
    let suma_sled_otstypka=obshta_suma-((procentna_otstypka*obshta_suma)/100);
    
    if(budjet>suma_sled_otstypka){
        console.log(`Annie's sum is ${obshta_suma} lv. She has ${suma_sled_otstypka} lv. left.`);
    }
    else{
        console.log(`Annie's sum is ${obshta_suma} lv. She needs ${Math.abs(suma_sled_otstypka-obshta_suma)} lv. more.`)
    }
    
}
solve(["30",
"17",
"3",
])