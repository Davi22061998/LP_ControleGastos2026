import type { Despesa, Categoria } from './tipos.js';
import { CATEGORIAS } from './tipos.js';
import { totalGasto, maiorDespesa, despesasDaCategoria } from './despesas.js';

export function descricaoCategoria(categoria: Categoria): string {
  switch (categoria) {
    case 'alimentacao':
      return 'Alimentação';
    case 'transporte':
      return 'Transporte';
    case 'lazer':
      return 'Lazer';
    case 'moradia':
      return 'Moradia';
    default:
      return categoria;
  }
}

export function matrizCategoriaMes(despesas: Despesa[]): number[][] {
  const matriz: number[][] = [];

  // Inicializa a matriz 4x12 zerada apenas com laços for
  for (let i = 0; i < CATEGORIAS.length; i++) {
    const linha: number[] = [];
    for (let j = 0; j < 12; j++) {
      linha.push(0);
    }
    matriz.push(linha);
  }

  // Preenche a matriz percorrendo o array de despesas
  for (let i = 0; i < despesas.length; i++) {
    const d = despesas[i]!;
    let catIndex = -1;

    for (let j = 0; j < CATEGORIAS.length; j++) {
      if (CATEGORIAS[j] === d.categoria) {
        catIndex = j;
        break;
      }
    }

    const mesIndex = d.mes - 1;
    if (catIndex !== -1 && mesIndex >= 0 && mesIndex < 12) {
      matriz[catIndex]![mesIndex]! += d.valor;
    }
  }

  return matriz;
}

export function formatarRelatorio(despesas: Despesa[]): string {
  const titulo = 'RELATÓRIO DE GASTOS DO ANO';
  let relatorio = `${titulo.toUpperCase()}\n`;
  relatorio += '='.repeat(35) + '\n';

  for (let i = 0; i < CATEGORIAS.length; i++) {
    const cat = CATEGORIAS[i]!;
    const despesasCat = despesasDaCategoria(despesas, cat);
    const totalCat = totalGasto(despesasCat);
    const nomeFormatado = descricaoCategoria(cat).padEnd(15, ' ');
    const valorFormatado = `R$ ${totalCat.toFixed(2)}`.padStart(12, ' ');

    relatorio += `${nomeFormatado}: ${valorFormatado}\n`;
  }

  relatorio += '='.repeat(35) + '\n';
  const total = totalGasto(despesas);
  const maior = maiorDespesa(despesas);

  relatorio += `TOTAL GERAL: R$ ${total.toFixed(2)}\n`;
  if (maior) {
    relatorio += `MAIOR DESPESA: ${maior.descricao} (R$ ${maior.valor.toFixed(2)})\n`;
  } else {
    relatorio += 'MAIOR DESPESA: Nenhuma registrada\n';
  }

  return relatorio;
}