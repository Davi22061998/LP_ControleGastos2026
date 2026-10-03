import type { Despesa, Categoria } from './tipos.js';
import { CATEGORIAS } from './tipos.js';
import { totalPorCategoria } from './despesas.js';

export function resumoPorCategoria(despesas: Despesa[]): Record<Categoria, number> {
  throw new Error("não implementado");
}