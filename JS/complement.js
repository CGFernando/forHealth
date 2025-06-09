function doComplement(){
    const DNADNAcomplement = {'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G'}
    const DNARNAcomplement = {'A': 'U', 'T': 'A', 'G': 'C', 'C': 'G'}
    const RNADNAcomplement = {'A': 'T', 'U': 'A', 'G': 'C', 'C': 'G'}
    let seq = document.getElementById('seq').value.toUpperCase()
    let res = document.getElementById('result')
    let typeSeq = document.getElementsByName('type-seq')
    let typeSeqChoose = ''
    if (typeSeq[0].checked) {
        typeSeqChoose = 'DNADNA'
    } else if (typeSeq[1].checked) {
        typeSeqChoose = 'DNARNA'
    } else if (typeSeq[2].checked) {
        typeSeqChoose = 'RNADNA'
    } else {
        alert('Choose one of the options.')
    }

    if (typeSeqChoose === 'DNADNA' && /^[ACTG]+$/.test(seq)) {
    res.innerHTML = `${seq.split('').map(elem => DNADNAcomplement[elem]).join('')}`
    } else if (typeSeqChoose === 'DNARNA' && /^[ACTG]+$/.test(seq)) {
    res.innerHTML = `${seq.split('').map(elem => DNARNAcomplement[elem]).join('')}`
    } else if (typeSeqChoose === 'RNADNA' && /^[ACUG]+$/.test(seq)) {
    res.innerHTML = `${seq.split('').map(elem => RNADNAcomplement[elem]).join('')}`
    } else {
        alert('Choose the correct nucleotides according to the chosen option.')
    }
}
