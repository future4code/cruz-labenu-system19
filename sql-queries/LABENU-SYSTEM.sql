-- TABELA TURMA
CREATE TABLE turma_table(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  periodo VARCHAR(50) NOT NULL,
  data_inicio DATE NOT NULL,
  data_final DATE NOT NULL,
  modulo INT NOT NULL
);

-- TABELA PASSATEMPO
CREATE TABLE passatempo_table(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL
);

-- TABELA ESPECIALIDADE
CREATE TABLE especialidade_table(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL
); 

-- TABELA ESTUDANTES
CREATE TABLE estudantes_table(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  data_nasc DATE NOT NULL,
  turma_id INT NOT NULL AUTO_INCREMENT,
  FOREIGN KEY (turma_id) REFERENCES turma_table(id)
);

-- TABELA DOCENTE
CREATE TABLE docente_table(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  data_nasc DATE NOT NULL,
  turma_id INT NOT NULL AUTO_INCREMENT,
  FOREIGN KEY (turma_id) REFERENCES turma_table(id)
);

-- TABELA ESTUDANTE_PASSATEMPO
CREATE TABLE estudante_passatempo(
  estudante_id INT NOT NULL AUTO_INCREMENT,
  passatempo_id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (estudante_id, passatempo_id), 
  FOREIGN KEY (estudante_id) REFERENCES estudantes_table(id),
  FOREIGN KEY (passatempo_id) REFERENCES passatempo_table(id)
);

-- TABLE DOCENTE ESPECIALIDADE
CREATE TABLE docente_especialidade_table(
  docente_id INT NOT NULL AUTO_INCREMENT,
  especialidade_id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (docente_id, especialidade_id),
  FOREIGN KEY (docente_id) REFERENCES docente_table(id),
  FOREIGN KEY (especialidade_id) REFERENCES especialidade_table(id)
);

