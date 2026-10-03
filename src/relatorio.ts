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
  const resumo: Record<number, number> = {};

  // Inicializa todos os 12 meses com valor zero
  for (let m = 1; m <= 12; m++) {
    resumo[m] = 0;
  }

  // acumula os valores de cada despesa no mês correspondente
  for (const d of despesas) {
    if (resumo[d.mes] !== undefined) {
      resumo[d.mes]! += d.valor;
    }
  }

  return resumo;
}

//matriz categorias por mes

export function matrizCategoriaPorMes(despesas: Despesa[]): number[][] {
  throw new Error("não implementado");
}