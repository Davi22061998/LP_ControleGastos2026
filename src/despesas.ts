
import type { Despesa } from './tipos.js';
export function adicionarDespesa(despesas: Despesa[], nova: Despesa): Despesa[] {
  if (nova.valor <= 0) {
    throw new Error('Valor invalido');
  }
  if (nova.mes < 1 || nova.mes > 12) {
    throw new Error('Mes invalido');
  }
  return [...despesas, nova];
}