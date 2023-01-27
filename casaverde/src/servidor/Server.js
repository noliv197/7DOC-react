
export default async function getProdutos() { 
    const url = "https://server-casaverde.vercel.app/produtos"
    const conexao = await fetch(url)
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}