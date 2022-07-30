SELECT numero, nome, ativo FROM banco;

CREATE OR REPLACE VIEW vw_bancos AS (
    SELECT numero, nome, ativo
    FROM banco
);

SELECT numero, nome, ativo
FROM vw_bancos;

CREATE OR REPLACE VIEW vw_bancos_2 (banco_numero, banco_nome, banco_ativo) AS (
    SELECT numero, nome, ativo
    FROM banco
);

SELECT banco_numero, banco_nome, banco_ativo
FROM vw_bancos_2;

INSERT INTO vw_bancos_2 (banco_numero, banco_nome, banco_ativo)
VALUES (51, 'Banco Boa Ideia', TRUE);

SELECT banco_numero, banco_nome, banco_ativo
FROM vw_bancos_2
WHERE banco_numero = 51;

SELECT numero, nome, ativo
FROM banco
WHERE numero = 51;

UPDATE vw_bancos_2 SET banco_ativo = FALSE WHERE banco_numero = 51;

DELETE FROM vw_bancos_2 WHERE banco_numero = 51;

-- SE ABRIR OUTRA SEÇÃO E PROCURAR POR ESSE NÃO VAI APARECER
CREATE OR REPLACE TEMPORARY VIEW vw_agencia AS (
    SELECT nome FROM agencia
);

SELECT nome FROM vw_agencia;

CREATE OR REPLACE VIEW vw_bancos_ativos AS (
    SELECT numero, nome, ativo
    FROM banco
    WHERE ativo IS true
);

INSERT INTO vw_bancos_ativos (numero, nome ,ativo)
VALUES (51, 'Banco Boa Ideia', FALSE);

CREATE OR REPLACE VIEW vw_bancos_com_a AS (
    SELECT numero, nome, ativo
    FROM vw_bancos_ativos
    WHERE nome ILIKE 'a%'
) WITH LOCAL CHECK OPTION;

SELECT numero, nome, ativo FROM vw_bancos_com_a;

INSERT INTO vw_bancos_com_a (numero, nome, ativo) VALUES (333, 'Beta Omega', true); -- Falha pois não começa com a
INSERT INTO vw_bancos_com_a (numero, nome, ativo) VALUES (333, 'Alfa Omega', true);
INSERT INTO vw_bancos_com_a (numero, nome, ativo) VALUES (331, 'Alfa Gama', false);
INSERT INTO vw_bancos_com_a (numero, nome, ativo) VALUES (332, 'Alfa Gama Beta', false);

CREATE TABLE IF NOT EXISTS funcionarios(
    id SERIAL,
    nome VARCHAR(50),
    gerente INTEGER,
    PRIMARY KEY(id),
    FOREIGN KEY (gerente) REFERENCES funcionarios(id)
);

INSERT INTO funcionarios (nome, gerente) VALUES ('Ancelmo', null);
INSERT INTO funcionarios (nome, gerente) VALUES ('Beatriz', 1);
INSERT INTO funcionarios (nome, gerente) VALUES ('Magno', 1);
INSERT INTO funcionarios (nome, gerente) VALUES ('Cremilda', 2);
INSERT INTO funcionarios (nome, gerente) VALUES ('Wagner', 4);

SELECT id, nome, gerente FROM funcionarios WHERE gerente IS null
UNION ALL
SELECT id, nome, gerente FROM funcionarios E WHERE id = 999;

CREATE OR REPLACE RECURSIVE VIEW vw_func (id, gerente, funcionarios) AS (
    SELECT id, gerente, nome
    FROM funcionarios 
    WHERE gerente IS NULL
    
    UNION ALL 
    
    SELECT funcionarios.id, funcionarios.gerente, funcionarios.nome
    FROM funcionarios
    JOIN vw_func ON vw_func.id = funcionarios.gerente
);

SELECT id, gerente, funcionarios
FROM vw_func;