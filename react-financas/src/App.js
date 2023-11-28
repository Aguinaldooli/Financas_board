import React, { useState, useEffect } from "react";
import CadastroForm from "./components/CadastroForm";
import ReceitasColumn from "./components/ReceitasColumn";
import DespesasColumn from "./components/DespesasColumn";
import "./App.css";

function App() {
  // Estado inicial obtido do localStorage ou um array vazio
  const [transacoes, setTransacoes] = useState(
    JSON.parse(localStorage.getItem("transacoes")) || []
  );

  // Efeito para salvar transações no localStorage sempre que houver uma alteração
  useEffect(() => {
    localStorage.setItem("transacoes", JSON.stringify(transacoes));
  }, [transacoes]);

  const handleAdicionar = (novaTransacao) => {
    setTransacoes([...transacoes, { ...novaTransacao, id: Date.now() }]);
  };

  const handleRemover = (id) => {
    setTransacoes(transacoes.filter((transacao) => transacao.id !== id));
  };

  return (
    <div className="App">
      <CadastroForm onAdicionar={handleAdicionar} />
      <ReceitasColumn
        receitas={transacoes.filter((t) => t.tipo === "receita")}
        onRemover={handleRemover}
      />
      <DespesasColumn
        despesas={transacoes.filter((t) => t.tipo === "despesa")}
        onRemover={handleRemover}
      />
    </div>
  );
}

export default App;
