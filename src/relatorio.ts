import type { Despesa, Categoria } from './tipos.js';
import { CATEGORIAS } from './tipos.js';
import { totalPorCategoria } from './despesas.js';

// resumo por categoria

export function resumoPorCategoria(despesas: Despesa[]): Record<Categoria, number> {
  const resumo = {} as Record<Categoria, number>;

  for (const cat of CATEGORIAS) {
    resumo[cat] = totalPorCategoria(despesas, cat);
  }

  return resumo;
}

// resumo mes

export function resumoPorMes(despesas: Despesa[]): Record<number, number> {
  throw new Error("não implementado");
}