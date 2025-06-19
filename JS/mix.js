function validNum(num) {
    if (num <= 0) {
        alert('Any mandatory field has the value zero')
    } else {
        return num
    }
}

function validNum2(num) {
    if (num < 0) {
        alert('Any mandatory field has the value zero')
    } else {
        return num
    }
}

function calcPrimerProbe(concI, concF, volMix){
    volStock = ((concF * volMix) / concI)
    return volStock
}

function generate() {
    let ReactionNeeded = Number(document.getElementById('ReactionNeeded').value)
    let mix = Number(document.getElementById('mix').value)
    let primerF = Number(document.getElementById('primerF').value)
    let primerR = Number(document.getElementById('primerR').value)
    let probe = Number(document.getElementById('probe').value)
    let mg = Number(document.getElementById('mg').value)
    let passiveRef = Number(document.getElementById('passiveRef').value)
    let template = Number(document.getElementById('template').value)
    let finalVol = Number(document.getElementById('finalVol').value)
    let primerFStock = Number(document.getElementById('primerFStock').value)
    let primerRStock = Number(document.getElementById('primerRStock').value)
    let probeStock = Number(document.getElementById('probeStock').value)
    let result = document.getElementById('result')

    let ReactionNeededValidated = validNum(ReactionNeeded)
    let mixValidated = validNum(mix)
    let primerFValidated = validNum(primerF)
    let primerRValidated = validNum2(primerR)
    let probeValidated = validNum2(probe)
    let mgValidated = validNum2(mg)
    let passiveRefValidated =validNum2(passiveRef)
    let templateValidated = validNum(template)
    let finalVolValidated = validNum(finalVol)
    let primerFStockValidated = validNum(primerFStock)
    let primerRStockValidated = validNum2(primerRStock)
    let probeStockValidated = validNum2(probeStock)

    let primeFCalculated = calcPrimerProbe(primerFStockValidated, primerFValidated, finalVolValidated)
    let primeRCalculated = calcPrimerProbe(primerRStockValidated, primerRValidated, finalVolValidated)
    let probeCalculated = calcPrimerProbe(probeStockValidated, probeValidated, finalVolValidated)

    let waterCalculated = finalVolValidated - (mixValidated + primeFCalculated + primeRCalculated + probeCalculated + mgValidated + passiveRefValidated + templateValidated)

    ReactionNeeded = ''
    mix = ''
    primerF = ''
    primerR = ''
    probe = ''
    mg = ''
    passiveRef = ''
    template = ''
    finalVol = ''
    primerFStock = ''
    primerRStock = ''
    probeStock = ''

    result.style.display = 'block'
    result.innerHTML = `
    <table>
        <tr>
            <th>Reagent</th>
            <th>Vol. single reaction</th>
            <th>Vol. require reaction</th>
        </tr>
        <tr>
            <th>Master Mix</th>
            <td>${mixValidated} &#181;L</td>
            <td>${mixValidated * ReactionNeededValidated} &#181;L</td>
        </tr>
        <tr>
            <th>Forward primer</th>
            <td>${primeFCalculated} &#181;L</td>
            <td>${primeFCalculated * ReactionNeededValidated} &#181;L</td>
        </tr>
        <tr>
            <th>Reverse primer</th>
            <td>${primeRCalculated} &#181;L</td>
            <td>${primeRCalculated * ReactionNeededValidated} &#181;L</td>
        </tr>
        <tr>
            <th>Probe</th>
            <td>${probeCalculated} &#181;L</td>
            <td>${probeCalculated * ReactionNeededValidated} &#181;L</td>
        </tr>
        <tr>
            <th>Mg<sup>2+</sup></th>
            <td>${mgValidated} &#181;L</td>
            <td>${mgValidated * ReactionNeededValidated} &#181;L</td>
        </tr>
        <tr>
            <th>Passive reference</th>
            <td>${passiveRefValidated} &#181;L</td>
            <td>${passiveRefValidated * ReactionNeededValidated} &#181;L</td>
        </tr>
        <tr>
            <th>Sterile H<sub>2</sub>O</th>
            <td>${waterCalculated.toFixed(2)} &#181;L</td>
            <td>${waterCalculated.toFixed(2) * ReactionNeededValidated} &#181;L</td>
        </tr>
    </table>
    <p>Please note that all components would be at their appropriate final concentration when ${finalVolValidated - templateValidated} &#181;L of the PCR reagent cocktail is mixed with ${templateValidated} &#181;L of DNA template in each sample well.</p>`
}