import Swal from 'sweetalert2';
import Game from './Game.js';

let btn_player1 = document.getElementById("btn_player1");
let btn_player2 = document.getElementById("btn_player2");
let player1, player2, pj1 = "", pj2 = "", aceptar = 0, turnosP1 = 0, turnosP2 = 0, victoriasP1 = 0, victoriasP2 = 0;

const ataques = {
    "Vegito": {
        "color":"linear-gradient(255deg, rgba(124,21,21,0.5) 17%, rgba(255,145,33,0.5) 54%, rgba(164,52,52,0.5) 92%)",
        "atk1": "Ráfaga de Ki",
        "atk2": "Big Bang Kamehameha!!",
        "Ki": "AAAAAAH!",
        "curar": "¡Soy el guerrero que destruirá todo el mal en el universo!"
    },
    "Trunks": {
        "color":"linear-gradient(255deg, rgba(21,123,124,0.5) 17%, rgba(33,255,253,0.5) 54%, rgba(52,164,140,0.5) 92%)",
        "atk1": "Espada de Ki",
        "atk2": "Finish Buster!!",
        "Ki": "AAAAAAH!",
        "curar": "Si no peleo ahora, nunca cambiaré nada."
    },
    "Gohan": {
        "color":"linear-gradient(255deg, rgba(124,21,82,0.5) 17%, rgba(171,33,255,0.5) 54%, rgba(164,52,122,0.5) 92%)",
        "atk1": "Espada de Ki",
        "atk2": "Finish Buster!!",
        "Ki": "AAAAAAH!",
        "curar": "No peleo porque me guste, peleo para proteger a los demás."
    },
    "Goku": {
        "color":"linear-gradient(255deg, rgba(24,21,124,0.5) 17%, rgba(43,33,255,0.5) 54%, rgba(59,52,164,0.5) 92%)",
        "atk1": "Ataque de ki",
        "atk2": "Kame.... Kame.... Hame..... Haaa!!!",
        "Ki": "AAAAAAH!",
        "curar": "¡No me rendiré, porque eso es lo que hacen los Saiyajins!"
    },

    "Veguetta": {
        "color":"linear-gradient(255deg, rgba(111,10,79,0.5) 17%, rgba(176,46,235,0.5) 54%, rgba(149,20,135,0.5) 92%)",
        "atk1": "Royal Rush",
        "atk2": "Galick Gun!!!",
        "Ki": "AAAAAAH!",
        "curar": "¡Yo soy Vegeta, el príncipe de todos los Saiyajins!"
    },
    "Pikoro": {
        "color":"linear-gradient(255deg, rgba(20,144,11,0.5) 17%, rgba(209,246,189,0.5) 54%, rgba(84,164,52,0.5) 92%)",
        "atk1": "Onda Explosiva",
        "atk2": "Gran Explosión de Energía!!!",
        "Ki": "AAAAAAH!",
        "curar": "¡No subestimes el poder de un Namekiano!"
    },
    "Gogeta": {
        "color":"linear-gradient(255deg, rgba(141,144,11,0.5) 17%, rgba(224,235,46,0.5) 54%, rgba(181,189,55,0.5) 92%)",
        "atk1": "Soul Punisher",
        "atk2": "Big Bang Kamehameha!!!",
        "Ki": "AAAAAAH!",
        "curar": "¡No hay nadie en este universo que pueda derrotarme!"
    },
    "Cell": {
        "color":"linear-gradient(255deg, rgba(34,83,28,0.5) 17%, rgba(75,235,46,0.5) 54%, rgba(36,77,30,0.5) 92%)",
        "atk1": "Golpe Meteórico",
        "atk2": "Onda de Energía Perfecta!!!",
        "Ki": "AAAAAAH!",
        "curar": "¡Vamos! ¡Muéstrame lo mejor que tienes antes de que me aburra!"
    },
}

const iniciar_player1 = () => {
    document.getElementById('player1').classList.add("d-none");
    aceptar++;
    if (aceptar == 2) {
        document.getElementById("iniciar_juego").classList.remove("d-none")
        let timerInterval;
    Swal.fire({
        title: "INICIAR COMABTE",
        html: "EN <b>3</b> segundos", // Aquí se agrega un <b> donde se mostrará el tiempo
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            let timeLeft = Swal.getTimerLeft(); // Obtienes el tiempo restante en milisegundos
            let secondsLeft = Math.floor(timeLeft / 1000); // Convertimos a segundos
            timer.textContent = secondsLeft; // Actualizamos el temporizador en segundos
    
            // Actualizamos el temporizador cada segundo
            timerInterval = setInterval(() => {
                timeLeft = Swal.getTimerLeft(); // Vuelves a obtener el tiempo restante
                secondsLeft = Math.floor(timeLeft / 1000); // Lo conviertes a segundos
                if (timer) {
                    timer.textContent = secondsLeft; // Actualizas el valor
                }
            }, 1000);
        },
        willClose: () => {
            clearInterval(timerInterval); // Limpiamos el intervalo cuando el modal se cierre
            Swal.fire({
                title: "Inicia el jugador 1",
                text: "El jugador 2 no podra hacer nada hasta que el jugador 1 haga un movimiento",
                icon: "success"
            });
        }
    });
    }

}
const iniciar_player2 = () => {
    document.getElementById('player2').classList.add("d-none");
    aceptar++;
    if (aceptar == 2) {
        document.getElementById("iniciar_juego").classList.remove("d-none")
        let timerInterval;
    Swal.fire({
        title: "INICIAR COMABTE",
        html: "EN <b>3</b> segundos", // Aquí se agrega un <b> donde se mostrará el tiempo
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            let timeLeft = Swal.getTimerLeft(); // Obtienes el tiempo restante en milisegundos
            let secondsLeft = Math.floor(timeLeft / 1000); // Convertimos a segundos
            timer.textContent = secondsLeft; // Actualizamos el temporizador en segundos
    
            // Actualizamos el temporizador cada segundo
            timerInterval = setInterval(() => {
                timeLeft = Swal.getTimerLeft(); // Vuelves a obtener el tiempo restante
                secondsLeft = Math.floor(timeLeft / 1000); // Lo conviertes a segundos
                if (timer) {
                    timer.textContent = secondsLeft; // Actualizas el valor
                }
            }, 1000);
        },
        willClose: () => {
            clearInterval(timerInterval); // Limpiamos el intervalo cuando el modal se cierre
            Swal.fire({
                title: "Inicia el jugador 1",
                text: "El jugador 2 no podra hacer nada hasta que el jugador 1 haga un movimiento",
                icon: "success"
            });
        }
    });
    }

}

let seleccion1 = document.getElementById("player1_seleccion");
seleccion1.addEventListener('click', (event) => {
    pj1 = event.target.alt == undefined ? "" : event.target.alt;

    seleccion1.querySelectorAll("img").forEach((temp_img) => {
        temp_img.classList.remove("btn-warning")
        temp_img.classList.add("btn-danger")
    });

    event.target.classList.remove("btn-danger");
    event.target.classList.add("btn-warning");
})

let seleccion2 = document.getElementById("player2_seleccion");
seleccion2.addEventListener('click', (event) => {
    pj2 = event.target.alt == undefined ? "" : event.target.alt;

    seleccion2.querySelectorAll("img").forEach((temp_img) => {
        temp_img.classList.remove("btn-warning")
        temp_img.classList.add("btn-primary")
    });

    event.target.classList.remove("btn-primary");
    event.target.classList.add("btn-warning");
})

btn_player1.addEventListener('click', () => {
    let user_name1 = document.getElementById("user_name1").value;
    if (user_name1 == "") {
        Swal.fire({
            title: "Advertencia para el jugador 1",
            text: "Tienes que ingresar un nombre de usuario",
            icon: "warning"
        });
    } else {
        player1 = new Game(user_name1);
        if (pj1 == "") {
            Swal.fire({
                title: "Advertencia para el jugador 1",
                text: "Tienes que elegir un personaje",
                icon: "warning"
            });
        } else {
            document.getElementById("p1").innerText = user_name1.toUpperCase();
            document.getElementById("avatar1").src = `./public/img/${pj1}/base.png`;
            iniciar_player1();
        }
    }
})

btn_player2.addEventListener('click', () => {
    let user_name2 = document.getElementById("user_name2").value;
    if (user_name2 == "") {
        Swal.fire({
            title: "Advertencia para jugador 2",
            text: "Tienes que ingresar un nombre de usuario",
            icon: "warning"
        });
    } else {
        player2 = new Game(user_name2);
        if (pj2 == "") {
            Swal.fire({
                title: "Advertencia para jugador 2",
                text: "Tienes que elegir un personaje",
                icon: "warning"
            });
        } else {
            document.getElementById("p2").innerText = user_name2.toUpperCase();
            document.getElementById("avatar2").src = `./public/img/${pj2}/base.png`;
            iniciar_player2();
        }
    }
})

const turno = (turno,atacante,turnos=0) => {    
    console.log(turnosP1,turnosP2);
    document.getElementById(`btn_atk_py${turno}`).disabled = false
    document.getElementById(`btn_ermi_py${turno}`).disabled = false
    document.getElementById(`btn_ki_py${turno}`).disabled = false
    if (turnos == 0) {
        document.getElementById(`btn_esp_py${turno}`).disabled = false
    }else {
        if (turnos >= 3) {
            document.getElementById(`btn_esp_py${turno}`).disabled = false
            if (turno == 1) {
                turnosP1 = 0;
            }else if(turno == 2) {
                turnosP2 = 0;
            }
        } else {
            document.getElementById(`btn_esp_py${turno}`).disabled = true
        }
    }
    
    document.getElementById(`btn_atk_py${atacante}`).disabled = true
    document.getElementById(`btn_esp_py${atacante}`).disabled = true
    document.getElementById(`btn_ermi_py${atacante}`).disabled = true
    document.getElementById(`btn_ki_py${atacante}`).disabled = true
}

const volverAPelear = (ganador) => {
    if (ganador == 1) {
        victoriasP1++;
        document.getElementById('victoriasP1').textContent = victoriasP1;
    }else if(ganador == 2){
        victoriasP2++;
        document.getElementById('victoriasP2').textContent = victoriasP2;
    }

    turnosP1 = 0;
    turnosP2 = 0;

    player1.aumentoVida(1000);
    player1.setKi(80);
    player1.setEnergia(90);
    player1.setSemilla(3);
    
    player2.aumentoVida(1000);
    player2.setKi(80);
    player2.setEnergia(90);
    player2.setSemilla(3);

    console.log("Vida",player1.getVida());
    console.log("Ki",player1.getKi());
    console.log("Energia",player1.getEnergia());
    console.log("Vida",player2.getVida());
    console.log("Ki",player2.getKi());
    console.log("Energia",player2.getEnergia());

    document.getElementById("vida_py1").style.width=`100%`;
    document.getElementById("ki_py1").style.width=`100%`;
    document.getElementById("energia_py1").style.width=`100%`;
    document.getElementById('se_p1').innerText = player1.getSemilla()
    document.getElementById("vida_py2").style.width=`100%`;
    document.getElementById("ki_py2").style.width=`100%`;
    document.getElementById("energia_py2").style.width=`100%`;
    document.getElementById('se_p2').innerText = player2.getSemilla()

    document.getElementById("vida_py1").innerText=`100%`;
    document.getElementById("ki_py1").innerText=`100%`;
    document.getElementById("energia_py1").innerText=`100%`;
    document.getElementById("vida_py2").innerText=`100%`;
    document.getElementById("ki_py2").innerText=`100%`;
    document.getElementById("energia_py2").innerText=`100%`;

    document.getElementById(`btn_atk_py1`).disabled = false
    document.getElementById(`btn_ermi_py1`).disabled = false
    document.getElementById(`btn_ki_py1`).disabled = false
    document.getElementById(`btn_esp_py1`).disabled = false
    document.getElementById(`btn_atk_py2`).disabled = true
    document.getElementById(`btn_ermi_py2`).disabled = true
    document.getElementById(`btn_ki_py2`).disabled = true
    document.getElementById(`btn_esp_py2`).disabled = true
}

const derrotado = (derrotado,img,ganadorNombre,ganador) => {
    Swal.fire({
        title: `${ganadorNombre}`,
        text: "Después de un largo combate fuiste victorioso",
        width: 600,
        color: "#000",
        background: "none",
        imageUrl: `./public/img/${img}/base.png`,
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "Ataque Básico",
        backdrop: "linear-gradient(255deg, rgba(63, 70, 57, 0.85) 5%, rgba(159,181,148,0.85) 54%, rgba(73,77,68,0.85) 89%)",
        showCancelButton: true,
        confirmButtonText: "Volver a pelear",
        cancelButtonText: "Regresar al menú",
        allowOutsideClick: false
    }).then((result) => {
        if (result.isConfirmed) {
            volverAPelear(ganador);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            location.reload();
        }
    });
    document.getElementById(`ki_py${derrotado}`).style.width=`${0}%`;
    document.getElementById(`ki_py${derrotado}`).innerText=`${0}%`;

    document.getElementById(`energia_py${derrotado}`).style.width=`${0}%`;
    document.getElementById(`energia_py${derrotado}`).innerText=`${0}%`;

    document.getElementById(`vida_py${derrotado}`).style.width=`${0}%`;
    document.getElementById(`vida_py${derrotado}`).innerText=`${0}%`;
}

// Botones de jugador 1
document.getElementById("btn_atk_py1").addEventListener('click', async () => {    
    if (player1.getKi() < 5 || player1.getEnergia() < 10) {
        Swal.fire({
            title: "Ki y Energia insuficiente",
            text: "Tienes que recargar para hacer un ataque",
            icon: "warning"
        });
    } else {
        player1.atk_basico(player2);
        await Swal.fire({
            title: "Ataque Basico Jugador 1",
            text: ataques[pj1]["atk1"],
            width: 600,
            color: "#ffff",
            background: "none",
            imageUrl: `./public/img/${pj1}/basico.png`,
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: "Ataque Basico",
            backdrop: `${ataques[pj1]["color"]}`,
        });

        if (player2.getVida() <= 0) {
            derrotado(2,pj1,player1.getUser_name(),1)
        }else {
            let porcentaje = parseInt((parseInt(player1.getKi())*100)/80);
            document.getElementById("ki_py1").style.width=`${porcentaje}%`;
            document.getElementById("ki_py1").innerText=`${porcentaje}%`;
        
            porcentaje = parseInt((parseInt(player1.getEnergia())*100/90));
            document.getElementById("energia_py1").style.width=`${porcentaje}%`;
            document.getElementById("energia_py1").innerText=`${porcentaje}%`;
        
            porcentaje = parseInt((parseInt(player2.getVida())*100)/100);
            document.getElementById("vida_py2").style.width=`${porcentaje}%`;
            document.getElementById("vida_py2").innerText=`${porcentaje}%`;

            if (turnosP1 > 0) {
                turnosP1++;
            }
            turno(2,1,turnosP2);
        }
    }
})

document.getElementById("btn_esp_py1").addEventListener('click',async () => {    
    if (player1.getKi() < 10 || player1.getEnergia() < 20) {
        Swal.fire({
            title: "Ki y Energia insuficiente",
            text: "Tienes que recargar para hacer un ataque",
            icon: "warning"
        });
    } else {
        player1.atk_especial(player2);
        await Swal.fire({
            title: "Ataque Basico Jugador 1",
            text: ataques[pj1]["atk2"],
            position: "center-center",
            width: 600,
            color: "#ececec",
            background: "none",
            imageUrl: `./public/img/${pj1}/especial.png`,
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: "Ataque Basico",
            backdrop: `${ataques[pj1]["color"]}`,
        });

        if (player2.getVida() <= 0) {
            derrotado(2,pj1,player1.getUser_name(),1)
        }else {
            let porcentaje = parseInt((parseInt(player1.getKi())*100)/80);
            document.getElementById("ki_py1").style.width=`${porcentaje}%`;
            document.getElementById("ki_py1").innerText=`${porcentaje}%`;
        
            porcentaje = parseInt((parseInt(player1.getEnergia())*100/90));
            document.getElementById("energia_py1").style.width=`${porcentaje}%`;
            document.getElementById("energia_py1").innerText=`${porcentaje}%`;
        
            porcentaje = parseInt((parseInt(player2.getVida())*100)/100);
            document.getElementById("vida_py2").style.width=`${porcentaje}%`;
            document.getElementById("vida_py2").innerText=`${porcentaje}%`;
        
            turnosP1++;
            turno(2,1,turnosP2);
        }
    }
})

document.getElementById("btn_ermi_py1").addEventListener('click',() => {
    if (player1.getSemilla() <= 0) {
        Swal.fire({
            title: "Te has quedado sin semillas",
            text: "las semillas se han acabado",
            icon: "warning"
        });
    }else {
        player1.semilla_ermi();
        let porcentaje = parseInt((parseInt(player1.getKi())*100)/80);
        document.getElementById("ki_py1").style.width=`${porcentaje}%`;
        document.getElementById("ki_py1").innerText=`${porcentaje}%`;
    
        porcentaje = parseInt((parseInt(player1.getEnergia())*100/90));
        document.getElementById("energia_py1").style.width=`${porcentaje}%`;
        document.getElementById("energia_py1").innerText=`${porcentaje}%`;
    
        porcentaje = parseInt((parseInt(player1.getVida())*100)/100);
        document.getElementById("vida_py1").style.width=`${porcentaje}%`;
        document.getElementById("vida_py1").innerText=`${porcentaje}%`;
    
        document.getElementById('se_p1').innerText = player1.getSemilla()
       
        Swal.fire({
            title: "Te has comido una semilla del ermitaño",
            text: ataques[pj1]["curar"],
            position: "center-center",
            width: 600,
            color: "#ececec",
            background: "none",
            imageUrl: `./public/img/${pj1}/curar.png`,
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: "semilla",
            backdrop: `${ataques[pj1]["color"]}`,
        });
        if (turnosP1 > 0) {
            turnosP1++;
        }
        turno(2,1,turnosP2);
    }
})

document.getElementById("btn_ki_py1").addEventListener('click',() => {
    player1.cargar_ki();
    let porcentaje = parseInt((parseInt(player1.getKi())*100)/80);
    document.getElementById("ki_py1").style.width=`${porcentaje}%`;
    document.getElementById("ki_py1").innerText=`${porcentaje}%`;

    Swal.fire({
        title: "Aumentando ki!!!",
        text: "Aumentaste tu ki",
        position: "center-center",
        width: 600,
        color: "#ececec",
        background: "none",
        imageUrl: `./public/img/${pj1}/energia.png`,
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "cargar ki",
        backdrop: `${ataques[pj1]["color"]}`,
    });
    if (turnosP1 > 0) {
        turnosP1++;
    }
    turno(2,1,turnosP2);
})

// Botones de jugador 2
document.getElementById("btn_atk_py2").addEventListener('click',async () => {    
    if (player2.getKi() < 5 || player2.getEnergia() < 10) {
        Swal.fire({
            title: "Ki y Energia insuficiente",
            text: "Tienes que recargar para hacer un ataque",
            icon: "warning"
        });
    } else {
        player2.atk_basico(player1);
        await Swal.fire({
            title: "Ataque Basico Jugador",
            text: ataques[pj2]["atk1"],
            width: 600,
            color: "#ececec",
            background: "none",
            imageUrl: `./public/img/${pj2}/basico.png`,
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: "Ataque Basico",
            backdrop: `${ataques[pj2]["color"]}`,
        });

        if (player1.getVida() <= 0) {
            derrotado(1,pj2,player2.getUser_name(),2)
        }else { 
            let porcentaje = parseInt((parseInt(player2.getKi())*100)/80);
            document.getElementById("ki_py2").style.width=`${porcentaje}%`;
            document.getElementById("ki_py2").innerText=`${porcentaje}%`;
        
            porcentaje = parseInt((parseInt(player2.getEnergia())*100/90));
            document.getElementById("energia_py2").style.width=`${porcentaje}%`;
            document.getElementById("energia_py2").innerText=`${porcentaje}%`;
        
            porcentaje = parseInt((parseInt(player1.getVida())*100)/100);
            document.getElementById("vida_py1").style.width=`${porcentaje}%`;
            document.getElementById("vida_py1").innerText=`${porcentaje}%`;
        
            if (turnosP2 > 0) {
                turnosP2++;
            }
            turno(1,2,turnosP1);
        }
    }
})

document.getElementById("btn_esp_py2").addEventListener('click',async () => {    
    if (player2.getKi() < 10 || player2.getEnergia() < 20) {
        Swal.fire({
            title: "Ki y Energia insuficiente",
            text: "Tienes que recargar para hacer un ataque",
            icon: "warning"
        });
    } else {
        player2.atk_especial(player1);
        await Swal.fire({
            title: "Ataque Especial!",
            text: ataques[pj2]["atk2"],
            position: "center-center",
            width: 600,
            color: "#ececec",
            background: "none",
            imageUrl: `./public/img/${pj2}/especial.png`,
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: "Ataque Especial",
            backdrop: `${ataques[pj2]["color"]}`,
        });

        if (player1.getVida() <= 0) {
            derrotado(1,pj2,player2.getUser_name(),2)
        }else {
            let porcentaje = parseInt((parseInt(player1.getKi())*100)/80);
            document.getElementById("ki_py2").style.width=`${porcentaje}%`;
            document.getElementById("ki_py2").innerText=`${porcentaje}%`;
        
            porcentaje = parseInt((parseInt(player1.getEnergia())*100/90));
            document.getElementById("energia_py2").style.width=`${porcentaje}%`;
            document.getElementById("energia_py2").innerText=`${porcentaje}%`;
        
            porcentaje = parseInt((parseInt(player1.getVida())*100)/100);
            document.getElementById("vida_py1").style.width=`${porcentaje}%`;
            document.getElementById("vida_py1").innerText=`${porcentaje}%`;
        
            turnosP2++;
            turno(1,2,turnosP1);
        }
    }
})

document.getElementById("btn_ermi_py2").addEventListener('click',() => {
    if (player2.getSemilla() <= 0) {
        Swal.fire({
            title: "Te has quedado sin semillas",
            text: "las semillas se han acabado",
            icon: "warning"
        });
    }else {
        player2.semilla_ermi();
        let porcentaje = parseInt((parseInt(player2.getKi())*100)/80);
        document.getElementById("ki_py2").style.width=`${porcentaje}%`;
        document.getElementById("ki_py2").innerText=`${porcentaje}%`;

        porcentaje = parseInt((parseInt(player2.getEnergia())*100/90));
        document.getElementById("energia_py2").style.width=`${porcentaje}%`;
        document.getElementById("energia_py2").innerText=`${porcentaje}%`;

        porcentaje = parseInt((parseInt(player2.getVida())*100)/100);
        document.getElementById("vida_py2").style.width=`${porcentaje}%`;
        document.getElementById("vida_py2").innerText=`${porcentaje}%`;

        document.getElementById('se_p2').innerText = player2.getSemilla()
    
        Swal.fire({
            title: "Te has comido una semilla del ermitaño",
            text: ataques[pj2]["curar"],
            position: "center-center",
            width: 600,
            color: "#ececec",
            background: "none",
            imageUrl: `./public/img/${pj2}/curar.png`,
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: "semilla",
            backdrop: `${ataques[pj2]["color"]}`,
        });
        if (turnosP2 > 0) {
            turnosP2++;
        }
        turno(1,2,turnosP1);
    }
})

document.getElementById("btn_ki_py2").addEventListener('click',() => {
    player2.cargar_ki();
    let porcentaje = parseInt((parseInt(player2.getKi())*100)/80);
    document.getElementById("ki_py2").style.width=`${porcentaje}%`;
    document.getElementById("ki_py2").innerText=`${porcentaje}%`;

    Swal.fire({
        title: "Aumentando ki!!!",
        text: "Aumentaste tu ki",
        position: "center-center",
        width: 600,
        color: "#ececec",
        background: "none",
        imageUrl: `./public/img/${pj2}/energia.png`,
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "cargar ki",
        backdrop: `${ataques[pj2]["color"]}`,
    });
    if (turnosP2 > 0) {
        turnosP2++;
    }
    turno(1,2,turnosP1);
})