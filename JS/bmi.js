function bmi(weight, height) {
    x = (weight / ((height / 100) ** 2))
    return x
}

function validAge(age) {
    if (age < 2 || age > 130) {
        alert('Enter an age from 2 to 130')
    } else {
        return age
    }
}

function validGender() {
    let genderMale = document.getElementById('genderM')
    let genderFamale = document.getElementById('genderF')
    if (!genderMale.checked && !genderFamale.checked) {
        alert('Choose the Gender')
    } else {
        if (genderMale.checked) {
            return 'M'
        } else {
            return 'F'
        }
    }
}

function validHeight(height) {
    if (height < 1) {
        alert('Choose a height greater than or equal to one')
    } else {
        return height
    }
}

function validWeight(weight) {
    if (weight < 1) {
        alert('Choose a weight greater than or equal to one')
    } else {
        return weight
    }
}

function classificationBMI(bmi) {
    if (bmi < 16) {
        return 'Severe Thinness'    
    } else if (bmi < 17) {
        return 'Moderate Thinness'
    } else if (bmi < 18.5){
        return 'Mild Thinness'
    } else if (bmi < 25){
        return 'Normal'
    } else if (bmi < 30){
        return 'Overweight'
    } else if (bmi < 35){
        return 'Obese Class I'
    } else if (bmi <= 40){
        return 'Obese Class II'
    } else if (bmi > 40){
        return 'Obese Class III'
    }
}

function calculate() {
    let age = Number(document.getElementById('age').value)
    let height = Number(document.getElementById('height').value)
    let weight = Number(document.getElementById('weight').value)
    let res = document.getElementById('result')
    
    let validatedAge = validAge(age)
    let validatedGenders = validGender()
    let validatedHeight = validHeight(height)
    let validatedWeight = validWeight(weight)
    let calculatedBmi = bmi(validatedWeight, validatedHeight)
    let classification = classificationBMI(calculatedBmi)
    
    res.style.display = 'block'
    res.innerHTML = `<p>Age: ${validatedAge}</p>`;
    res.innerHTML += `<p>Gender: ${validatedGenders}</p>`;
    res.innerHTML += `<p>Height: ${validatedHeight} cm</p>`;
    res.innerHTML += `<p>Weight: ${validatedWeight} Kg</p>`;
    res.innerHTML += `<p>BMI: ${calculatedBmi.toFixed(2)}</p>`  // toFixed Limita a 2 casas decimais
    res.innerHTML += `<p>Classification: ${classification}</p>`
}