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
    }
}