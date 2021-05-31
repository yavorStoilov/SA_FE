function solve(input){
    let kilogrami_limoni=Number(input.shift());
    let zahar=Number(input.shift());
    let litri_voda=Number(input.shift());

    let obshto_limonov_sok=litri_voda*980;
    let obshto_limonada=(obshto_limonov_sok+litri_voda*1000+((zahar*30)/100)).toFixed(2);
   
    let broi_prodadeni_chashi=obshto_limonada/150;
    let spechelena_suma=broi_prodadeni_chashi*1.20;

    console.log(`All cups sold: ${Math.floor(broi_prodadeni_chashi)}`);
    console.log(`Money earned: ${spechelena_suma.toFixed(2)}`);
}
solve(["5",
   "3.5",
    "5"
    ])