import { describe, it, expect } from 'vitest';
import { resumoPorCategoria, resumoPorMes } from './relatorio.js';
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