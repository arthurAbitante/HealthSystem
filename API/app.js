const express = require('express');
const app = express();
const hospitalRoutes = require('./routes/hospital');
const doctorRoutes = require('./routes/doctor');
const clinicaltestrequestRoutes = require('./routes/clinicaltestrequest');
const doctorpatientRoutes = require('./routes/doctorpatient');
const examRoutes = require('./routes/exam');
const laboratoryRoutes = require('./routes/laboratory');
const outpatientclinicRoutes = require('./routes/outpatientclinic');
const patientRoutes = require('./routes/patient');
const supportstaffRoutes = require('./routes/patient');



const cors = require('cors');
app.use(cors());

const sequelize = require('./config/database');

app.use(express.json());

app.use('/api/hospitals', hospitalRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/clinicaltestrequest', clinicaltestrequestRoutes);
app.use('/api/doctorpatient', doctorpatientRoutes);
app.use('/api/exam', examRoutes);
app.use('/api/laboratory', laboratoryRoutes);
app.use('/api/outpatientclinic', outpatientclinicRoutes);
app.use('/api/patient', patientRoutes);
app.use('/api/supportstaff', supportstaffRoutes);


sequelize.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.error('Failed to sync database:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});