/*
IMAGENS RETIRADAS DOS SITE
https://www.imagensanimadas.com/cat-tux-1618.htm
 */
const banco_imagens_JSON = {IMGs:[
        {"id":"0", "LINK":"https://www.imagensanimadas.com/data/media/1618/tux-imagem-animada-0140.gif"},
        {"id":"1", "LINK":"https://www.imagensanimadas.com/data/media/1618/tux-imagem-animada-0151.gif"},
        {"id":"2", "LINK":"https://www.imagensanimadas.com/data/media/1618/tux-imagem-animada-0150.gif"},
        {"id":"3", "LINK":"https://www.imagensanimadas.com/data/media/1618/tux-imagem-animada-0155.gif"},
        {"id":"4", "LINK":"https://www.imagensanimadas.com/data/media/1618/tux-imagem-animada-0152.gif"},
        {"id":"5", "LINK":"https://www.imagensanimadas.com/data/media/1618/tux-imagem-animada-0139.gif"},
        {"id":"6", "LINK":"https://www.imagensanimadas.com/data/media/1618/tux-imagem-animada-0129.gif"},
        {"id":"7", "LINK":"https://www.imagensanimadas.com/data/media/1618/tux-imagem-animada-0146.gif"},
        {"id":"8", "LINK":"https://www.imagensanimadas.com/data/media/1618/tux-imagem-animada-0128.gif"},
        {"id":"9", "LINK":"https://www.imagensanimadas.com/data/media/1618/tux-imagem-animada-0123.gif"},
        {"id":"10", "LINK":"https://www.imagensanimadas.com/data/media/1618/tux-imagem-animada-0099.gif"},
        {"id":"11", "LINK":"https://www.imagensanimadas.com/data/media/1618/tux-imagem-animada-0103.gif"},
        {"id":"12", "LINK":"https://www.imagensanimadas.com/data/media/1618/tux-imagem-animada-0115.gif"},
        {"id":"13", "LINK":"https://www.imagensanimadas.com/data/media/1618/tux-imagem-animada-0089.gif"},
        {"id":"14", "LINK":"https://www.imagensanimadas.com/data/media/1618/tux-imagem-animada-0066.gif"}
    ]}


function f_galeria()
    {
    /*  
        // CODIGO PARA FNCIONAR COM UMA IMAGEM
        // CRIA A IMAGEM
        var sg = document.createElement("IMG");

        // ATRIBUI O LINK A IMAGEM
        sg.src = "/Galeria_Imagens/1.jpg";
        sg.alt = "Imagen 1";

        // CONFIGURANDO O TAMANHO DAS IMAGENS
        sg.width = "200";
        sg.height = "200";

        // conteudo vai ser a div de destino no HTML
        var gal = document.getElementById("GALERIA");

        // envia a imagem criada para a div conteudo
        gal.appendChild(sg);
    */


        /* CODIGO PARA FUNCIONAR COM VÁRIAS IMAGENS */
        var sg = [];
        var max_img = 15;
        var i;
        var irand;

        for(i = 0 ; i <= max_img ; i++)
            {
                // CRIANDO AS IMAGENS
                sg[i] = document.createElement("IMG");
                /*  // PARA MOSTRAR TODAS AS IMAGENS EM ORDEM DE NOME / NÚMERO
                sg[i].src = "/Galeria_Imagens/" +i+ ".jpg";
                sg[i].alt = "Imagen "+i;
                */
                
                // PARA MOSTRANDO IMAGENS ALEATÓRIAS
                irand = Math.floor(Math.random() * max_img);
                //console.log("VALOR DE irand: " + irand);
                
                /* // USAR IMAGENS LOCAIS
                sg[i].src = "/Galeria_Imagens/" +irand+ ".jpg";
                sg[i].alt = "Imagen "+irand;
                */

                // USAR IMAGENS DA INTERNET
                sg[i].src = banco_imagens_JSON.IMGs[irand].LINK;
                console.log(banco_imagens_JSON.IMGs[irand].LINK);
                sg[i].alt = "Imagen "+irand;

                // CONFIGURANDO O TAMANHO DAS IMAGENS
                sg[i].width = "400";
                sg[i].height = "400";

                // DIV DE DESTINO NO HTML
                var gal = document.getElementById("GALERIA");

                // ENVIANDO AS IMAGENS PARA A DIV NO HTML
                gal.appendChild(sg[i]);
                    }
                

            }

function carrega_mais()
            {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) 
                    {
                        console.log("você está no final da página");
                        f_galeria();
                        
                            }
                else
                    {
                        console.log("você NÃO está no final da página");
                    
                            }
                    }
                    