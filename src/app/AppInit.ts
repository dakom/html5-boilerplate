

class AppInit {

    constructor() {

       this.log("Init here!");
    }

    log(...args:Array<string>) {
        let combined:string = args.join(" ");
        console.log(combined);
        document.write(combined);
    }
    
}

new AppInit();



