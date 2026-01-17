// aftertaste.js - O Contrato de Dados Permanente
const COFFEE_DATA = {
    // Café com campos padrão
    "ow_0126_oldBourbon": {
        nome: "Bourbon Vermelho",
        produtor: "Ivan Santana",
        regiao: "Sul de Minas",
        origem: "Cabo Verde - MG",
        altitude: "1150m",
        variedade: "Bourbon Vermelho",
        processo: "Natural",
        sensorial: "Frutas cítricas, abacaxi em calda, guaraná.",
        acidez: "Acidez cítrica média",
        corpo: "Cremoso",
        pontuacao: "85.5 pontos",
        metodo_sugerido: "V60, diluição 1:15"
    },

    "ow_0126_oldCaparao": {
        nome: "Caparaó",
        produtor: "João Pavesi",
        fazenda: "Sítio Forquilha do Rio",
        regiao: "Montanhas do Caparaó",
        origem: "Pedra Menina - ES",
        altitude: "1200m",
        variedade: "Catucai Vermelho IAC-44",
        processo: "Fully Washed",
        sensorial: "Chocolate com laranja e baunilha",
        acidez: "Acidez baixa",
        corpo: "Cremoso e denso",
        pontuacao: "85 pontos",
        metodo_sugerido: "V60, diluição 1:16"
    },

    "ow_0126_autenticoCaramelaco": {
        nome: "Caramelaço do Cerrado",
        produtor: "José Ricardo",
        fazenda: "Estrela Carvalho",
        regiao: "Cerrado Mineiro",
        origem: "Coromandel - MG",
        altitude: "1000m",
        variedade: "Paraíso",
        processo: "Washed Orgânico",
        sensorial: "Caramelo",
        acidez: "Acidez média",
        corpo: "Licoroso",
        pontuacao: "86 pontos",
        metodo_sugerido: "Prensa Francesa, diluição 1:12, 8min"
    },

    "ow_0126_nanoMaragogipe": {
        nome: "Maragogipe",
        produtor: "Felipe Carvalho",
        fazenda: "Fazenda Terracota",
        regiao: "Alta Mogiana",
        origem: "Coromandel - MG",
        altitude: "1100m",
        variedade: "Maragogipe Amarelo",
        processo: "Fermentação Anaeróbica 72h",
        sensorial: "Raparadura, mel e abacaxi",
        acidez: "Acidez alta",
        corpo: "Licoroso",
        pontuacao: "86 pontos",
        metodo_sugerido: "V60, diluição 1:13"
    },
};

// Exportação simples para uso no index.html
if (typeof module !== 'undefined') {
    module.exports = COFFEE_DATA;
}
