document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    let months = monthDiff;
    if (dayDiff < 0) {
        months--;
    }
    if (months < 0) {
        months += 12;
    }

    let days = dayDiff;
    if (dayDiff < 0) {
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    const nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
    if (today > nextBirthday) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    const daysUntilBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));

    document.getElementById('result').textContent = `You are ${age} years, ${months} months, and ${days} days old. Your next birthday is in ${daysUntilBirthday} days.`;
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('dob').value = '';
    document.getElementById('result').textContent = '';
    location.reload();
});
