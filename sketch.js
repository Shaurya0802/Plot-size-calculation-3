var canvas;

var input;

var text,text2;

var button;

var total,total2,total3;

function setup(){
    canvas = createCanvas(displayWidth, displayHeight);

    input = createInput("");
    input2 = createInput("");
    text = createElement('h1');
    text2 = createElement('h4');
    text3 = createElement('h4');
    button = createButton("Calculate(in sq.ft)");
    button2 = createButton("Convert into sq.metre(Approximate)");
    button3 = createButton("Convert into sq.yard(Approximate)");
    text4 = createElement('h4');

    input3 = createInput("");
    text5 = createElement('h1');
    text6 = createElement('h4');
    text7 = createElement('h4');
    button4 = createButton("Calculate(in sq.ft)(Approximate)");
    button5 = createButton("Convert into sq.metre(Approximate)");
    button6 = createButton("Convert into sq.yard(Approximate)");

    input4 = createInput("");
    input5 = createInput("");
    text8 = createElement('h1');
    text9 = createElement("h4");
    text10 = createElement("h4");
    text11 = createElement('h4');
    button7 = createButton("Calculate(in sq.ft)");
    button8 = createButton("Convert into sq.metre(Approximate)");
    button9 = createButton("Convert into sq.yard(Approximate)");

    text12 = createElement('h1');
}

function draw(){
    background("#20B2AA");
    text12.position(displayWidth/2-150,displayHeight/2+125);
    text12.style("font-family","Berlin Sans FB");
    text12.style("textDecoration","underline");

    text12.html("Plot Size Calculation")

    text.html("Rectangular Plot");
    text.position(100,displayHeight/2+200);
    text.style("font-family","Berlin Sans FB");
    text.style("textDecoration","underline");

    text2.html("Enter Plot Width (in feet) : ");
    text2.position(150,displayHeight/2+270);
    text2.style("font-family","Comic Sans MS");
    text2.style("textDecoration","underline");

    input.position(375, displayHeight/2+290);
    input.style("font-family","Comic Sans MS");

    text3.html("Enter Plot Length (in feet) : ");
    text3.position(150,displayHeight/2+300);
    text3.style("font-family","Comic Sans MS");
    text3.style("textDecoration","underline");

    input2.position(395, displayHeight/2+320);
    input2.style("font-family","Comic Sans MS");

    button.position(displayWidth/2-300,displayHeight/2+370)
    button.style("font-family","Berlin Sans FB");
    button.style("background-color","#DAA520");
    button.style("color","#000000");
    button.style("width","200px");
    button.style("height","40px");
    button.style("font-size","15px");

    button2.position(displayWidth/2-100,displayHeight/2+370)
    button2.style("font-family","Berlin Sans FB");
    button2.style("background-color","#DAA520");
    button2.style("color","#000000");
    button2.style("width","200px");
    button2.style("height","40px");
    button2.style("font-size","15px");

    button3.position(displayWidth/2+100,displayHeight/2+370)
    button3.style("font-family","Berlin Sans FB");
    button3.style("background-color","#DAA520");
    button3.style("color","#000000");
    button3.style("width","200px");
    button3.style("height","40px");
    button3.style("font-size","15px");




    text5.html("Circular Plot");
    text5.position(100,displayHeight/2+500);
    text5.style("font-family","Berlin Sans FB");
    text5.style("textDecoration","underline");

    text6.html("Enter Plot Radius (in feet) : ");
    text6.position(150,displayHeight/2+570);
    text6.style("font-family","Comic Sans MS");
    text6.style("textDecoration","underline");

    input3.position(375, displayHeight/2+590);
    input3.style("font-family","Comic Sans MS");

    button4.position(displayWidth/2-300,displayHeight/2+640)
    button4.style("font-family","Berlin Sans FB");
    button4.style("background-color","#DAA520");
    button4.style("color","#000000");
    button4.style("width","200px");
    button4.style("height","40px");
    button4.style("font-size","15px");

    button5.position(displayWidth/2-100,displayHeight/2+640)
    button5.style("font-family","Berlin Sans FB");
    button5.style("background-color","#DAA520");
    button5.style("color","#000000");
    button5.style("width","200px");
    button5.style("height","40px");
    button5.style("font-size","15px");

    button6.position(displayWidth/2+100,displayHeight/2+640)
    button6.style("font-family","Berlin Sans FB");
    button6.style("background-color","#DAA520");
    button6.style("color","#000000");
    button6.style("width","200px");
    button6.style("height","40px");
    button6.style("font-size","15px");



    text8.html("Triangular Plot");
    text8.position(100,displayHeight/2+770);
    text8.style("font-family","Berlin Sans FB");
    text8.style("textDecoration","underline");

    text9.html("Enter Plot Base (in feet) : ");
    text9.position(150,displayHeight/2+820);
    text9.style("font-family","Comic Sans MS");
    text9.style("textDecoration","underline");

    input4.position(375, displayHeight/2+840);
    input4.style("font-family","Comic Sans MS");

    text10.html("Enter Plot Height (in feet) : ");
    text10.position(150,displayHeight/2+850);
    text10.style("font-family","Comic Sans MS");
    text10.style("textDecoration","underline");

    input5.position(395, displayHeight/2+870);
    input5.style("font-family","Comic Sans MS");

    button7.position(displayWidth/2-300,displayHeight/2+920)
    button7.style("font-family","Berlin Sans FB");
    button7.style("background-color","#DAA520");
    button7.style("color","#000000");
    button7.style("width","200px");
    button7.style("height","40px");
    button7.style("font-size","15px");

    button8.position(displayWidth/2-100,displayHeight/2+920)
    button8.style("font-family","Berlin Sans FB");
    button8.style("background-color","#DAA520");
    button8.style("color","#000000");
    button8.style("width","200px");
    button8.style("height","40px");
    button8.style("font-size","15px");

    button9.position(displayWidth/2+100,displayHeight/2+920)
    button9.style("font-family","Berlin Sans FB");
    button9.style("background-color","#DAA520");
    button9.style("color","#000000");
    button9.style("width","200px");
    button9.style("height","40px");
    button9.style("font-size","15px");

    total = input.value()*input2.value();
    total2 = Math.round(22/7*input3.value()*input3.value());
    total3 = 0.5*input4.value()*input5.value();

    button.mousePressed(()=>{
        if(input.value() && input2.value()){
            text4.html("Area of Plot is " + total + " sq.ft");
            text4.position(displayWidth/2-150,displayHeight/2+430)
            text4.style("font-family","Comic Sans MS");
            text4.style("textDecoration","underline");
        }

        button2.mousePressed(()=>{
            total = Math.round((input.value()*input2.value())/10.764);
            
            text4.html("Area of Plot is " + total + " sq.metre");
            text4.position(displayWidth/2-150,displayHeight/2+430)
            text4.style("font-family","Comic Sans MS");
            text4.style("textDecoration","underline");
        })

        button3.mousePressed(()=>{
            total = Math.round((input.value()*input2.value())/9);

            text4.html("Area of Plot is " + total + " sq.yard");
            text4.position(displayWidth/2-150,displayHeight/2+430)
            text4.style("font-family","Comic Sans MS");
            text4.style("textDecoration","underline");
        })
    })

    button4.mousePressed(()=>{
        if(input3.value()){
            text7.html("Area of Plot is " + total2 + " sq.ft");
            text7.position(displayWidth/2-150,displayHeight/2+700)
            text7.style("font-family","Comic Sans MS");
            text7.style("textDecoration","underline");
        }

        button5.mousePressed(()=>{
            total2 = Math.round(22/7*input3.value()*input3.value()/10.764);
            
            text7.html("Area of Plot is " + total2 + " sq.metre");
            text7.position(displayWidth/2-150,displayHeight/2+700)
            text7.style("font-family","Comic Sans MS");
            text7.style("textDecoration","underline");
        })

        button6.mousePressed(()=>{
            total2 = Math.round(22/7*input3.value()*input3.value()/9);

            text7.html("Area of Plot is " + total2 + " sq.yard");
            text7.position(displayWidth/2-150,displayHeight/2+700)
            text7.style("font-family","Comic Sans MS");
            text7.style("textDecoration","underline");
        })
    })

    button7.mousePressed(()=>{
        if(input4.value() && input5.value()){
            text11.html("Area of Plot is " + total3 + " sq.ft");
            text11.position(displayWidth/2-150,displayHeight/2+980)
            text11.style("font-family","Comic Sans MS");
            text11.style("textDecoration","underline");

            button8.mousePressed(()=>{
                total3 = Math.round((0.5*input4.value()*input5.value())/10.764);
                
                text11.html("Area of Plot is " + total3 + " sq.metre");
                text11.position(displayWidth/2-150,displayHeight/2+980)
                text11.style("font-family","Comic Sans MS");
                text11.style("textDecoration","underline");
            })

            button9.mousePressed(()=>{
                total3 = Math.round((0.5*input4.value()*input5.value())/9);

                text11.html("Area of Plot is " + total3 + " sq.yard");
                text11.position(displayWidth/2-150,displayHeight/2+980)
                text11.style("font-family","Comic Sans MS");
                text11.style("textDecoration","underline");
            })
        }
    })
}


    


