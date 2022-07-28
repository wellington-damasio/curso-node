-- CRIANDO TABLES
CREATE TABLE usuarios(
  nome VARCHAR(50),
  email VARCHAR(100),
  idade INT
);

-- INSERINDO DADOS
INSERT INTO usuarios(nome, email, idade) VALUES(
  "Tainara Silva",
  "tatasilva889@gmail.com",
  26
);

-- AVERIGUANDO DADOS ESPECÍFICOS
SELECT * FROM usuarios WHERE idade <= 20;

-- DELETANDO DADOS ESPECIFICOS DE UM TABLE
DELETE FROM usuarios WHERE nome = 'Tainara Silva'

-- ATUALIZANDO DADOS
UPDATE usuarios SET nome = "Lorraine Damasio" WHERE nome = "Lorraine Cristine";