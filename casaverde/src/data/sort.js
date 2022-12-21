export default function ordenar(lista,ordenador) {
    switch(ordenador) {
    case 'preco':
        return lista.sort((a,b) => parseFloat(a.preco) > parseFloat(b.preco) ? 1 : -1);
    case 'nome': 
        return lista.sort((a, b) => a.nome.toUpperCase() > b.nome.toUpperCase() ? 1 : -1);
    default:
        return lista; 
    }
}