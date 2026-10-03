import { describe, it, expect } from 'vitest';
import { resumoPorCategoria } from './relatorio.js';
import type { Despesa } from './tipos.js';

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