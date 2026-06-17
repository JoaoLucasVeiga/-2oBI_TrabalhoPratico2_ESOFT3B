<div align="center">

# 🔴⚪ Pokédex Simples

**Um site para explorar o universo Pokémon**

</div>

---

## 📋 Informações Acadêmicas

| Campo | Informação |
|---|---|
| 🏫 **Curso** | Engenharia de Software |
| 📚 **Disciplina** | Programação Front-End |
| 👨‍🏫 **Professor** | José Carlos Flores |
| 🎓 **Turma** | ESOFT3B |
| 📅 **Data** | 28 de Maio de 2026 |
| 📝 **Descritivo** | Exercícios do 1 ao 18 |

---

## 👥 Equipe

| RA | Nome |
|---|---|
| `25001118-2` | Emanuel Gomes de Almeida |
| `25033056-2` | Gabriel Michels Cubas |
| `25164719-2` | Rafael Maia |
| `25291090-2` | João Lucas Veiga de Carvalho |
| `25363242-2` | Euclides Benedito Modesto Coelho Neto |
| `25357453-2` | Leonardo De Jesus Sabino Flugel |

---

## 🎮 O que é esse projeto?

A **Pokédex Simples** é um site que funciona como uma enciclopédia dos Pokémon — inspirada na Pokédex da franquia. Nela, você pode:

- Ver os **48 primeiros Pokémon** em um grid organizado, com imagem oficial e número
- Clicar em qualquer Pokémon para ver uma **página de detalhes** com seus tipos, tamanho, peso e estatísticas de batalha (HP, Ataque, Defesa etc.)

Todos os dados (nomes, imagens, estatísticas) vêm de uma **fonte pública e gratuita na internet** chamada [PokéAPI](https://pokeapi.co), que é como um banco de dados oficial de todos os Pokémon existentes.

---

## 💡 Como o site funciona?

Quando você abre o site, ele:

1. **Busca os dados** dos Pokémon automaticamente pela internet (sem precisar de cadastro ou senha)
2. **Monta as páginas** na hora, exibindo as imagens e informações de cada Pokémon
3. **Navega entre telas** sem precisar recarregar a página — tudo acontece de forma fluida, como um aplicativo

---

## ✨ O que dá pra fazer no site?

- 🗂️ Ver a lista com os 48 primeiros Pokémon com arte oficial
- 🔍 Clicar em um Pokémon para ver seus detalhes completos
- 🎨 Cada tipo de Pokémon (fogo, água, planta...) tem sua cor característica
- 📊 Ver as estatísticas de batalha em barras visuais
- ↩️ Voltar para a lista com um botão
- 📱 O site funciona em celular, tablet e computador

---

## 🖥️ Telas do Site

### Tela 1 — Lista de Pokémon
Exibe todos os 48 Pokémon em cartões organizados em grade. Cada cartão mostra o número, a imagem oficial e o nome do Pokémon.

### Tela 2 — Detalhes do Pokémon
Ao clicar em um Pokémon, abre uma página com:
- Imagem em destaque com fundo colorido pelo tipo primário
- Tipos do Pokémon (ex: Fogo, Voador)
- Altura e peso
- Barras com as estatísticas de batalha (HP, Ataque, Defesa, etc.)

---

## 🛠️ Com o que foi feito?

O projeto foi desenvolvido usando ferramentas modernas de desenvolvimento web:

| Ferramenta | Para que serve |
|---|---|
| **Angular 22** | O "motor" principal do site — organiza as telas e a lógica |
| **TypeScript** | A linguagem de programação utilizada |
| **HTML + CSS** | A estrutura visual e o estilo das páginas |
| **PokéAPI** | A fonte de dados dos Pokémon (API pública gratuita) |

---

## ▶️ Como baixar, instalar e rodar o projeto

Siga os passos abaixo na ordem. Não pule nenhum!

---

### Passo 1 — Baixe e instale o Node.js

O **Node.js** é um programa necessário para rodar projetos web modernos. Sem ele, nada funciona.

1. Acesse o site oficial: **https://nodejs.org**
2. Clique no botão verde escrito **"LTS"** (é a versão recomendada)
3. Baixe o instalador e abra ele
4. Clique em **"Next"** em todas as telas e depois em **"Install"**
5. Quando terminar, clique em **"Finish"**

> ✅ Para confirmar que o Node.js foi instalado corretamente, abra o **Prompt de Comando** (pesquise por "cmd" no menu Iniciar) e digite:
> ```
> node -v
> ```
> Se aparecer um número de versão (ex: `v22.0.0`), está funcionando!

---

### Passo 2 — Baixe o projeto

Você pode baixar o projeto de duas formas:

**Opção A — Pelo GitHub (se o projeto estiver lá):**
1. Acesse a página do repositório no GitHub
2. Clique no botão verde **"Code"**
3. Clique em **"Download ZIP"**
4. Extraia o arquivo ZIP em uma pasta de sua preferência (ex: `Área de Trabalho`)

**Opção B — Se já tiver a pasta do projeto:**
Pule esta etapa, a pasta já está pronta.

---

### Passo 3 — Abra o terminal dentro da pasta do projeto

1. Abra a pasta do projeto no **Explorador de Arquivos** do Windows
2. Clique na **barra de endereço** (onde aparece o caminho da pasta) com o mouse
3. Digite `cmd` e pressione **Enter**

> Isso abre o terminal já dentro da pasta correta do projeto.

---

### Passo 4 — Instale as dependências

No terminal que abriu, digite o comando abaixo e pressione **Enter**:

```
npm install
```

Esse comando baixa todos os pacotes que o projeto precisa para funcionar. Pode demorar alguns minutos — aguarde até terminar.

> ✅ Quando terminar, uma pasta chamada `node_modules` será criada dentro do projeto. Isso é normal.

---

### Passo 5 — Inicie o projeto

Ainda no terminal, digite o comando abaixo e pressione **Enter**:

```
npm start
```

Aguarde alguns segundos. Quando aparecer a mensagem `Application bundle generation complete`, o projeto está rodando!

---

### Passo 6 — Abra o site no navegador

Abra o seu navegador (Chrome, Firefox, Edge...) e acesse o endereço:

```
http://localhost:4200
```

🎉 A Pokédex vai abrir! Você pode clicar nos Pokémon para ver os detalhes de cada um.

---

### Como parar o projeto

Para encerrar o servidor, volte ao terminal e pressione as teclas **Ctrl + C** ao mesmo tempo. Depois feche o terminal.

---

> ⚠️ **Importante:** o site só funciona enquanto o terminal estiver aberto com o `npm start` rodando. Se fechar o terminal, o site para de funcionar.

---

## 📁 Organização dos arquivos

O projeto está organizado em pastas por responsabilidade:

```
src/
├── app/
│   ├── pages/
│   │   ├── pokemon-list/     ← Tela da lista de Pokémon
│   │   └── pokemon-detail/   ← Tela de detalhes do Pokémon
│   └── services/
│       └── pokemon.service   ← Responsável por buscar os dados da internet
└── styles.css                ← Estilo global do site
```

---

<div align="center">

Feito com ❤️ pela turma **ESOFT3B** — Engenharia de Software

</div>
