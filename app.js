let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let previousEl = document.getElementById('previous-el')

let count = 0

function increment() {
	count += 1
	countEl.textContent = count
}

function decrement() {
	if (count === 0) {
		countEl.textContent = count
	} else {
		count -= 1
		countEl.textContent = count
	}
}

function save() {
	let saveString = ' ' + count + ' - '
	previousEl.textContent += saveString
}
