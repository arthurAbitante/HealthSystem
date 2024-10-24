-- Hospital Table
CREATE TABLE Hospital (
    HospitalID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100) NOT NULL,
    Endereco VARCHAR(255)
);

-- Outpatient Clinic Table
CREATE TABLE Clinica (
    ClinicaID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100),
    HospitalID INT,
    FOREIGN KEY (HospitalID) REFERENCES Hospital(HospitalID)
);

-- Doctor Table
CREATE TABLE Doutor (
    DoutorID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100) NOT NULL,
    Especialidade VARCHAR(100),
    HospitalID INT,
    FOREIGN KEY (HospitalID) REFERENCES Hospital(HospitalID)
);

-- Patient Table
CREATE TABLE Paciente (
    PacienteID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100),
    ClinicaID INT,
    FOREIGN KEY (ClinicaID) REFERENCES Clinica(ClinicaID)
);

-- Doctor-Patient Relationship Table
CREATE TABLE DoutorPaciente (
    DoutorID INT,
    PacienteID INT,
    ConsultaData DATE,
    PRIMARY KEY (DoutorID, PacienteID),
    FOREIGN KEY (DoutorID) REFERENCES Doutor(DoutorID),
    FOREIGN KEY (PacienteID) REFERENCES Paciente(PacienteID)
);

-- Laboratory Table
CREATE TABLE Laboratorio (
    LaboratorioID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100)
);

-- Clinical Test Requests Table
CREATE TABLE ClinicaTesteRequisicao (
    TesteID INT PRIMARY KEY AUTO_INCREMENT,
    HospitalID INT,
    LaboratorioID INT,
    TesteData DATE,
    TesteResultado VARCHAR(255),
    FOREIGN KEY (HospitalID) REFERENCES Hospital(HospitalID),
    FOREIGN KEY (LaboratorioID) REFERENCES Laboratorio(LaboratorioID)
);

-- Support Staff Table
CREATE TABLE EquipeApoio (
    EquipeApoioID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100),
    Cargo VARCHAR(100),
    ClinicaID INT,
    FOREIGN KEY (ClinicaID) REFERENCES Clinica(ClinicaID)
);

-- Exam Table
CREATE TABLE Exame (
    ExameID INT PRIMARY KEY AUTO_INCREMENT,
    ExameNome VARCHAR(100),
    PacienteID INT,
    ExameData DATE,
    Resultado VARCHAR(255),
    FOREIGN KEY (PacienteID) REFERENCES Paciente(PacienteID)
);