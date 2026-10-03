
import type { Despesa, Categoria } from './tipos.js';

// adicionar despesa

export function adicionarDespesa(despesas: Despesa[], nova: Despesa): Despesa[] {
  if (nova.valor <= 0) {
    throw new Error('Valor invalido');
  }
  if (nova.mes < 1 || nova.mes > 12) {
    throw new Error('Mes invalido');
  }
  return [...despesas, nova];
}

// remover despesa

export function removerDespesa(despesas: Despesa[], id: number): Despesa[] {
  return despesas.filter((d) => d.id !== id);
}

//categoria despesas

export function despesasDaCategoria(despesas: Despesa[], categoria: Categoria): Despesa[] {
  return despesas.filter((d) => d.categoria === categoria);
}

// total geral de despesas

export function totalGeral(despesas: Despesa[]): number {
  return despesas.reduce((acc, d) => acc + d.valor, 0);
}