// 戻り値をタプル型で宣言
function calcTax(price:number):[price:number, tax: number] {
	const p = price / 1.1
    const t = price - p
    return [p, t]
}
function printTax(price:number):void {
    const [pr, tx] = calcTax(price)	// 受け取り方
    console.log(price + "の本体価格：" + pr + ".税額" + tx)
}
printTax(2750)
printTax(3080)

