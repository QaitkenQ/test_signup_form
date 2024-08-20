document.getElementById('sign-in-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const country = document.getElementById('country').value;
    const accept = document.getElementById('accept').checked;

    let isValid = true;

    // First Name validation
    if (!firstName) {
        document.getElementById('firstNameError').textContent = 'Required field';
        isValid = false;
    } else if (/[^a-zA-Z]/.test(firstName)) {
        document.getElementById('firstNameError').textContent = 'Please use only alphabetical characters';
        isValid = false;
    } else {
        document.getElementById('firstNameError').textContent = '';
    }

    // Last Name validation
    if (!lastName) {
        document.getElementById('lastNameError').textContent = 'Required field';
        isValid = false;
    } else if (/[^a-zA-Z]/.test(lastName)) {
        document.getElementById('lastNameError').textContent = 'Please use only alphabetical characters';
        isValid = false;
    } else {
        document.getElementById('lastNameError').textContent = '';
    }

    // Email validation
    if (!email) {
        document.getElementById('emailError').textContent = 'Required field';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Gender validation
    if (!gender) {
        document.getElementById('genderError').textContent = 'You must select the gender';
        isValid = false;
    } else {
        document.getElementById('genderError').textContent = '';
    }

    // Country validation
    if (!country) {
        document.getElementById('countryError').textContent = 'Required field';
        isValid = false;
    } else {
        document.getElementById('countryError').textContent = '';
    }

    // Accept validation
    if (!accept) {
        document.getElementById('acceptError').textContent = 'You must accept the terms';
        isValid = false;
    } else {
        document.getElementById('acceptError').textContent = '';
    }

    if (isValid) {
        const data = {
            firstName,
            lastName,
            email,
            gender: gender.value,
            country
        };

        const response = await fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            window.location.href = `success.html?email=${encodeURIComponent(email)}`;
        } else {
            alert('Failed to submit the form.');
        }
    }
});