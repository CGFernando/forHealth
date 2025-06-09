function doReverse() {
    let seq = document.getElementById('seq').value
    let res = document.getElementById('result')
    res.innerHTML = `${seq.split('').reverse().join('')}`
}