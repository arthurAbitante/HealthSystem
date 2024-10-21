const express = require('express');
const app = express();
const hospitalRoutes = require('./routes/hospital');
const doctorRoutes = require('./routes/doctor');

const cors = require('cors');
app.use(cors());

const sequelize = require('./config/database');

app.use(express.json());

app.use('/api/hospitals', hospitalRoutes);
app.use('/api/doctors', doctorRoutes);

sequelize.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.error('Failed to sync database:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});