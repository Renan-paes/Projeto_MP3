let musicas = [
    
    {titulo:'Tarde de outubro', artista:'CPM 22', src:'musicas/tardeDeOutubro.mp3',img:'imagens/cpm22.jpg'}, 

    {titulo:'Aerials', artista:'System of a down', src:'musicas/aerials.mp3',img:'imagens/system.jpg'},

    {titulo:'Theres Never A Forever Thing', artista:'A-ha', src:'musicas/theresNeverAForeverThing.mp3',img:'imagens/a_ha.jpg'},

    {titulo:'Every body wants to rule the world', artista:'Tears For Fears', src:'musicas/everybodyWantsToRuleTheWorld.mp3',img:'imagens/tears_for_fears.jpg'},

    {titulo:'Like a Stone', artista:'AudioSlave', src:'musicas/like-a-stone.mp3',img:'imagens/audioslave.jpg'}
];

let musica = document.querySelector('audio');
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');
let indexMusica = 0;
renderizarMusica(indexMusica);




// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);
document.querySelector('.botao-pause').addEventListener('click', pausarMusica);
musica.addEventListener('timeupdate',atualizarBarra);

document.querySelector('.anterior').addEventListener('click',() =>{
    indexMusica--;
    if(indexMusica < 0){
        indexMusica = (musicas.length)-1;
    }
    renderizarMusica(indexMusica);
    musica.play()
    document.querySelector('.botao-pause').style.display = 'block'
    document.querySelector('.botao-play').style.display = 'none'

});

document.querySelector('.proxima').addEventListener('click',() =>{
    indexMusica++;
    if(indexMusica > (musicas.length)-1){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
    musica.play()
    document.querySelector('.botao-pause').style.display = 'block'
    document.querySelector('.botao-play').style.display = 'none'

    
    
});



//Funções

function renderizarMusica(index){
    musica.setAttribute('src',musicas[index].src)
    musica.addEventListener('loadeddata',() => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    })
}


function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block'
    document.querySelector('.botao-play').style.display = 'none'
}


function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none'
    document.querySelector('.botao-play').style.display = 'block'
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration)*100) +'%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime)) ;
}


function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor( segundos / 60)
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10) {
        campoSegundos  = '0' + campoSegundos
    }

    return campoMinutos+':'+campoSegundos
}

