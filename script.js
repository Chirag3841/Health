document.addEventListener('DOMContentLoaded', function() {
    const healthForm = document.getElementById('healthForm');
    const resultsSection = document.getElementById('resultsSection');
    const formSection = document.getElementById('formSection');
    const resultsContainer = document.getElementById('resultsContainer');
    const backButton = document.getElementById('backButton');
    
    healthForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const person = {
            name: document.getElementById('name').value,
            age: parseInt(document.getElementById('age').value),
            gender: document.getElementById('gender').value,
            dateOfBirth: document.getElementById('dob').value,
            fatherName: document.getElementById('fatherName').value,
            bloodPressure: parseFloat(document.getElementById('bloodPressure').value),
            sugarLevel: parseFloat(document.getElementById('sugarLevel').value),
            bmi: parseFloat(document.getElementById('bmi').value)
        };
        
        // Generate health advice
        const advice = getHealthAdvice(person);
        const medications = getMedications(person);
        
        // Display results
        displayResults(person, advice, medications);
        
        // Show results section and hide form
        formSection.classList.add('hidden');
        resultsSection.classList.remove('hidden');
    });
    
    backButton.addEventListener('click', function() {
        // Show form and hide results
        formSection.classList.remove('hidden');
        resultsSection.classList.add('hidden');
        
        // Reset form
        healthForm.reset();
    });
    
    function getHealthAdvice(person) {
        const advice = [];
        
        // Blood Pressure Advice
        if (person.bloodPressure < 90) {
            advice.push({
                category: 'Blood Pressure',
                status: 'Low',
                advice: 'Consider consulting a healthcare provider for appropriate medication or lifestyle changes.'
            });
        } else if (person.bloodPressure >= 90 && person.bloodPressure <= 120) {
            advice.push({
                category: 'Blood Pressure',
                status: 'Normal',
                advice: 'Your blood pressure is within the normal range. Maintain healthy habits to keep it that way.'
            });
        } else {
            advice.push({
                category: 'Blood Pressure',
                status: 'High',
                advice: 'Consider consulting a healthcare provider for appropriate medication or lifestyle changes.'
            });
        }
        
        // Sugar Level Advice
        if (person.sugarLevel < 70) {
            advice.push({
                category: 'Sugar Level',
                status: 'Low',
                advice: 'Consider consulting a healthcare provider for appropriate medication or lifestyle changes.'
            });
        } else if (person.sugarLevel >= 70 && person.sugarLevel <= 100) {
            advice.push({
                category: 'Sugar Level',
                status: 'Normal',
                advice: 'Your sugar level is within the normal range. Maintain healthy eating habits.'
            });
        } else {
            advice.push({
                category: 'Sugar Level',
                status: 'High',
                advice: 'Consider consulting a healthcare provider for appropriate medication or lifestyle changes.'
            });
        }
        
        // BMI Advice
        if (person.bmi < 18.5) {
            advice.push({
                category: 'BMI',
                status: 'Underweight',
                advice: 'Consider consulting a healthcare provider for dietary advice or nutritional guidance.'
            });
        } else if (person.bmi >= 18.5 && person.bmi <= 24.9) {
            advice.push({
                category: 'BMI',
                status: 'Normal',
                advice: 'Your BMI is within the healthy range. Keep up the good work!'
            });
        } else {
            advice.push({
                category: 'BMI',
                status: 'Overweight',
                advice: 'Consider consulting a healthcare provider for advice on weight management and healthy lifestyle changes.'
            });
        }
        
        return advice;
    }
    
    function getMedications(person) {
        const medications = [];
        
        // Blood Pressure Medications
        if (person.bloodPressure < 90) {
            medications.push({
                category: 'Blood Pressure',
                name: 'Midodrine',
                dosage: '2.5-10mg 3 times daily',
                price: '$25.99 for 30 tablets'
            });
        } else if (person.bloodPressure > 120) {
            medications.push({
                category: 'Blood Pressure',
                name: 'Enalapril',
                dosage: '5-40mg once daily',
                price: '$18.50 for 30 tablets'
            });
            medications.push({
                category: 'Blood Pressure',
                name: 'Amlodipine',
                dosage: '2.5-10mg once daily',
                price: '$22.75 for 30 tablets'
            });
        }
        
        // Sugar Level Medications
        if (person.sugarLevel < 70) {
            medications.push({
                category: 'Sugar Level',
                name: 'Glucagon',
                dosage: '1mg injection as needed',
                price: '$245.00 per kit'
            });
        } else if (person.sugarLevel > 100) {
            medications.push({
                category: 'Sugar Level',
                name: 'Metformin',
                dosage: '500-2000mg daily',
                price: '$4.00 for 30 tablets'
            });
            medications.push({
                category: 'Sugar Level',
                name: 'Glipizide',
                dosage: '2.5-20mg daily',
                price: '$12.99 for 30 tablets'
            });
        }
        
        // BMI Medications/Supplements
        if (person.bmi < 18.5) {
            medications.push({
                category: 'BMI',
                name: 'Nutritional Supplement',
                dosage: 'As directed',
                price: '$35.00 per container'
            });
            medications.push({
                category: 'BMI',
                name: 'Multivitamin',
                dosage: 'Once daily',
                price: '$15.99 for 60 tablets'
            });
        } else if (person.bmi > 24.9) {
            medications.push({
                category: 'BMI',
                name: 'Orlistat',
                dosage: '60-120mg with meals',
                price: '$50.00 for 30 capsules'
            });
        }
        
        return medications;
    }
    
    function displayResults(person, advice, medications) {
        // Format date of birth for display
        const dob = new Date(person.dateOfBirth);
        const formattedDob = dob.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Create person card
        const card = document.createElement('div');
        card.className = 'person-card';
        
        // Add person details
        card.innerHTML = `
            <h3 class="person-name">${person.name}</h3>
            <div class="person-details">
                <div class="detail-item"><strong>Age:</strong> ${person.age}</div>
                <div class="detail-item"><strong>Gender:</strong> ${person.gender}</div>
                <div class="detail-item"><strong>Date of Birth:</strong> ${formattedDob}</div>
                <div class="detail-item"><strong>Father's Name:</strong> ${person.fatherName}</div>
                <div class="detail-item"><strong>Blood Pressure:</strong> ${person.bloodPressure} mmHg</div>
                <div class="detail-item"><strong>Sugar Level:</strong> ${person.sugarLevel} mg/dL</div>
                <div class="detail-item"><strong>BMI:</strong> ${person.bmi} kg/m²</div>
            </div>
        `;
        
        // Add health advice
        const adviceSection = document.createElement('div');
        adviceSection.className = 'health-advice';
        adviceSection.innerHTML = '<h4>Health Advice</h4>';
        
        advice.forEach(item => {
            const adviceItem = document.createElement('div');
            adviceItem.className = 'advice-item';
            adviceItem.innerHTML = `
                <strong>${item.category}:</strong> ${item.status}<br>
                ${item.advice}
            `;
            adviceSection.appendChild(adviceItem);
        });
        
        card.appendChild(adviceSection);
        
        // Add medications if any
        if (medications.length > 0) {
            const medSection = document.createElement('div');
            medSection.className = 'medication-card';
            medSection.innerHTML = '<h4 class="medication-title">Recommended Medications</h4>';
            
            medications.forEach(med => {
                const medItem = document.createElement('div');
                medItem.className = 'medication-item';
                medItem.innerHTML = `
                    <div>
                        <strong>${med.name}</strong><br>
                        <em>${med.category}</em> - ${med.dosage}
                    </div>
                    <div>${med.price}</div>
                `;
                medSection.appendChild(medItem);
            });
            
            card.appendChild(medSection);
        }

        // Add health risk assessment
        const riskAssessment = assessHealthRisk(person);
        const riskSection = document.createElement('div');
        riskSection.className = 'health-advice';
        riskSection.innerHTML = '<h4>Health Risk Assessment</h4>';
        
        const riskItem = document.createElement('div');
        riskItem.className = 'advice-item';
        riskItem.innerHTML = `
            <strong>Overall Health Risk:</strong> ${riskAssessment.level}<br>
            ${riskAssessment.message}
        `;
        
        // Add progress bar for risk visualization
        const progressContainer = document.createElement('div');
        progressContainer.className = 'progress-container';
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        progressBar.style.width = `${riskAssessment.percentage}%`;
        progressBar.textContent = `${riskAssessment.percentage}%`;
        progressContainer.appendChild(progressBar);
        
        // Add risk level indicators
        const riskIndicator = document.createElement('div');
        riskIndicator.className = 'risk-indicator';
        riskIndicator.innerHTML = `
            <div class="risk-level low-risk">Low</div>
            <div class="risk-level medium-risk">Medium</div>
            <div class="risk-level high-risk">High</div>
        `;
        
        riskSection.appendChild(riskItem);
        riskSection.appendChild(progressContainer);
        riskSection.appendChild(riskIndicator);
        card.appendChild(riskSection);

        // Add nutrition tips
        const nutritionTips = getNutritionTips(person);
        if (nutritionTips.length > 0) {
            const nutritionSection = document.createElement('div');
            nutritionSection.className = 'nutrition-tips';
            nutritionSection.innerHTML = '<h4>Nutrition Tips</h4>';
            
            nutritionTips.forEach(tip => {
                const tipItem = document.createElement('div');
                tipItem.className = 'tip-item';
                tipItem.textContent = tip;
                nutritionSection.appendChild(tipItem);
            });
            
            card.appendChild(nutritionSection);
        }

        // Add emergency contact information for high risk cases
        if (riskAssessment.level === 'High') {
            const emergencySection = document.createElement('div');
            emergencySection.className = 'emergency-contact';
            emergencySection.innerHTML = `
                <h4>Emergency Contact</h4>
                <p>Based on your assessment, we recommend contacting a healthcare provider immediately:</p>
                <ul>
                    <li>Local Emergency: 911 or your local emergency number</li>
                    <li>National Health Helpline: 1-800-123-4567</li>
                    <li>24/7 Physician Consultation: 1-800-765-4321</li>
                </ul>
            `;
            card.appendChild(emergencySection);
        }

        // Add print button
        const actionSection = document.createElement('div');
        actionSection.style.marginTop = '1rem';
        actionSection.style.display = 'flex';
        
        const printButton = document.createElement('button');
        printButton.className = 'print-button';
        printButton.textContent = 'Print Report';
        printButton.addEventListener('click', () => window.print());
        
        actionSection.appendChild(printButton);
        card.appendChild(actionSection);

        // Clear previous results and add new card
        resultsContainer.innerHTML = '';
        resultsContainer.appendChild(card);
    }

    function assessHealthRisk(person) {
        let riskScore = 0;
        
        // Blood Pressure risk
        if (person.bloodPressure < 90) riskScore += 1;
        else if (person.bloodPressure > 120 && person.bloodPressure <= 140) riskScore += 2;
        else if (person.bloodPressure > 140) riskScore += 3;
        
        // Sugar Level risk
        if (person.sugarLevel < 70) riskScore += 1;
        else if (person.sugarLevel > 100 && person.sugarLevel <= 126) riskScore += 2;
        else if (person.sugarLevel > 126) riskScore += 3;
        
        // BMI risk
        if (person.bmi < 18.5) riskScore += 1;
        else if (person.bmi > 24.9 && person.bmi <= 30) riskScore += 2;
        else if (person.bmi > 30) riskScore += 3;
        
        // Age risk
        if (person.age > 50) riskScore += 1;
        
        // Determine risk level
        let level, message, percentage;
        if (riskScore <= 3) {
            level = 'Low';
            message = 'Your health risk is relatively low. Maintain your healthy habits and regular check-ups.';
            percentage = 25;
        } else if (riskScore <= 6) {
            level = 'Medium';
            message = 'You have moderate health risks. Consider lifestyle changes and consult a healthcare provider.';
            percentage = 50;
        } else {
            level = 'High';
            message = 'You have significant health risks. Please consult a healthcare provider as soon as possible.';
            percentage = 75;
        }
        
        return { level, message, percentage };
    }

    function getNutritionTips(person) {
        const tips = [];
        
        // Blood Pressure tips
        if (person.bloodPressure < 90) {
            tips.push('Increase salt intake slightly to help raise blood pressure');
            tips.push('Stay hydrated by drinking plenty of fluids');
        } else if (person.bloodPressure > 120) {
            tips.push('Reduce sodium intake to help lower blood pressure');
            tips.push('Increase potassium-rich foods like bananas, spinach, and avocados');
        }
        
        // Sugar Level tips
        if (person.sugarLevel < 70) {
            tips.push('Carry fast-acting carbohydrates like glucose tablets or juice boxes');
        } else if (person.sugarLevel > 100) {
            tips.push('Choose complex carbohydrates with low glycemic index');
            tips.push('Increase fiber intake to help regulate blood sugar');
        }
        
        // BMI tips
        if (person.bmi < 18.5) {
            tips.push('Consume calorie-dense foods like nuts, seeds, and healthy oils');
            tips.push('Include protein with every meal to support muscle growth');
        } else if (person.bmi > 24.9) {
            tips.push('Focus on portion control and mindful eating');
            tips.push('Increase vegetable intake to feel full with fewer calories');
        }
        
        // General health tips
        tips.push('Aim for at least 30 minutes of moderate exercise most days');
        tips.push('Stay hydrated by drinking water throughout the day');
        tips.push('Get 7-9 hours of quality sleep each night');
        
        return tips;
    }
});
