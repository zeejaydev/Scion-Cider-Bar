
const items = ()=>{
    fetch('https://scionciderbar.herokuapp.com/items').then((res)=>res.json()).then(async(resp)=>{
        const cats =  await fetch('https://scionciderbar.herokuapp.com/cat').then((res)=>res.json()).then(resp=>resp.objects).catch(e=>console.log(e));
          const arrangedCats = cats.filter((items)=>items.categoryData.name !=='Merch/Misc.'?items:null).map((item) => {
              if(item.id==='DILT6SMUJB5CACU5PMFRVXBQ')return({value:item,sort:1})
              if(item.id==='PNH5WL2YZRSEAWZAAOZ7N3C2')return({value:item,sort:2})
              if(item.id==='QTYTCB4UFRVI6FDRDONE46B6')return({value:item,sort:3})
              if(item.id==='4FRYW7EGFV36224NZM6P2O2F')return({value:item,sort:4})
              if(item.id==='FWX2W6RP2DQR6NLT4OJEFEYK')return({value:item,sort:5})
              if(item.id==='IND4F6VXIWFYWFQHAO2Q7KH5')return({value:item,sort:6})
              if(item.id==='GB62Z26FH23LDR4PUYUBYZFL')return({value:item,sort:7})
              if(item.id==='HIBXHBJSI4LHQJ4ZE43OIQM5')return({value:item,sort:8})
              if(item.id==='LLPRMGLDMD25JC37P5SC3BA7')return({value:item,sort:9})
              if(item.id==='BJTCCFR7Q7LF7OHVTTHYW2HW')return({value:item,sort:10})
              if(item.id==='A7STWVI3EH4M23ZOH6DGOU43')return({value:item,sort:11})
              if(item.id==='XZURZMLETKUSM6JCUEUEP2JE')return({value:item,sort:12})
              if(item.id==='65TGKU7T5P55LQR5ZOKDGGNN')return({value:item,sort:13})
              if(item.id==='UUOOW3RTUBWDXBQB7Z7JXFWV')return({value:item,sort:14})
              if(item.id==='UXP2MUF2KULMFUU3X7KH6AVW')return({value:item,sort:15})
              if(item.id==='D56LQML6UIEZRD7PCFS4WSSI')return({value:item,sort:16})
              if(item.id==='Q2DQF7JWVUEDBO6Q6UVZAYM3')return({value:item,sort:17})
          }).sort((a,b)=>a.sort-b.sort).map((a)=>a.value)
        const html = arrangedCats.map((item)=>{       
            let notes
            let ori
            let abv 
            let notes2
            let ori2
            let abv2
            let pkg
            let money
            let variations
            const items = resp.objects.map((i)=>{               
                if(i.itemData.categoryId===item.id){
                    
                    if(i.customAttributeValues!==undefined){
                        notes2= i.customAttributeValues["Square:3ba4933d-71b7-494f-b970-80c8267c130c"].stringValue
                    }
                    if(i.customAttributeValues!==undefined){
                        ori2 = {
                            name:i.customAttributeValues['Square:745189c0-95a7-4c16-9eed-466980914ebc'].name,
                            value:i.customAttributeValues['Square:745189c0-95a7-4c16-9eed-466980914ebc'].stringValue
                        }
                    }
                    if(i.customAttributeValues!==undefined){
                        abv2 = {
                            name:i.customAttributeValues['Square:de0d1e14-95c3-4376-93a1-faf59092089c'].name,
                            value:i.customAttributeValues['Square:de0d1e14-95c3-4376-93a1-faf59092089c'].stringValue
                        }
                    }
                    
                    
                    if(i.itemData.variations.length > 1){
                      variations = [...i.itemData.variations]
                       
                    }else if(i.itemData.variations[0].itemVariationData.priceMoney!==undefined){
                        money = i.itemData.variations[0].itemVariationData.priceMoney.amount
                    }
                    if(i.itemData.variations[0].customAttributeValues!==undefined){
                        if(i.itemData.variations[0].customAttributeValues['Square:3ba4933d-71b7-494f-b970-80c8267c130c']!==undefined){
                            notes = i.itemData.variations[0].customAttributeValues['Square:3ba4933d-71b7-494f-b970-80c8267c130c'].stringValue
                        }
                        if(i.itemData.variations[0].customAttributeValues['Square:745189c0-95a7-4c16-9eed-466980914ebc']!==undefined){
                            ori = {
                                name:i.itemData.variations[0].customAttributeValues['Square:745189c0-95a7-4c16-9eed-466980914ebc'].name,
                                value:i.itemData.variations[0].customAttributeValues['Square:745189c0-95a7-4c16-9eed-466980914ebc'].stringValue
                            }
                        }
                        if(i.itemData.variations[0].customAttributeValues['Square:de0d1e14-95c3-4376-93a1-faf59092089c']!==undefined){
                            abv = {
                                name:i.itemData.variations[0].customAttributeValues['Square:de0d1e14-95c3-4376-93a1-faf59092089c'].name,
                                value:i.itemData.variations[0].customAttributeValues['Square:de0d1e14-95c3-4376-93a1-faf59092089c'].stringValue
                            }
                        }
                        if(i.itemData.variations[0].customAttributeValues['Square:06f59874-dba7-44e4-a65a-18c13428eea1']!==undefined){
                            pkg = {
                                name:i.itemData.variations[0].customAttributeValues['Square:06f59874-dba7-44e4-a65a-18c13428eea1'].name,
                                value:i.itemData.variations[0].customAttributeValues['Square:06f59874-dba7-44e4-a65a-18c13428eea1'].stringValue
                            }
                        }
                        
                       
                    }
                    return`
                    <div class='menu-content'>
                        <div class="content-name">
                            <h3 id='${i.itemData.name}'>${i.itemData.name}</h3>
                            ${notes===undefined?'':`<p class='notes'>${notes}</p>`}${notes2===undefined?'':`<p class='notes'>${notes2}</p>`}
                        </div>
                        <div class="content-cols">
                            ${ori===undefined?'':`<div class="col">${ori.value}</div>`}
                            ${ori2===undefined?'':`<div class="col">${ori2.value}</div>`}
                                ${item.id==='65TGKU7T5P55LQR5ZOKDGGNN'?'<span></span>':''}
                                ${item.id==="Q2DQF7JWVUEDBO6Q6UVZAYM3"?'<span></span>':''}
                                ${item.id==="D56LQML6UIEZRD7PCFS4WSSI"?'<span></span>':''}
                                ${item.id==="UXP2MUF2KULMFUU3X7KH6AVW"?'<span></span>':''}
                                ${item.id==="UUOOW3RTUBWDXBQB7Z7JXFWV"?'<span></span>':''}
                                ${item.id==="GB62Z26FH23LDR4PUYUBYZFL"?'<span></span>':''}
                            ${abv===undefined?'':`<div class="col">${abv.value}</div>`}
                                
                            ${abv2===undefined?'':`<div class="col">${abv2.value}</div>`}
                                
                                ${item.id==='65TGKU7T5P55LQR5ZOKDGGNN'?'<span></span>':''}
                                ${item.id==="Q2DQF7JWVUEDBO6Q6UVZAYM3"?'<span></span>':''}
                                ${item.id==="D56LQML6UIEZRD7PCFS4WSSI"?'<span></span>':''}
                                ${item.id==="UXP2MUF2KULMFUU3X7KH6AVW"?'<span></span>':''}
                                ${item.id==="UUOOW3RTUBWDXBQB7Z7JXFWV"?'<span></span>':''}
                                ${item.id==="GB62Z26FH23LDR4PUYUBYZFL"?'<span></span>':''}
                            ${pkg===undefined?'':`<div class="col">${pkg.value}</div>`}
                                ${item.id==='65TGKU7T5P55LQR5ZOKDGGNN'?'<span></span>':''}
                                ${item.id==="Q2DQF7JWVUEDBO6Q6UVZAYM3"?'<span></span>':''}
                                ${item.id==="D56LQML6UIEZRD7PCFS4WSSI"?'<span></span>':''}
                                ${item.id==="UXP2MUF2KULMFUU3X7KH6AVW"?'<span></span>':''}
                                ${item.id==="UUOOW3RTUBWDXBQB7Z7JXFWV"?'<span></span>':''}
                                ${item.id==="GB62Z26FH23LDR4PUYUBYZFL"?'<span></span>':''}
                            
                            ${money===undefined?'':`<div class="col">${parseInt(money.replace('n', ''))/100}</div>`} 
                            ${variations===undefined?'':`<div class="col">${parseInt(variations[0].itemVariationData.priceMoney.amount.replace('n', ''))/100}</div> 
                                <div class="col">${parseInt(variations[1].itemVariationData.priceMoney.amount.replace('n', ''))/100}</div>`
                            } 

                            ${variations!==undefined&&variations[2]?`<div class="col">${parseInt(variations[2].itemVariationData.priceMoney.amount.replace('n', ''))/100}</div>`:''}
                            ${variations!==undefined&&variations[3]?`<div class="col">${parseInt(variations[3].itemVariationData.priceMoney.amount.replace('n', ''))/100}</div>`:''}
                            
                        </div>
                    </div>


                    `
                }
            }).join('')
            return `
                <br>
                <br>
                <div  class="menu-header">
                    <div class="header-name">
                        <h1 id='${item.categoryData.name}'>${item.categoryData.name}</h1>
                    </div>
                    <div id="header-cols" class="header-cols">
                        ${ori===undefined?'':`<h2 class="col">${ori.name}</h2>`}
                        ${ori2===undefined?'':`<h2 class="col">${ori2.name}</h2>`}
                            ${item.id==='65TGKU7T5P55LQR5ZOKDGGNN'?'<span></span>':''}
                            ${item.id==="Q2DQF7JWVUEDBO6Q6UVZAYM3"?'<span></span>':''}
                            ${item.id==="D56LQML6UIEZRD7PCFS4WSSI"?'<span></span>':''}
                            ${item.id==="UXP2MUF2KULMFUU3X7KH6AVW"?'<span></span>':''}
                            ${item.id==="UUOOW3RTUBWDXBQB7Z7JXFWV"?'<span></span>':''}
                            ${item.id==="GB62Z26FH23LDR4PUYUBYZFL"?'<span></span>':''}
                        ${abv===undefined?'':`<h2 class="col">${abv.name}</h2>`}
                            
                            ${item.id==='65TGKU7T5P55LQR5ZOKDGGNN'?'<span></span>':''}
                            ${item.id==="Q2DQF7JWVUEDBO6Q6UVZAYM3"?'<span></span>':''}
                            ${item.id==="D56LQML6UIEZRD7PCFS4WSSI"?'<span></span>':''}
                            ${item.id==="UXP2MUF2KULMFUU3X7KH6AVW"?'<span></span>':''}
                            ${item.id==="UUOOW3RTUBWDXBQB7Z7JXFWV"?'<span></span>':''}
                            ${item.id==="GB62Z26FH23LDR4PUYUBYZFL"?'<span></span>':''}
                        ${abv2===undefined?'':`<h2 class="col">${abv2.name}</h2>`}
                        
                       
                        ${variations===undefined?'':`<h2 class="col">${variations[0].itemVariationData.name}</h2> 
                            <h2 class="col">${variations[1].itemVariationData.name}</h2>`
                        }

                        ${variations!==undefined&&variations[2]?` <h2 class="col">${variations[2].itemVariationData.name}</h2>`:''}
                        ${variations!==undefined&&variations[3]?` <h2 class="col">${variations[3].itemVariationData.name}</h2>`:''}
                        ${pkg===undefined?'':`<h2 class="col">${pkg.name}</h2>`}
                            ${item.id==='65TGKU7T5P55LQR5ZOKDGGNN'?'<span></span>':''}
                            ${item.id==="Q2DQF7JWVUEDBO6Q6UVZAYM3"?'<span></span>':''}
                            ${item.id==="D56LQML6UIEZRD7PCFS4WSSI"?'<span></span>':''}
                            ${item.id==="UXP2MUF2KULMFUU3X7KH6AVW"?'<span></span>':''}
                            ${item.id==="UUOOW3RTUBWDXBQB7Z7JXFWV"?'<span></span>':''}
                            ${item.id==="GB62Z26FH23LDR4PUYUBYZFL"?'<span></span>':''}
        
                        ${money===undefined?'':'<h2 class="col">Price</h2>'}
                    </div>
                </div>
                <hr style="height:2px;border-width:0;color:#e5383b;background-color:#e5383b" >
                
                ${items}
                
         
        `;    
        }).join("");
        const drinks = arrangedCats.map((i)=>{
            if(i.id==='D56LQML6UIEZRD7PCFS4WSSI' 
            || i.id==='UXP2MUF2KULMFUU3X7KH6AVW' 
            || i.id==='UUOOW3RTUBWDXBQB7Z7JXFWV'
            || i.id==='Q2DQF7JWVUEDBO6Q6UVZAYM3'
            ){
                null
            } else{
                return`
                <a href="#${i.categoryData.name}" >${i.categoryData.name}</a>  
                `
            } 
            
        }).join("")
        
        document.getElementById("app").insertAdjacentHTML("afterbegin", html);
        document.getElementById("dropDownContent").insertAdjacentHTML("beforeend", drinks);
        document.getElementById("loader").classList.add("none");
        document.getElementById("none").classList.remove("none"); 
        
        

    }).catch((e)=>{
        const html = `
                <div style='display:flex;justify-content:center;align-items:center;min-height:40vh'>
                    Sorry Something Went Wrong, Please Contact Website Administrator
                </div> 
            `
        console.log(e)
        document.getElementById("app").insertAdjacentHTML("afterbegin", html);
        document.getElementById("loader").classList.add("none");
        document.getElementById("none").classList.remove("none"); 
    });
}
items();

//Get the button
var mybutton = document.getElementById("floating-btn");

// When the user scrolls down 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}