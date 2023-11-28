import React from "react";
import ReceitaDespesaCard from "./ReceitaDespesaCard";

// Componente para a coluna de Despesas
const DespesasColumn = ({ despesas, onRemover }) => {
  // Cálculo do total de despesas
  const totalDespesas = despesas
    ? despesas.reduce((total, despesa) => total + parseFloat(despesa.valor), 0)
    : 0;

  // Renderização da coluna de Despesas
  return (
    <div>
      {/* Título da coluna */}
      <h2>Despesas</h2>

      {/* Exibição do total de despesas */}
      <p>Total: R$ {totalDespesas.toFixed(2)}</p>

      {/* Mapeamento e renderização dos cards de Despesas */}
      {despesas &&
        despesas.map((despesa) => (
          <ReceitaDespesaCard
            key={despesa.id}
            transacao={despesa}
            onRemover={onRemover}
          />
        ))}
    </div>
  );
};

export default DespesasColumn;
