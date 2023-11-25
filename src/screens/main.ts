import { answers } from "../firebase";

export class main extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
       if (this.shadowRoot) {

        this.shadowRoot.innerHTML = `<link rel="stylesheet" href="../src/screens/main.css">`


        const div = this.ownerDocument.createElement("div")
        div.className = `divInputs`

        const pName = this.ownerDocument.createElement("p")
        pName.textContent = `Your name`

        const name = this.ownerDocument.createElement("input")
        name.placeholder = `Your Name`

        const pColor = this.ownerDocument.createElement("p")
        pColor.textContent = `Your favorite color`
        const color = this.ownerDocument.createElement("input")
        color.placeholder = `Your Favorite color`

        const pLetra = this.ownerDocument.createElement("p")
        pLetra.textContent = `Your favorite letter`
        const letra = this.ownerDocument.createElement("input")
        letra.placeholder = `Your Favorite letter`

        const btn = this.ownerDocument.createElement("button")
        btn.textContent = `continue`

        btn.addEventListener( "click", () => {
            let saveName = localStorage.setItemetItem(name.value);
            saveName;
            let saveColor = localStorage.setItemetItem(color.value);
            saveColor;
            let saveLetra = localStorage.setItemetItem(letra.value);
            console.log("se guardo exitosamente");
            saveLetra;

            answers(name.value, color.value, letra.value)
        })

        div.appendChild(pName)
        div.appendChild(name)
        div.appendChild(pColor)
        div.appendChild(color)
        div.appendChild(pLetra)
        div.appendChild(letra)
        div.appendChild(btn)
        this.shadowRoot.appendChild(div)
       }
    }
}

customElements.define('main-container', main)