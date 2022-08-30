import React from "react";
import { render, screen } from "@testing-library/react";
import Conta from "./Conta";
import { fireEvent } from '@testing-library/react/dist/pure';

describe('Componente da conta', () => {
  it('exibir o saldo da conta como valor monetário', () => {
    render(<Conta saldo={1000} />);

    const saldo = screen.getByTestId('saldo-conta');

    expect(saldo.textContent).toBe('R$ 1000');
  });

  it('Chama a função de realizar a transação, quando o botão é clicado ', () => {
    const funcaoRealizarTransacao = jest.fn();

    render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransacao} />)

    fireEvent.click(screen.getByText('Realizar operação'));

    expect(funcaoRealizarTransacao).toHaveBeenCalled();
  })

}
)