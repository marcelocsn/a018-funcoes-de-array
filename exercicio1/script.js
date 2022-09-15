const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const objetoA018 = {
    nome: " astrodev ",
    profissao: " Dev das estrelas ",
    username: " astrodev_labenu ",
    senha: " melhorDeTodos "
}

function caixaAlta(objeto)
{
    for(elementos in objeto)
    {
        objeto[elementos] = objeto[elementos].toUppercase()
        console.log(objeto[elementos])
    }
}
function textoCorrigido(objeto)
{
    for(elementos in objeto)
    {
        objeto[elementos] = objeto[elementos].trim()
        console.log(objeto[elementos])
    }
}
function recebeCallback(objeto1, callback1, callback2)
{
    callback1(objeto1)
    callback2(objeto1)
}

recebeCallback(objetoA018, caixaAlta, textoCorrigido)