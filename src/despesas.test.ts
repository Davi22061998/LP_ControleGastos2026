import { describe, it, expect } from 'vitest';
import {
  adicionarDespesa,
  removerDespesa,
  despesasDaCategoria,
  totalGasto,
  maiorDespesa
} from './despesas.js';
import type { Despesa } from './tipos.js';

describe('adicionarDespesa', () => {
  const listaInicial: Despesa[] = [
    { id: 1, descricao: 'Mercado', valor: 100, categoria: 'alimentacao', mes: 3 }
  ];

  it('deve adicionar uma nova despesa retornando um novo array sem alterar o original', () => {
    const nova: Despesa = { id: 2, descricao: 'Busao', valor: 5, categoria: 'transporte', mes: 3 };
    const resultado = adicionarDespesa(listaInicial, nova);

    expect(resultado.length).toBe(2);
    expect(resultado).not.toBe(listaInicial);
    expect(listaInicial.length).toBe(1); // Garante imutabilidade
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

describe('totalGasto', () => {
  const lista: Despesa[] = [
    { id: 1, descricao: 'Mercado', valor: 100, categoria: 'alimentacao', mes: 3 },
    { id: 2, descricao: 'Aluguel', valor: 1200, categoria: 'moradia', mes: 3 }
  ];

  it('deve calcular a soma de todas as despesas', () => {
    expect(totalGasto(lista)).toBe(1300);
  });

  it('deve retornar 0 para lista vazia', () => {
    expect(totalGasto([])).toBe(0);
  });
});

describe('maiorDespesa', () => {
  const lista: Despesa[] = [
    { id: 1, descricao: 'Mercado', valor: 100, categoria: 'alimentacao', mes: 3 },
    { id: 2, descricao: 'Aluguel', valor: 1200, categoria: 'moradia', mes: 3 },
    { id: 3, descricao: 'Lanche', valor: 50, categoria: 'alimentacao', mes: 3 }
  ];

  it('deve retornar a despesa com o maior valor', () => {
    const maior = maiorDespesa(lista);
    expect(maior?.id).toBe(2);
    expect(maior?.valor).toBe(1200);
  });

  it('deve retornar undefined para lista vazia', () => {
    expect(maiorDespesa([])).toBeUndefined();
  });
});