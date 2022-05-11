export default class SuperForms{


    
    static createHTMLInputElement(oggetto, required = false){
        let input = document.createElement('input')
        
        if(oggetto.name != undefined){
            input.name = oggetto.name;
        }
        if(oggetto.placeholder != undefined){
            input.placeholder = oggetto.placeholder;
        }
        if(oggetto.id != undefined){
            input.id = oggetto.id;
        }

        if(oggetto.classes != undefined){
            input.classList.add(oggetto.classes)
        }

        if(required){
            input.required = true
        }

        return input
    }

}