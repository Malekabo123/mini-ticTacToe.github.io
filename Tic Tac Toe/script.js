(function(){
    "use strict";

    let userChoice;
    let turnFlag = false;
    let indices = [[0,0,0],[0,0,0],[0,0,0]];
    let thisIndex;
    let clickCounter = 0;
    let flag = false;
    
    $("button").click(function(){
        $("#shape").fadeIn(500);
        
        if($(this).attr("id") === "x"){
            $("#shape").html("Your shape: X");
            userChoice = "x";
        }else if($(this).attr("id") === "o"){
            $("#shape").html("Your shape: O");
            userChoice = "o";
        }
        
        $("button").attr("disabled", "disabled");
        $("#turn").fadeIn(500);
    });
    
    $("#container a").click(function(event){
        event.preventDefault();
        
        if(userChoice === "x"){
            clickCounter++;
            
            $(this).children(":first").html("x");
            
            $(this).off("click");
            
            turnFun();
            
            $(this).children(":first").fadeIn(500);
            
            thisIndex = $("#container a").index(this);

            indexFun(thisIndex , userChoice);
            
            userChoice = "o";
            
        }else if(userChoice === "o"){
            clickCounter++;
            
            $(this).children(":first").html("o");
            
            $(this).off("click");
            
            turnFun();
            
            $(this).children(":first").fadeIn(500);
            
            thisIndex = $("#container a").index(this);
            
            indexFun(thisIndex , userChoice);
            
            userChoice = "x";
        }

        if(indices[0][0] === "x" && indices[0][1] === "x" && indices[0][2] === "x"){
            flag = true;
        }else if(indices[1][0] === "x" && indices[1][1] === "x" && indices[1][2] === "x"){
            flag = true;
        }else if(indices[2][0] === "x" && indices[2][1] === "x" && indices[2][2] === "x"){
            flag = true;
        }else if(indices[0][0] === "x" && indices[1][0] === "x" && indices[2][0] === "x"){
            flag = true;
        }else if(indices[0][1] === "x" && indices[1][1] === "x" && indices[2][1] === "x"){
            flag = true;
        }else if(indices[0][2] === "x" && indices[1][2] === "x" && indices[2][2] === "x"){
            flag = true;
        }

        else if(indices[0][0] === "o" && indices[0][1] === "o" && indices[0][2] === "o"){
            flag = true;
        }else if(indices[1][0] === "o" && indices[1][1] === "o" && indices[1][2] === "o"){
            flag = true;
        }else if(indices[2][0] === "o" && indices[2][1] === "o" && indices[2][2] === "o"){
            flag = true;
        }else if(indices[0][0] === "o" && indices[1][0] === "o" && indices[2][0] === "o"){
            flag = true;
        }else if(indices[0][1] === "o" && indices[1][1] === "o" && indices[2][1] === "o"){
            flag = true;
        }else if(indices[0][2] === "o" && indices[1][2] === "o" && indices[2][2] === "o"){
            flag = true;
        }
        
        else if(indices[0][0] === "o" && indices[1][1] === "o" && indices[2][2] === "o"){
            flag = true;
        }else if(indices[0][0] === "x" && indices[1][1] === "x" && indices[2][2] === "x"){
            flag = true;
        }else if(indices[0][2] === "o" && indices[1][1] === "o" && indices[2][0] === "o"){
            flag = true;
        }else if(indices[0][2] === "x" && indices[1][1] === "x" && indices[2][0] === "x"){
            flag = true;
        }

        function exists(arr, search) {
            return arr.some(row => row.includes(search));
        };

        if(!exists(indices,0) && !flag){
            $("#turn").hide();
            $("#container a").off("click");
            $("#retry").fadeIn(500);
        };

        if(flag){
            $("#turn").hide();
            $("#container a").off("click");
            $("#retry").fadeIn(500);
        };
    });


    function turnFun(){
        $("#turn").hide();
        if(turnFlag){
            $("#turn").html("Your turn");
        }else{
            $("#turn").html("His turn");
        }
        turnFlag = !turnFlag;
        $("#turn").fadeIn(500);
    };

    function indexFun(divIndex , shape){
        if(divIndex>=0 && divIndex<=2){
            indices[0].splice(divIndex,1,shape);
        }else if(divIndex>=3 && divIndex<=5){
            indices[1].splice(divIndex-3,1,shape);
        }else if(divIndex>=6 && divIndex<=8){
            indices[2].splice(divIndex-6,1,shape);
        }
    };
})();