CREATE OR REPLACE FUNCTION func_somar(INTEGER, INTEGER)
RETURNS INTEGER
SECURITY DEFINER
--RETURNS NULL ON NULL INPUT
CALLED ON NULL INPUT
LANGUAGE SQL
AS $$
    SELECT COALESCE($1, 0) + COALESCE($2, 0);
$$

SELECT func_somar(1, 425);
SELECT func_somar(1, null);

SELECT COALESCE(null, 'digital', 'joao');


-------------------------------------------------------

CREATE OR REPLACE FUNCTION bancos_add(p_numero INTEGER, p_nome VARCHAR, p_ativo BOOLEAN)
RETURNS INTEGER
SECURITY INVOKER
LANGUAGE PLPGSQL
CALLED ON NULL INPUT
AS $$
    DECLARE variavel_id INTEGER;
    BEGIN
        IF p_nome IS NULL OR p_ativo IS NULL OR p_numero IS NULL THEN
            RETURN 0;
        END IF;
        
        SELECT INTO variavel_id numero
        FROM banco
        WHERE numero = p_numero;
        
        IF variavel_id IS NULL THEN
            INSERT INTO banco(numero, nome, ativo)
            VALUES (p_numero, p_nome, p_ativo);
        ELSE
            RETURN variavel_id;
        END IF;
        
        SELECT INTO variavel_id numero
        FROM banco
        WHERE numero = p_numero;
        
        RETURN variavel_id;
    END
$$;

SELECT bancos_add(5862, 'Banco Novo', FALSE);
SELECT bancos_add(5863, 'Banco Novo', FALSE);

SELECT numero, nome, ativo FROM banco WHERE numero = 5862;
SELECT numero, nome, ativo FROM banco WHERE numero = 5863;