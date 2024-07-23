function calcular(tipo, valor){
    //verifica se o tipo é numeral ou ação
    if(tipo === 'acao'){
        if(valor === 'c'){ 
            //se é ação clear vai limpar o visor (id resultado)
            document.getElementById('resultado').value = '';
        }
        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('resultado').value += valor
        }
        if (valor === '='){
           var valor_campo = eval(document.getElementById('resultado').value)
           document.getElementById('resultado').value = valor_campo
        }
    }else if(tipo === 'numeral'){  //montar o numeral que será utilizado no cálculo
        var valor_campo = document.getElementById('resultado').value; //variável que recebe o value
        document.getElementById('resultado').value = valor_campo + valor; //o input com id resultado recebe o valor do numeral, que agora é uma string e concatena com outro valor que for selecionado
        //document.getElementById('resultado').value += valor
    }
}