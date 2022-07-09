function Element(name){

    //
    let tagName = name;
    
    // @string
    let id = null;

    // @array
    let classes = [];
    
    // @string
    let value = null;

    // @string
    let content = null;

    return {
        render : function(){
            return document.createElement(tagName);
        },

        setTagName : function(name){
            tagName = name;
        },

        //
        getTagName : function(){
            return tagName;
        },

        //
        setValue : function(param){
            value = param;
        },

        //
        getValue : function(){
            return value;
        },

        setClass : function(className){
            classes.add(className);
        },

        getClasses : function(){
            return classes;
        },

        onClick : function(){
            return false;
        },
    }    
}

export default Element;