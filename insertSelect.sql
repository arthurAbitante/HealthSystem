INSERT INTO Hospital(HospitalID, Name, Address) VALUES (1, "Arthur", "Videira-SC");

INSERT INTO OutpatientClinic(ClinicID, Name, HospitalID) VALUES (1, "Arthur", 1);

INSERT INTO Doctor(DoctorID, Name, Specialty, HospitalID) VALUES (1, "Alvaro", "Cardiologia", 1);

INSERT INTO Patient(PatientID, Name, ClinicID) VALUES (1, "Arthur", 1);

INSERT INTO DoctorPatient(DoctorID, PatientID, ConsultationDate) VALUES (1, 1, DATE '2015-12-17');

INSERT INTO Laboratory(LaboratoryID, Name) VALUES (1, "Arthur");

INSERT INTO ClinicalTestRequest(TestID, HospitalID, LaboratoryID, TestDate, TestResult) VALUES (1, 1, 1, DATE '2015-12-17', "positive");

INSERT INTO SupportStaff(StaffID, Name, Role, ClinicID) VALUES (1, "Arthur", "staff", 1);

INSERT INTO Exam(ExamID, ExamName, PatientID, ExamDate, Result) VALUES (1, "Toxologico", 1, DATE '2015-12-17', "Positive");


SELECT * FROM Hospital;
SELECT * FROM OutpatientClinic;
SELECT * FROM Doctor;
SELECT * FROM Patient;
SELECT * FROM DoctorPatient;
SELECT * FROM Laboratory;
SELECT * FROM ClinicalTestRequest;
SELECT * FROM SupportStaff;
SELECT * FROM Exam;



