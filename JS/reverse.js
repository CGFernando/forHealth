function doReverse() {
    let seq = document.getElementById('seq').value
    let res = document.getElementById('result')
    res.style.display = 'block'
    res.innerHTML = `${seq.split('').reverse().join('')}`
}