function aleatorio(min,max) {
    return  Math.floor(Math.random() * (max-min+1 ) + min)
    }  
    function eleccion (jugada) {
            let resultado= ""
                if(jugada == 1) {
                resultado= "PIEDRA 🌑 "
                }   else if(jugada == 2) {
                resultado= "PAPEL 📋 "
                }   else if(jugada == 3) {
                resultado= "TIJERA ✂ "
                }   else {
                resultado= "Mal Elegido"
                }    
                return resultado   
    }           //COMBATE
    function desafio(marcador) {
            if (pc == jugador) {
                alert("HAN EMPATADO")
            }
            else if((jugador == 1 && pc== 3)==(jugador == 2 && pc == 1)==(jugador == 3 && pc == 2)) {
                alert("HAS GANADO")
                marcador=triunfos = triunfos + 1 
            } 
            else { 
                marcador = perdidas = perdidas +1
                alert("HAS PERDIDO")
            }
        }
    
                //1 es piedra, 2 es papel, 3 es tijera
                
                let jugador = 0
                let pc = 0 
                let triunfos=0
                let perdidas=0
                
                //ciclo de combate
    while (triunfos < 3 && perdidas < 3) {

                pc= aleatorio(1,3)
                jugador= prompt(" Elige: 1 para PIEDRA 🌑, 2 para PAPEL 📋, 3 para TIJERA ✂ ")
                //alert("Elegiste " + jugador)
                
                alert("Pc elige: " + eleccion(pc))
                alert("Tu eliges: " + eleccion(jugador))
    
                desafio()
        }
                
                alert(" Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces. ")
                