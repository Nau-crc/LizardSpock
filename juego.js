function myOpcion(humano){
    
  var resultados = ["Empate","Ganas","Pierdes"]
  var elijo = ["Piedra", "Papel", "Tijeras", "Lagarto", "Spock"]

  var logica = [
      [0,1,2,2,1],
      [2,0,1,1,2],
      [1,2,0,2,1],
      [1,2,1,0,2],
      [2,1,2,1,0]
  ];

  logica_hablada = [
    ["Empate","Papel tapa a piedra","Piedra rompe tijeras","Piedra aplasta lagarto","Spock vaporiza piedra"],

    ["Papel tapa a piedra","Empate","Tijeras cortan papel","Lagarto devora papel","Papel desautoriza a Spock"],

    ["Piedra rompe tijeras","Tijeras cortan papel","Empate","Tijeras decapitan lagarto","Spock rompe tijeras"],

    ["Piedra aplasta lagarto","Lagarto devora papel","Tijeras decapitan lagarto","Empate","Lagarto envenena a spock"],

    ["Spock vaporiza piedra","Papel desautoriza a spock","Spock rompe tijeras","Lagarto envenena a spock","Empate"]
  ]

  var maquina = Math.floor((Math.random()*5));

  var resultado = logica[maquina][humano];

  console.log("TU: " + elijo[humano]);
  console.log("MAQUINA: " + elijo[maquina]);
  console.log(logica_hablada[maquina][humano]);
  console.log(resultados[resultado]);

document.getElementById("chosenCards").innerHTML = (elijo[humano]) + " " + "Vs." + " " + (elijo[maquina]);
document.getElementById("whatHappened").innerHTML = (logica_hablada[maquina][humano]);
document.getElementById("result").innerHTML = (resultados[resultado]);


}