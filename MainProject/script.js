let _iD = 1;
let _date = new Date()
function _time() {
    alert(_date.toLocaleTimeString())
}
// time 

function _add() {
    let inp1 = document.getElementById('_inp1').value
    let inp2 = document.getElementById('_inp2').value
    let inp3 = document.getElementById('_inp3').value
    if (inp1 == '' || inp1 == ' ' || inp1 == null || inp2 == '' || inp2 == ' ' || inp2 == null || inp3 == '' || inp3 == ' ' || inp3 == null) {
        alert('Please fill the Boxes')
    } else {
        let _addedli = document.createElement('li')
        _iD++
        _addedli.setAttribute('id', 'iD' + _iD)
        _addedli.classList.add('row', 'justify-content-center', 'tabel')
        _addedli.innerHTML = `
                <h5 class="d-flex justify-content-start align-items-center col-3 bg-white border">${inp1}</h5>
                <h5 class="d-flex justify-content-start align-items-center col-3 bg-white border">${inp2}</h5>
                <h5 class="d-flex justify-content-start align-items-center col-3 bg-white border">${inp3}</h5>
                <span class="d-flex justify-content-center align-items-center col-1 bg-white border" onclick="_edit(this)">edit</span>
                <span class="d-flex justify-content-center align-items-center col-1 bg-white border" onclick="_remove(this)">remove</span>
            `

        document.getElementById('_ul').appendChild(_addedli)
        document.getElementById('_inp1').value = null
        document.getElementById('_inp2').value = null
        document.getElementById('_inp3').value = null
    }
}

// adding li 

function _remove(self) {
    if (confirm('confirm to remove')) {
        self.parentElement.remove()
    }
}

// remove button 

let trn

function _edit(self) {
    trn = self.parentElement.getAttribute('id')
    document.getElementById('_inp1').value = (self.previousElementSibling.previousElementSibling.previousElementSibling.innerText)
    document.getElementById('_inp2').value = (self.previousElementSibling.previousElementSibling.innerText)
    document.getElementById('_inp3').value = (self.previousElementSibling.innerText)

    document.getElementById('aDd').classList.add('d-none')
    document.getElementById('replAce').classList.remove('d-none')

}

function _replace() {
    document.querySelector('#' + trn + '>h5:nth-of-type(1)').innerText = (document.getElementById('_inp1').value)
    document.querySelector('#' + trn + '>h5:nth-of-type(2)').innerText = (document.getElementById('_inp2').value)
    document.querySelector('#' + trn + '>h5:nth-of-type(3)').innerText = (document.getElementById('_inp3').value)

    document.getElementById('aDd').classList.remove('d-none')
    document.getElementById('replAce').classList.add('d-none')

    document.getElementById('_inp1').value = null
    document.getElementById('_inp2').value = null
    document.getElementById('_inp3').value = null
}

// edit button 