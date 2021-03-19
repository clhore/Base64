function encodeText(){
        if (document.getElementById("swich-1").checked == true){
            console.log(`Estado Swich 1 --> ${document.getElementById("swich-1").checked}`);
            console.log(`Texto --> |${document.getElementById("input").value}| Base64 --> |${window.btoa(`${document.getElementById("input").value}`)}|`);

            var a = window.btoa(`${document.getElementById("input").value}`);
            document.getElementById("demo").innerHTML = a;
            document.getElementById("swich-2").checked = false;
        
}else{

        if (document.getElementById("swich-2").checked == true){
            console.log(`Estado Swich 2 --> ${document.getElementById("swich-2").checked}`);
            console.log(`Texto --> |${document.getElementById("input").value}| Base64 --> |${window.atob(`${document.getElementById("input").value}`)}|`);
    
            var b = window.atob(`${document.getElementById("input").value}`);
            document.getElementById("demo").innerHTML = b;
        };  
    };
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function clearTextarea(){
            document.getElementById("demo").innerHTML = "";
            document.getElementById("input").value = "";
};


/*function colorBagrand(){
        if(document.getElementById("cambio-color-background").checked == true){
            console.log(`Color bagrand paguina --> |${document.getElementById("color-background").value}|`);
            console.log(document.getElementById("cambio-color-background").checked);

            c = document.getElementById("color-background").value;
            document.body.style.backgroundColor = c;
            document.getElementById("color-background-body").style.color = c;
        }
};*/

function colorClear(){
            console.log(`Color clear icono --> |${document.getElementById("color-clear").value}|`);

            d = document.getElementById("color-clear").value;
            document.getElementById("clear-textarea-icon").style.color = d;
            document.getElementById("color-background-clear").style.color = d;
            document.getElementById("clear-textarea-icon-reset").style.color = d;
};

function colorOptions(){
            console.log(`Color options --> |${document.getElementById("text-options").style.color}|`);
            
            f = document.getElementById("color-options").value;
            document.getElementById("text-options").style.color = f;
            document.getElementById("color-background-options").style.color = f;   
}

function colorTextarea(){
            g = document.getElementById("color-textarea").value;
            document.getElementById("color-background-textarea").style.color = g;
            document.getElementById("input").style.background = g;
            document.getElementById("demo").style.background = g;
}

function colorTextareaArticle(){
            h = document.getElementById("color-content-textarea").value;
            document.getElementById("color-background-content-textarea").style.color = h;
            document.getElementById("content-textarea-1").style.background = h;
            document.getElementById("content-textarea-2").style.background = h;
}


            ////////Reset_Color//////////

function resetColor(){
            colorBody = "#96dfac";
            colorIconClear = "#000000";
            colorTextOptions = "#000000";
            colorBackgroundTextArea = "#ffffff";
            colorBackgroundContentTextArea = "#d3f7a9";

            document.body.style.backgroundColor = colorBody;
            document.getElementById("color-background-body").style.color = colorBody;

            document.getElementById("clear-textarea-icon").style.color = colorIconClear;
            document.getElementById("color-background-clear").style.color = colorIconClear;
            document.getElementById("clear-textarea-icon-reset").style.color = colorIconClear;

            document.getElementById("text-options").style.color = colorTextOptions;
            document.getElementById("color-background-options").style.color = colorTextOptions;

            document.getElementById("color-background-textarea").style.color = colorBackgroundTextArea;
            document.getElementById("input").style.background = colorBackgroundTextArea;
            document.getElementById("demo").style.background = colorBackgroundTextArea;

            document.getElementById("color-background-content-textarea").style.color = colorBackgroundContentTextArea;
            document.getElementById("content-textarea-1").style.background = colorBackgroundContentTextArea;
            document.getElementById("content-textarea-2").style.background = colorBackgroundContentTextArea;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //Body Background IMG//
function bodyBackgroundIMG(){
    var img = document.getElementById("body-IMG").value;
    document.getElementById("body").style.backgroundImage = `url(${img})`;
}

        //Border Radius Textarea//
function borderRadiusTextarea(){
    console.log(`Value imput number --> |${document.getElementById("border-radius-textarea").value}|`);

    i = document.getElementById("border-radius-textarea").value;
    document.getElementById("input").style.borderRadius = i + "px";
    document.getElementById("demo").style.borderRadius = i + "px";
    document.getElementById("imput-radius-textarea").innerHTML = i + "px";

    console.log(`Border radius textarea --> |${document.getElementById("input").style.borderRadius}|`);
}

        //Menu mostra Mas//
function mostraMas(){
    document.getElementById("content-bottom-mas").style.display = "none";
    document.getElementById("mostrar-mas").style.display = "block";
    document.getElementById("content-bottom-menos").style.display = "block";
}
function mostraMenos(){
    document.getElementById("mostrar-mas").style.display = "none";
    document.getElementById("content-bottom-menos").style.display = "none";
    document.getElementById("content-bottom-mas").style.display = "block";
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function heightTextTop(){
            console.log(document.getElementById("input").style.height);
            document.getElementById("input").style.height = "224px";
}

function heightTextBotton(){
            console.log(document.getElementById("input").style.height);
            document.getElementById("input").style.height = "767px";
}

function heightTextTop2(){
            console.log(document.getElementById("demo").style.height);
            document.getElementById("demo").style.height = "224px";
}

function heightTextBotton2(){
            console.log(document.getElementById("demo").style.height);
            document.getElementById("demo").style.height = "767px";
}       

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
