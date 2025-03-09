function AbrirMenu() {
    document.getElementById("menu_aba").style.display = "block"; 
    document.getElementById("main").style.display = "none"; 
}

function FecharMenu() {
    document.getElementById("menu_aba").style.display = "none";   
    document.getElementById("main").style.display = "flex";  
}

function CarregarTema() {
    let Tema = localStorage.getItem("Tema");

    if (Tema == "Inatel") {
        TemaInatel();
    } else if (Tema == "Dark") {
        TemaDark();
    }
}

function SalvarTema(TemaEscolhido) {
    localStorage.setItem("Tema", TemaEscolhido);
}

function TemaInatel() {
    document.documentElement.style.setProperty('--cor-click', '#126ae2');
    document.documentElement.style.setProperty('--cor-sombra', '#0a599b');
    document.documentElement.style.setProperty('--cor-text', 'black');
    document.documentElement.style.setProperty('--cor-back1', '#edf2f4');
    document.documentElement.style.setProperty('--cor-back2', '#1b61ca');
    document.documentElement.style.setProperty('--cor-tema', 'black');
    document.documentElement.style.setProperty('--md-sys-color-primary', '#126ae2');
    SalvarTema("Inatel");
}

function TemaDark() {
    const cores = {
        '--cor-click': '#CEF09D',
        '--cor-sombra': '#9b0a59',
        '--cor-text': 'black',
        '--cor-back1': '#38184C',
        '--cor-back2': '#4f6a93',
        '--cor-tema': 'white',
        '--md-sys-color-primary': '#CEF09D'
    };

    SalvarTema("Dark");

    for (const [variavel, valor] of Object.entries(cores)) {
        document.documentElement.style.setProperty(variavel, valor);
    }
}