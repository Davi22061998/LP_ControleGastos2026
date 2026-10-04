import type { Despesa } from './tipos.js';
import { adicionarDespesa, removerDespesa, despesasDaCategoria } from './despesas.js';
import { formatarRelatorio } from './relatorio.js';

console.log('--- SISTEMA DE CONTROLE DE GASTOS PESSOAIS ---\n');

// 1. Criando lista inicial de despesas
let minhasDespesas: Despesa[] = [
  { id: 1, descricao: 'Mercado', valor: 250.50, categoria: 'alimentacao', mes: 1 },
  { id: 2, descricao: 'Passagem de Ônibus', valor: 45.00, categoria: 'transporte', mes: 1 },
  { id: 3, descricao: 'Cinema', valor: 60.00, categoria: 'lazer', mes: 2 },
  { id: 4, descricao: 'Aluguel', valor: 1200.00, categoria: 'moradia', mes: 1 },
];

console.log(`Despesas iniciais carregadas: ${minhasDespesas.length}`);

// 2. Adicionando uma nova despesa (imutável)
const novaDespesa: Despesa = {
  id: 5,
  descricao: 'Restaurante',
  valor: 120.00,
  categoria: 'alimentacao',
  mes: 2,
};

minhasDespesas = adicionarDespesa(minhasDespesas, novaDespesa);
console.log('Nova despesa "Restaurante" adicionada com sucesso.');

// 3. Removendo uma despesa pelo ID
minhasDespesas = removerDespesa(minhasDespesas, 3); // Remove o Cinema (id 3)
console.log('Despesa ID 3 (Cinema) removida com sucesso.\n');

// 4. Filtrando despesas de alimentação
const alimentacao = despesasDaCategoria(minhasDespesas, 'alimentacao');
console.log(`Total de itens em Alimentação: ${alimentacao.length}\n`);

// 5. Exibindo o relatório formatado final
console.log(formatarRelatorio(minhasDespesas));