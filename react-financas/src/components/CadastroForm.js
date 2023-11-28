import React, { useState } from "react";

// Componente funcional para o formulário de cadastro
const CadastroForm = ({ onAdicionar }) => {
  // Estados locais para armazenar os valores dos campos do formulário
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("receita");
  const [pagoPor, setPagoPor] = useState("");

  // Opções de pagamento disponíveis
  const opcoesPagamento = [
    "pix",
    "cartão de crédito",
    "débito",
    "dinheiro",
    "boga",
  ];

  // Função para lidar com o evento de adicionar um novo item
  const handleAdicionar = () => {
    // Verifica se todos os campos obrigatórios estão preenchidos
    if (nome && valor && tipo && pagoPor) {
      // Chama a função de adicionar passando os valores atuais dos campos
      onAdicionar({ nome, valor, tipo, pagoPor });
      // Limpa os campos após a adição
      setNome("");
      setValor("");
      setTipo("receita");
      setPagoPor("");
    }
  };

  // Renderiza o componente do formulário de cadastro
  return (
    <div className="CadastroForm">
      <h2>Cadastro</h2>
      {/* Campo Nome */}
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </label>
      {/* Campo Valor */}
      <label>
        Valor:
        <input
          type="text"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
      </label>
      {/* Campo Tipo (Receita/Despesa) */}
      <label>
        Tipo:
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="receita">Receita</option>
          <option value="despesa">Despesa</option>
        </select>
      </label>
      {/* Campo Pago por (Seleção de opções de pagamento) */}
      <label>
        Pago por:
        <select value={pagoPor} onChange={(e) => setPagoPor(e.target.value)}>
          <option value="">Selecione</option>
          {/* Mapeia as opções de pagamento para criar as opções no select */}
          {opcoesPagamento.map((opcao) => (
            <option key={opcao} value={opcao}>
              {opcao}
            </option>
          ))}
        </select>
      </label>
      {/* Botão para adicionar o item */}
      <button onClick={handleAdicionar}>Adicionar</button>
    </div>
  );
};

export default CadastroForm;
