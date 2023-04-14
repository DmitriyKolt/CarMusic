const tabsHandlers = document.querySelectorAll('.tabs-trig');
const tabsFields = document.querySelectorAll('.tabs-item')

for(let tab of tabsHandlers) {
	tab.addEventListener('click', () => {
		for(let item of tabsHandlers) {
			if(item === tab) {
				item.classList.add('active')
			} else {
				item.classList.remove('active')
			}
		}
		
		for(let field of tabsFields) {
			if(field.dataset.tabsField === tab.dataset.tabsHandler) {
				field.classList.remove('hidden');
			} else {
				field.classList.add('hidden');
			}
		}
	})
}

console.log(tabsHandlers)