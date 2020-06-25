
const timer = function () { 

    let now = new Date()
    let godzina = now.getHours()
    let minuta = now.getMinutes()
    let sekunda = now.getSeconds()
    let me = `${godzina}:${minuta}<sup>${sekunda}</sup>`

    setTimeout(timer, 1000)
    return new write('timer', me)

}; timer()