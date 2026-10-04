# Controle de Gastos Pessoais — Módulo TypeScript

Projeto individual de um módulo em TypeScript que gerencia despesas mensais e gera relatórios de gastos categorizados, desenvolvido com práticas de TDD (Test-Driven Development) e testes automatizados com Vitest.

---

##  Como instalar, testar e rodar o projeto

### Pré-requisitos
- Node.js instalado 

### Passos
1. **Instalar as dependências:**
   ```bash
   npm install

#### Registro de Uso de IA

| Função Implementada | Descrição do Teste Escrito | Status da Implementação pela IA | Ajustes / Observações |
| :--- | :--- | :--- | :--- |
| `adicionarDespesa` | Testa inserção, imutabilidade do array original e exceções para valores/meses inválidos. | Aceita com ajustes | Adicionada validação do mês (1 a 12) e garantia de retorno de uma nova referência de array. |
| `removerDespesa` | Testa remoção por ID e imutabilidade quando o ID fornecido não existe. | Aceita diretamente | Implementada de forma imutável com `.filter()`. |
| `despesasDaCategoria` | Filtra despesas por uma categoria específica e testa listas vazias. | Aceita diretamente | Implementada utilizando o método `.filter()`. |
| `totalGasto` | Calcula a soma de todas as despesas da lista e valida retorno 0 para array vazio. | Aceita diretamente | Implementada com método funcional `.reduce()`. |
| `maiorDespesa` | Encontra a despesa de maior valor e retorna `undefined` para lista vazia. | Aceita diretamente | Implementada utilizando `.reduce()` e operador ternário. |
| `descricaoCategoria` | Mapeia as chaves de categoria para nomes formatados de exibição. | Aceita diretamente | Implementada utilizando estrutura de decisão `switch`. |
| `matrizCategoriaMes` | Gera matriz 4x12 acumulando os totais gastos por categoria e mês. | Corrigida | Reescrita para utilizar apenas laços `for` puros, pois a IA havia gerado com `.indexOf` e `.map`. |
| `formatarRelatorio` | Monta a string do relatório com títulos, totais gerais e maior gasto. | Aceita com ajustes | Ajustado o alinhamento das colunas utilizando `padEnd` e `padStart`. |



###  Reflexão sobre o Uso de IA
Durante o desenvolvimento do módulo, a IA apresentou uma limitação importante na função matrizCategoriaMes. A proposta inicial gerada utilizou métodos de array de alta ordem (.map() e .indexOf()), violando a restrição explícita da especificação que exigia o uso exclusivo de estruturas de repetição tradicionais (for/while). Por desconfiar que a imutabilidade do array de despesas pudesse ser violada em inserções, acrescentei um teste específico na função adicionarDespesa: expect(resultado).not.toBe(listaInicial); expect(listaInicial.length).toBe(1);. Esse teste garantiu que a função realmente retornasse uma nova referência em memória criada pelo operador spread ([...despesas, nova]), sem alterar a lista original. A experiência reforçou que, em desenvolvimento orientado por TDD, a IA serve como um excelente gerador de código inicial, mas a revisão rigorosa das regras de negócio e a criação de testes de borda continuam sendo responsabilidade do desenvolvedor.