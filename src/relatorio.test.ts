import { describe, it, expect } from 'vitest';
import { resumoPorCategoria, resumoPorMes, matrizCategoriaPorMes } from './relatorio.js';
import type { Despesa } from './tipos.js';

//resumo por categoria

describe('resumoPorCategoria', () => {
  const lista: Despesa[] = [
    { id: 1, descricao: 'Mercado', valor: 100, categoria: 'alimentacao', mes: 3 },
    { id: 2, descricao: 'Feira', valor: 50, categoria: 'alimentacao', mes: 4 },
    { id: 3, descricao: 'Uber', valor: 30, categoria: 'transporte', mes: 3 }
  ];

  it('deve retornar o resumo com o total de cada uma das 4 categorias', () => {
    const resumo = resumoPorCategoria(lista);

    expect(resumo).toEqual({
      alimentacao: 150,
      transporte: 30,
      lazer: 0,
      moradia: 0
    });
  });
});

// resumo por mes

describe('resumoPorMes', () => {
  const lista: Despesa[] = [
    { id: 1, descricao: 'Janela', valor: 200, categoria: 'moradia', mes: 1 },
    { id: 2, descricao: 'Mercado', valor: 100, categoria: 'alimentacao', mes: 3 },
    { id: 3, descricao: 'Feira', valor: 50, categoria: 'alimentacao', mes: 3 }
  ];

  it('deve retornar o total para todos os 12 meses do ano', () => {
    const resumo = resumoPorMes(lista);

    // Verifica meses específicos com e sem gastos
    expect(resumo[1]).toBe(200);
    expect(resumo[3]).toBe(150);
    expect(resumo[2]).toBe(0);

    // Garante que todas as chaves de 1 a 12 estão presentes no objeto
    const mesesPresentes = Object.keys(resumo).map(Number);
    expect(mesesPresentes.length).toBe(12);
  });
});

// matriz categorias por mes

describe('matrizCategoriaPorMes', () => {
  const lista: Despesa[] = [
    { id: 1, descricao: 'Mercado', valor: 100, categoria: 'alimentacao', mes: 1 },
    { id: 2, descricao: 'Uber', valor: 40, categoria: 'transporte', mes: 1 },
    { id: 3, descricao: 'Cinema', valor: 50, categoria: 'lazer', mes: 12 }
  ];

  it('deve gerar uma matriz 4x12 com os valores gastos por categoria e mes', () => {
    const matriz = matrizCategoriaPorMes(lista);

    // Deve ser uma matriz 4x12 (4 linhas = categorias, 12 colunas = meses)
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