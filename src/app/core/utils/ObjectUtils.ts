export class ValidationOptions {
    public undefinedAllowed:boolean = false;
    public nullAllowed:boolean = false;
    public stringEmptyAllowed:boolean = false;
    public numberZeroAllowed:boolean = true;
    public numberPositiveAllowed:boolean = true;
    public numberNegativeAllowed:boolean = true;
    public booleanFalseAllowed:boolean = true;
    public arrayEmptyAllowed:boolean = false;
    public objectEmptyAllowed:boolean = false;
}

export class ObjectUtils {

    static Validate(obj:any, options?:ValidationOptions): boolean {
        if(options === undefined) {
            options = new ValidationOptions();
        }

        if(obj === undefined) {
            return options.undefinedAllowed;
        }
        
        if(obj === null) {
            return options.nullAllowed;
        }

        if(typeof obj === "number") {
            if(obj === 0) {
                return options.numberZeroAllowed;
            }
            if(obj < 0) {
                return options.numberNegativeAllowed;
            }
            if(obj > 0) {
                return options.numberPositiveAllowed;
            }
        }

        if(typeof obj === "string") {
            return obj === "" ? options.stringEmptyAllowed : true;
        }

        if(typeof obj === "boolean") {
            return obj === false ? options.booleanFalseAllowed : true;
        }

        if(obj instanceof Array) {
            if(obj.length == 0 && !options.objectEmptyAllowed) {
                return false;
            }
            for(let val of obj) {
                if(!this.Validate(val, options)) {
                    return false;
                }
            }
            return true;
        }
        
        if(obj instanceof Object) {
            let keys:string[] = Object.keys(obj);

            if(keys.length == 0 && !options.arrayEmptyAllowed) {
                
                return false;
            }

            for(let key of keys) {
                if(!this.Validate(obj[key], options)) {
                    return false;
                }
            }

            return true;
        }

        return false;
    }

}