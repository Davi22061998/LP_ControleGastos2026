import type { Despesa, Categoria } from './tipos.js';
import { CATEGORIAS } from './tipos.js';
import { totalPorCategoria } from './despesas.js';

export function resumoPorCategoria(despesas: Despesa[]): Record<Categoria, number> {
  const resumo = {} as Record<Categoria, number>;

  for (const cat of CATEGORIAS) {
    resumo[cat] = totalPorCategoria(despesas, cat);
  }

  return resumo;
}