import { describe, it, expect } from 'vitest';
import { adicionarDespesa, removerDespesa, despesasDaCategoria, totalGeral, totalPorCategoria } from './despesas.js';
import type { Despesa, Categoria } from './tipos.js';

// testes para adicionar despesas

describe('adicionarDespesa', () => {
  const listaInicial: Despesa[] = [
    { id: 1, descricao: 'Mercado', valor: 100, categoria: 'alimentacao', mes: 3 }
  ];

  it('deve adicionar uma nova despesa retornando um novo array', () => {
    const nova: Despesa = { id: 2, descricao: 'Busao', valor: 5, categoria: 'transporte', mes: 3 };
    const resultado = adicionarDespesa(listaInicial, nova);

    expect(resultado.length).toBe(2);
    expect(resultado).not.toBe(listaInicial); 

  });

  it('deve lancar erro se o valor for menor ou igual a zero', () => {
    const invalida: Despesa = { id: 2, descricao: 'Invalida', valor: 0, categoria: 'lazer', mes: 5 };
    expect(() => adicionarDespesa(listaInicial, invalida)).toThrow('Valor invalido');
  });

  it('deve lancar erro se o mes nao estiver entre 1 e 12', () => {
    const invalida: Despesa = { id: 2, descricao: 'Invalida', valor: 50, categoria: 'lazer', mes: 13 };
    expect(() => adicionarDespesa(listaInicial, invalida)).toThrow('Mes invalido');
  });
});

// testes para remover despesas

describe('removerDespesa', () => {
  const lista: Despesa[] = [
    { id: 1, descricao: 'Mercado', valor: 100, categoria: 'alimentacao', mes: 3 },
    { id: 2, descricao: 'Aluguel', valor: 1200, categoria: 'moradia', mes: 3 }
  ];

  it('deve remover a despesa pelo id informado', () => {
    const resultado = removerDespesa(lista, 1);
    expect(resultado.length).toBe(1);
    expect(resultado[0]?.id).toBe(2);
  });

  it('deve retornar uma copia do array sem alterar se o id nao existir', () => {
    const resultado = removerDespesa(lista, 999);
    expect(resultado.length).toBe(2);
    expect(resultado).not.toBe(lista);
  });
});

// categoria de despesas

describe('despesasDaCategoria', () => {
  const lista: Despesa[] = [
    { id: 1, descricao: 'Mercado', valor: 100, categoria: 'alimentacao', mes: 3 },
    { id: 2, descricao: 'Feira', valor: 50, categoria: 'alimentacao', mes: 4 },
    { id: 3, descricao: 'Busão', valor: 20, categoria: 'transporte', mes: 3 }
  ];

  it('deve retornar apenas as despesas da categoria solicitada', () => {
    const resultado = despesasDaCategoria(lista, 'alimentacao');
    expect(resultado.length).toBe(2);
    expect(resultado.every((d) => d.categoria === 'alimentacao')).toBe(true);
  });

  it('deve retornar array vazio se nao houver despesas na categoria', () => {
    const resultado = despesasDaCategoria(lista, 'lazer');
    expect(resultado).toEqual([]);
  });
});

// total geral de despesas

describe('totalGeral', () => {
  const lista: Despesa[] = [
    { id: 1, descricao: 'Mercado', valor: 100, categoria: 'alimentacao', mes: 3 },
    { id: 2, descricao: 'Aluguel', valor: 1200, categoria: 'moradia', mes: 3 },
    { id: 3, descricao: 'Busão', valor: 50, categoria: 'transporte', mes: 4 }
  ];

  it('deve calcular a soma total dos valores de todas as despesas', () => {
    const resultado = totalGeral(lista);
    expect(resultado).toBe(1350);
  });

  it('deve retornar 0 quando o array de despesas estiver vazio', () => {
    const resultado = totalGeral([]);
    expect(resultado).toBe(0);
  });
});

// total categoria

describe('totalPorCategoria', () => {
  const lista: Despesa[] = [
    { id: 1, descricao: 'Mercado', valor: 100, categoria: 'alimentacao', mes: 3 },
    { id: 2, descricao: 'Feira', valor: 50, categoria: 'alimentacao', mes: 4 },
    { id: 3, descricao: 'Uber', valor: 30, categoria: 'transporte', mes: 3 }
  ];

  it('deve somar corretamente os valores das despesas da categoria informada', () => {
    const resultado = totalPorCategoria(lista, 'alimentacao');
    expect(resultado).toBe(150);
  });

  it('deve retornar 0 se nao houver despesas na categoria informada', () => {
    const resultado = totalPorCategoria(lista, 'lazer');
    expect(resultado).toBe(0);
  });
});