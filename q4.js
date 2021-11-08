let listaCidadesDengue = [
    { cidade: "São Paulo", casos: 10 },
    { cidade: "São Carlos", casos: 2 },
    { cidade: "Campinas", casos: 5 },
    { cidade: "Rio Claro", casos: 6 },
    { cidade: "Ribeirão Preto", casos: 1 },
    { cidade: "Pindamongaba", casos: 3 },
    { cidade: "Americana", casos: 2 },
    { cidade: "Embu das Artes", casos: 3 },
    { cidade: "Taboão da Serra", casos: 1 }, 
    { cidade: "Judiaí", casos: 4 } 
];

let totalDeCasos = listaCidadesDengue.reduce((total, valor) => total + valor.casos, 0);

let cidadeComMaisCasos = listaCidadesDengue.reduce(
    (prev, current) => (prev.casos > current.casos) ? prev : current
);

let mediaDosCasos = totalDeCasos / listaCidadesDengue.length;

let acimaDaMedia = listaCidadesDengue.filter(
    quantidade => quantidade.casos > mediaDosCasos
);

let porcetagemPorCidade = listaCidadesDengue.map(
    quantidade => ((quantidade.casos / totalDeCasos) * 100).toFixed(2)
);