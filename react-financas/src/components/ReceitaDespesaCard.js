import React from "react";

// Componente para renderizar os cards de Receitas e Despesas
const ReceitaDespesaCard = ({ transacao, onRemover }) => {
  // Renderização do card com as informações da transação
  return (
    <div className="card">
      {/* Nome da transação */}
      <p>{transacao.nome}</p>

      {/* Valor da transação */}
      <p>{transacao.valor}</p>

      {/* Tipo da transação (Receita ou Despesa) */}
      <p>{transacao.tipo}</p>

      {/* Quem pagou pela transação */}
      <p>{transacao.pagoPor}</p>

      {/* Botão para remover a transação */}
      <button onClick={() => onRemover(transacao.id)}>Remover</button>
    </div>
  );
};

export default ReceitaDespesaCard;
