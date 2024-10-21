-- Hospital Table
CREATE TABLE Hospital (
    HospitalID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100) NOT NULL,
    Address VARCHAR(255)
);

-- Outpatient Clinic Table
CREATE TABLE OutpatientClinic (
    ClinicID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100),
    HospitalID INT,
    FOREIGN KEY (HospitalID) REFERENCES Hospital(HospitalID)
);

-- Doctor Table
CREATE TABLE Doctor (
    DoctorID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100) NOT NULL,
    Specialty VARCHAR(100),
    HospitalID INT,
    FOREIGN KEY (HospitalID) REFERENCES Hospital(HospitalID)
);

-- Patient Table
CREATE TABLE Patient (
    PatientID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100),
    ClinicID INT,
    FOREIGN KEY (ClinicID) REFERENCES OutpatientClinic(ClinicID)
);

-- Doctor-Patient Relationship Table
CREATE TABLE DoctorPatient (
    DoctorID INT,
    PatientID INT,
    ConsultationDate DATE,
    PRIMARY KEY (DoctorID, PatientID),
    FOREIGN KEY (DoctorID) REFERENCES Doctor(DoctorID),
    FOREIGN KEY (PatientID) REFERENCES Patient(PatientID)
);

-- Laboratory Table
CREATE TABLE Laboratory (
    LaboratoryID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100)
);

-- Clinical Test Requests Table
CREATE TABLE ClinicalTestRequest (
    TestID INT PRIMARY KEY AUTO_INCREMENT,
    HospitalID INT,
    LaboratoryID INT,
    TestDate DATE,
    TestResult VARCHAR(255),
    FOREIGN KEY (HospitalID) REFERENCES Hospital(HospitalID),
    FOREIGN KEY (LaboratoryID) REFERENCES Laboratory(LaboratoryID)
);

-- Support Staff Table
CREATE TABLE SupportStaff (
    StaffID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100),
    Role VARCHAR(100),
    ClinicID INT,
    FOREIGN KEY (ClinicID) REFERENCES OutpatientClinic(ClinicID)
);

-- Exam Table
CREATE TABLE Exam (
    ExamID INT PRIMARY KEY AUTO_INCREMENT,
    ExamName VARCHAR(100),
    PatientID INT,
    ExamDate DATE,
    Result VARCHAR(255),
    FOREIGN KEY (PatientID) REFERENCES Patient(PatientID)
);