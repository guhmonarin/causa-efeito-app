const usuarios = [
    {
        "cadastros": [
            {
                "id":1,
                "nome":"Samuel",
                "endereco":"Alameda, nº 3",
                "cidade": "Rio de janeiro",
                "estado": "RJ",
                "pais": "Brasil",
                "telefone": "(11) 98798-9898",
                "aniversario": "23/10/1968"
            },
            {
                "id":2,
                "nome":"Teste",
                "endereco":"Alameda, nº 3",
                "cidade": "São Paulo",
                "estado": "SP",
                "pais": "Brasil",
                "telefone": "(11) 98798-9898",
                "aniversario": "23/10/1968"
            },
            {
                "id":3,
                "nome":"Teste",
                "endereco":"Alameda, nº 3",
                "cidade": "São Paulo",
                "estado": "SP",
                "pais": "Brasil",
                "telefone": "(11) 98798-9898",
                "aniversario": "23/10/1968"
            },
            {
                "id":4,
                "nome":"Teste",
                "endereco":"Alameda, nº 3",
                "cidade": "São Paulo",
                "estado": "SP",
                "pais": "Brasil",
                "telefone": "(11) 98798-9898",
                "aniversario": "23/10/1968"
            }
        ]
    }
]

const lista = document.querySelector('.lista')
const informacoes = document.querySelector('.informacoes')

listarUsuarios();

function listarUsuarios () {
    usuarios.forEach(usuario => {
        usuario.cadastros.forEach(cadastro => {
            const nome = document.createElement('li')
            nome.id = cadastro.id
            nome.textContent = cadastro.nome
            lista.appendChild(nome)
        })
    })
}

function informacoesUsuarios (id) {
    removerElemento();
    usuarios.forEach(usuario => {
        usuario.cadastros.forEach(cadastro =>{
            if(id == cadastro.id){
                const nome = document.createElement('li')
                const endereco = document.createElement('li')
                const cidade = document.createElement('li')
                const estado = document.createElement('li')
                const pais = document.createElement('li')
                const telefone = document.createElement('li')
                const aniversario = document.createElement('li')
                
                nome.textContent = 'Nome: ' + cadastro.nome;
                endereco.textContent = 'Endereço: ' + cadastro.endereco;
                cidade.textContent = 'Cidade: ' + cadastro.cidade;
                estado.textContent = 'Estado: ' + cadastro.estado;
                pais.textContent = 'País: ' + cadastro.pais;
                telefone.textContent = 'Telefone: ' + cadastro.telefone;
                aniversario.textContent = 'Aniversário: ' + cadastro.aniversario;
                
                informacoes.appendChild(nome);
                informacoes.appendChild(endereco);
                informacoes.appendChild(cidade);
                informacoes.appendChild(estado);
                informacoes.appendChild(pais);
                informacoes.appendChild(telefone);
                informacoes.appendChild(aniversario);
            }         
        })
    })
}
    
function removerElemento(){
    const itens = informacoes.getElementsByTagName('li');
    for(let i = itens.length - 1;i >= 0; i--){
        const removerItem = itens[i]
        removerItem.remove();
    }
}


const itensLista = lista.getElementsByTagName('li');

for(let i = 0; i < itensLista.length; i++){
    const item = itensLista[i]
    item.addEventListener('click', () => {
        informacoesUsuarios(item.id)
    })
}

