
'use strict';

class VTPicket extends HTMLElement {

    createdCallback () {
    
    }
    
    attachedCallback () {
        
    }
    
    detachedCallback () {
    
    }

    get width () {
        return this.offsetWidth;
    }

    set width (val) {
        this.style.width = val + "px";
    }

    get height () {
        return this.offsetHeight;
    }

    set height (val) {
        this.style.height = val + "px";
    }
}

document.registerElement('vt-picket', VTPicket);