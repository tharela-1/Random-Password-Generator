const slider = document.getElementById("slide")
const textval = document.getElementById("result")
slider.addEventListener("input", ()=>{
    textval.value = slider.value
})

function generate(){
    try{
        const len = Number(document.getElementById("result").value)
        const op = document.getElementById("output")
        let res = ""
        let uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let lc = "abcdefghijklmnopqrstuvwxyz"
        let dc = "0123456789"
        let splc = "!#$%^&*()-_=+[]{}|;:/<>?@"

        let val1 = document.getElementById("uc").checked
        let val2 = document.getElementById("lc").checked
        let val3 = document.getElementById("dc").checked
        let val4 = document.getElementById("splc").checked

        let selected = []
        let ac = ""
        if(val1){
            selected.push(uc)
            ac+=uc
        }
        if(val2){
            selected.push(lc)
            ac+=lc
        }
        if(val3){
            selected.push(dc)
            ac+=dc
        }
        if(val4){
            selected.push(splc)
            ac+=splc
        }
        if(selected.length===0){
            op.value = "Please choose at least one option."
            return
        }
        
        for(let i=0;i<selected.length;i++){
            let s = selected[i]
            res += s[Math.floor(Math.random()*s.length)]
        }
        while(res.length<len){
            res+=ac[Math.floor(Math.random()*ac.length)]
        }
        op.value = res
    }
    catch(err){
        alert("Error has occurred")
    }
}

async function copyFn(){
    try{
        const btn = document.getElementById("btn")
        const op = document.getElementById("output").value
        await navigator.clipboard.writeText(op)
        btn.textContent = "Copied!"
        setTimeout(()=>{
            btn.textContent = "Copy Text"
        },2500)
    }
    catch(err){
        alert("Error has occurred")
    }
}