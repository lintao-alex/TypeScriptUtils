/**
 * Created by lintao_alex on 2017/9/7.
 */
namespace game{
    export class ObjectUtils{
        static copyProperty(target:any, source:any){
            for(var key in source){
                target[key] = source[key];
            }
        }
        
        /**
         * 若to对象某子字段为空，且对应数据的构造函数有必填的参数，本方法会报错
         * @param force 给to加上没有的字段
         * @param clean 清理from上没有而to上有的字段
         */
        static deepCopy(to: any, from: any, force = true, clean = true){
            let keys = Object.keys(from);
            for (let i = keys.length - 1; i >= 0; i--) {
                let key = keys[i];
                let fValue = from[key];
                if(this.isBaseValue(fValue)){
                    if(force || to.hasOwnProperty(key)) to[key] = fValue;
                }else{
                    if(to.hasOwnProperty(key)){
                        this.deepCopy(to[key], fValue)
                    }else if(force){
                        to[key] = new fValue.constructor();
                        this.deepCopy(to[key], fValue);
                    }
                }
            }
            if(clean){
                let toKeys = Object.keys(to);
                for (let i = toKeys.length - 1; i >= 0; i--) {
                    let toKey = toKeys[i];
                    if(keys.indexOf(toKey)<0){
                        delete to[toKey];
                    }
                }
            }
        }
    }
}