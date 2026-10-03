
import type { Despesa } from './tipos.js';

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