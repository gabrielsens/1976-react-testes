import React from "react";
import { render } from "@testing-library/react";
import Transacao from "./Transacao";
import Transacoes from "./Transacoes";

describe('Componente de transação do extrato', () => {
  it('O Snapshot da lista deve sempre pernanecer a mesma', () => {
    const transacoes = [{
        tipo: '08/09/2020',
        valor: 'saque',
        data: '20.00',
      }, {
        tipo: '00/09/2020',
        valor: 'deposito',
        data: '50.00',
      }, {
        tipo: '10/09/2020',
        valor: 'deposito',
        data: '10.00',
      },{
        tipo: '10/09/2020',
        valor: 'saque',
        data: '10.00',
      },
    ];

    const { container } = render(<Transacoes transacoes={transacoes} />)

    expect(container.firstChild).toMatchSnapshot();
  });

  it('O snapshot do componente deve permanecer sempre o mesmo', () => {
    const { container } = render(<Transacao data="08/09/2020" tipo="saque" valor="20.00" />)

    expect(container.firstChild).toMatchSnapshot();
  });
})