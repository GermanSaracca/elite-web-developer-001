(() => {
    let students;
    const aNumber : number = 20
    
    students = students ?? 0
    if(students < aNumber) {
        console.log('Estamos en problemas')
    } else {
        console.log('El codigo se ejecuta')
    }

    let height: number = 1.802;
    students = Number('55') // 55
    students = Number('20A') // NaN
    // typeof students
    if(Number.isNaN(students)) {
        students = 0;
    }

    let val: unknown = 30

    if(typeof val === 'number') {
        console.log('val es un número y puedo redondearlo: ', val.toFixed(2))
    }
    if(typeof val === 'string') {
        console.log('val es un string', val.toLowerCase())
    }

})()