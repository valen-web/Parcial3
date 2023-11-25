import "./components/export"
import { appState } from "./store/index";
import { screens } from "./types/navigation";
import { main } from "./components/export";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
       this.shadowRoot!.innerHTML = `<main-container></main-container>`

       switch (appState.screen) {
        case screens.main:
          const mainPage =  this.ownerDocument.createElement(`main-container`)
          this.shadowRoot?.appendChild(mainPage)
            break;
        case screens.paintPage:
       const paintPage = this.ownerDocument.createElement(`paint-container`)
       this.shadowRoot?.appendChild(paintPage)
        default:
            break;
       }
    }
}

customElements.define('app-container', AppContainer)