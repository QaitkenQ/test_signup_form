const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// Form submission endpoint
app.post('/submit', (req, res) => {
    const { firstName, lastName, email, gender, country } = req.body;

    // Server-side validation
    const errors = [];

    if (!firstName) {
        errors.push({ field: 'firstName', message: 'Required field' });
    } else if (/[^a-zA-Z]/.test(firstName)) {
        errors.push({ field: 'firstName', message: 'Please use only alphabetical characters' });
    }

    if (!lastName) {
        errors.push({ field: 'lastName', message: 'Required field' });
    } else if (/[^a-zA-Z]/.test(lastName)) {
        errors.push({ field: 'lastName', message: 'Please use only alphabetical characters' });
    }

    if (!email) {
        errors.push({ field: 'email', message: 'Required field' });
    }

    if (!gender) {
        errors.push({ field: 'gender', message: 'Required field' });
    }

    if (!country) {
        errors.push({ field: 'country', message: 'Required field' });
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    
    } else {
        res.status(200).send('Form submitted successfully!');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
