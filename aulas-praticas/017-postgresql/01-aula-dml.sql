SELECT numero, nome, ativo FROM banco;
SELECT banco_numero, numero, nome FROM agencia;
SELECT numero, nome, email FROM cliente;
SELECT id, nome FROM tipo_transacao;
SELECT banco_numero, agencia_numero, numero, cliente_numero FROM conta_corrente;
SELECT banco_numero, agencia_numero, cliente_numero FROM cliente_transacoes;

CREATE TABLE IF NOT EXISTS teste (
    cpf VARCHAR(11) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (cpf)
);

INSERT INTO teste (cpf, nome, created_at)
    VALUES ('11111111111', 'Jose da Silva', '2019-07-01 12:00:00');

INSERT INTO teste (cpf, nome, created_at)
    VALUES ('11111111111', 'Antonio Ambuba', '2020-06-01 10:00:00') ON CONFLICT (cpf) DO NOTHING;
    
SELECT * FROM teste;

UPDATE teste SET nome = 'Pedro da Silva' WHERE cpf = '11111111111';