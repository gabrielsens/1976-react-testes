import React from 'react';
import { render, screen } from '@testing-library/react';
import App, { calcularNovoSaldo } from './app';
import { fireEvent } from '@testing-library/react/dist/pure';
import { act } from 'react-dom/test-utils';

describe('Componente principal', () => {
  describe('Quando abro o app do banco ', () => {
    it('Mostrar o nome do banco', () => {
      render(
        <App />
      )
      expect(screen.getByText('ByteBank')).toBeInTheDocument();
    });
  
    it('Mostrar Saldo', () => {
      render(<App />)
  
      expect(screen.getByText('Saldo:')).toBeInTheDocument();
    });
  
    it('Botão é visivel', () => {
      render(<App />)
      expect(screen.getByText('Realizar operação')).toBeInTheDocument();
    });
  })

  describe('Quando eu realizo uma transação', () => {
    it('Saque, valor vai diminuir', () => {
      const novoSaldo = calcularNovoSaldo({ transacao: 'saque', valor: 50 }, 150)

      expect(novoSaldo).toBe(100);
    });

    it('Depósito, valor irá aumentar', () => {
      const valores = {
        transacao: 'deposito',
        valor: 150
      };

      const novoSaldo = calcularNovoSaldo(valores, 100);

      expect(novoSaldo).toBe(250);
    });

    it('que é um saque, a transação deve ser realizada', () => {
      const { getByText, getByTestId, getByLabelText } = render(<App />)

      const saldo = getByText('R$ 1000');
      const transacao = getByLabelText('Saque');
      const valor = getByTestId('valor');
      const botaoTransacao = getByText('Realizar operação');

      expect(saldo.textContent).toBe('R$ 1000');

      fireEvent.click(transacao, { target: { value: 'saque' }});

      fireEvent.change(valor, { target: { value: '10' }});

      fireEvent.click(botaoTransacao);
      expect(saldo.textContent).toBe('R$ 990');
      
    });

    it('que é um saque, a transação deve ser realizada', () => {
      render(<App />)

      const saldo = screen.getByText('R$ 1000');
      const transacao = screen.getByLabelText('Saque');
      const valor = screen.getByTestId('valor');
      const botaoTransacao = screen.getByText('Realizar operação');

      expect(saldo.textContent).toBe('R$ 1000');
      
      fireEvent.click(transacao, { target: { value: 'saque' }});

      fireEvent.change(valor, { target: { value: '10' }});

      fireEvent.click(botaoTransacao);
      expect(saldo.textContent).toBe('R$ 990');

    });
  })
})