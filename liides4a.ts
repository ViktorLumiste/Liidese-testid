interface Adder{
    add(nr: number):void;
    getSum():number;
}

class StoringAdder implements Adder{
    protected sum:number=0;
    protected last:number=0
    add(nr:number){
        this.last = nr
        this.sum+=nr;
    }
    getSum(): number {
        return this.sum;
    }
    getRange(){
        return Math.abs(this.sum -this.last - this.last)
    }
}

export{
    Adder,
    StoringAdder
}
