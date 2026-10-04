import type { Despesa, Categoria } from './tipos.js';
import { CATEGORIAS } from './tipos.js';
import { totalGasto, maiorDespesa } from './despesas.js';

// 1. Nome de exibição usando switch 
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

// 2. Matriz 4x12 usando estritamente laços for/while 
export function matrizCategoriaMes(despesas: Despesa[]): number[][] {
  throw new Error("não implementado");
}

// 3. Formatação em texto com métodos de string 
export function formatarRelatorio(despesas: Despesa[]): string {
  throw new Error("não implementado");
}