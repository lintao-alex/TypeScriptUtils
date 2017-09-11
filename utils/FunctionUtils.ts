namespace game{
    export class FunctionUtils{
        public static countCall(count:number, fuc:Function, obj?:any, ...args):Function{
            return ()=>{
                if(--count==0){
                    fuc.apply(obj, args);
                }
            }
        }
    }
}