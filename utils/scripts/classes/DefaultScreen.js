import createErrorElement from "../helpers/createErrorElement.js";

class DefaultScreen {
    _screen_background_color = '#000'
    constructor(screenElement) {
        this.screenElement = screenElement;
        this.screenElement.title = 'Screen area';
        this.screenElement.classList.add('flex-center-all')
        this.screenElement.innerHTML = null;        
        this.screenElement.style = `
            width: 100%;
            height: 100%;
            background-color: ${this._screen_background_color}
        `;
    }

    getScreen(){
        return this.screenElement;
    }

    integrate(element){
        return new Promise ((resolved, rejected) => {
            try {
                if(element !== null && element !== undefined){
                    element.classList.add('flex-center-all')
                    this.screenElement.appendChild(element);
                    resolved(this.screenElement);
                } else {
                    this.screenElement.innerHTML = createErrorElement('integeate()', 'Integrated element null or undefined');
                    rejected(this.screenElement);
                }
            } catch(error) {
                this.screenElement.innerHTML = createErrorElement('integrate()', error.toString())
                rejected(this.screenElement);
                throw error;
            }
        })
    }
}

export default DefaultScreen;