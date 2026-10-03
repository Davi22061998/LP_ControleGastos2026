export type Categoria = 'alimentacao' | 'transporte' | 'lazer' | 'moradia';

export const CATEGORIAS: Categoria[] = ['alimentacao', 'transporte', 'lazer', 'moradia'];

export interface Despesa {
  
  readonly id: number;
  descricao: string;
  valor: number;
  categoria: Categoria; 
  mes: number; 
  observacao?: string; 
}