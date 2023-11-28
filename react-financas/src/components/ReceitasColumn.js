import React from "react";
import ReceitaDespesaCard from "./ReceitaDespesaCard";

// Componente funcional para a coluna de Receitas
const ReceitasColumn = ({ receitas, onRemover }) => {
  // Calcula o total das receitas com base nos valores dos cards
  const totalReceitas = receitas
    ? receitas.reduce((total, receita) => total + parseFloat(receita.valor), 0)
    : 0;

  // Renderiza o componente da coluna de Receitas
  return (
    <div>
      {/* Título da coluna */}
      <h2>Receitas</h2>
      {/* Exibe o total das receitas */}
      <p>Total: R$ {totalReceitas.toFixed(2)}</p>
      {/* Mapeia e renderiza os cards de Receitas */}
      {receitas &&
        receitas.map((receita) => (
          <ReceitaDespesaCard
            key={receita.id}
            transacao={receita}
            onRemover={onRemover}
          />
        ))}
    </div>
  );
};

export default ReceitasColumn;
