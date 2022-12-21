export function filtrar(filtro, filtroAplicado) {
    if(filtro !== null) return filtro === filtroAplicado;
    return true;
}

export function aplicaFiltro(item){
    const preco = parseFloat(item.preco)
    if (preco >= 10 && preco < 50) return 'baixo'
    else if (preco >= 50 && preco < 100) return 'medio';
    else if (preco >= 100)   return 'alto';
    else return null
}

