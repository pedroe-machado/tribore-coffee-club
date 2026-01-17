// aftertaste.js - O Contrato de Dados Permanente
const COFFEE_DATA = {
    // Café com campos padrão
    "brazil-001": {
        nome: "Fazenda Santa Maria",
        origem: "Sul de Minas",
        variedade: "Catuaí Amarelo",
        processo: "Natural",
        torra: "Média",
        notas: "Caramelo e Nozes"
    },

    // Café com campos extras (Altitude e Pontuação) - Aparecerão sozinhos na UI
    "ethiopia-002": {
        nome: "Yirgacheffe Heritage",
        origem: "Etiópia",
        altitude: "2100m",
        pontuacao: "88 pontos SCA",
        notas: "Floral, Limão e Chá Preto",
        safra: "2024/2025"
    },

    // Café com campo de link ou curiosidade
    "special-003": {
        nome: "Reserva do Produtor",
        variedade: "Geisha",
        metodo_sugerido: "Hario V60",
        curiosidade: "Vencedor do prêmio regional de sustentabilidade",
        produtor: "João da Silva"
    }
};

// Exportação simples para uso no index.html
if (typeof module !== 'undefined') {
    module.exports = COFFEE_DATA;
}