class CreateElement {
	constructor(tag, className, content) {
		this.tag = tag
		this.className = className
		this.content = content
	}

	createNewElement() {
		const newElement = document.createElement(this.tag)
		newElement.classList.add(this.className)
		newElement.textContent = this.content

		document.body.append(newElement)
	}
}
const el = new CreateElement('p', 'paragraph', 'Новый текс!')

el.createNewElement()
