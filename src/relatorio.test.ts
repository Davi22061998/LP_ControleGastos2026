import { describe, it, expect } from 'vitest';
import { descricaoCategoria, matrizCategoriaMes, formatarRelatorio } from './relatorio.js';
import type { Despesa } from './tipos.js';

describe('descricaoCategoria', () => {
  it('deve retornar o nome formatado para exibição', () => {
    expect(descricaoCategoria('alimentacao')).toBe('Alimentação');
    expect(descricaoCategoria('transporte')).toBe('Transporte');
    expect(descricaoCategoria('lazer')).toBe('Lazer');
    expect(descricaoCategoria('moradia')).toBe('Moradia');
  });
});

describe('matrizCategoriaMes', () => {
  const lista: Despesa[] = [
    { id: 1, descricao: 'Mercado', valor: 100, categoria: 'alimentacao', mes: 1 },
    { id: 2, descricao: 'Uber', valor: 40, categoria: 'transporte', mes: 1 },
    { id: 3, descricao: 'Cinema', valor: 50, categoria: 'lazer', mes: 12 }
  ];

  it('deve retornar uma matriz 4x12 com os valores gastos por categoria e mes', () => {
    const matriz = matrizCategoriaMes(lista);

    expect(matriz.length).toBe(4);
    expect(matriz[0]?.length).toBe(12);

    // alimentacao (linha 0) no mes 1 (coluna 0) -> 100
    expect(matriz[0]?.[0]).toBe(100);
    // transporte (linha 1) no mes 1 (coluna 0) -> 40
    expect(matriz[1]?.[0]).toBe(40);
    // lazer (linha 2) no mes 12 (coluna 11) -> 50
    expect(matriz[2]?.[11]).toBe(50);
    // moradia (linha 3) no mes 1 (coluna 0) -> 0
    expect(matriz[3]?.[0]).toBe(0);
  });
});

describe('formatarRelatorio', () => {
  const lista: Despesa[] = [
    { id: 1, descricao: 'Mercado', valor: 100, categoria: 'alimentacao', mes: 1 },
    { id: 2, descricao: 'Aluguel', valor: 1200, categoria: 'moradia', mes: 1 }
  ];

  it('deve retornar a string do relatorio formatada com o resumo', () => {
    const texto = formatarRelatorio(lista);

    expect(texto).toContain('RELATÓRIO DE GASTOS');
    expect(texto).toContain('Alimentação');
    expect(texto).toContain('1300.00'); // Total geral
    expect(texto).toContain('Aluguel'); // Maior despesa
  });
});