/**
 * Created by lintao_alex on 2017/8/10.
 */
namespace game
{
    export class ArrayUtils
    {
        /**
         * 按keyList里指定的属性名排序，优先级递减
         * 每个key默认按从小到大排，若以'^'开头，刚从大到小排
         */
        public static sort(target:any, ...keyList:string[]){
            target.sort((a:any, b:any):number=>{
                let keyIndex:number = 0;
                let keyLen:number = keyList.length;
                while(keyIndex<keyLen) {
                    var out:number = ArrayUtils.oneKeySort( a, b, keyList[ keyIndex++ ] );
                    if( out != 0 ) break;
                }
                return out;
            })
        }

        private static oneKeySort(a:any, b:any, key:string):number{
            let isReverse:boolean = false;
            if(key.indexOf('^')==0){
                isReverse = true;
                key = key.slice( 1 );
            }
            let out:number = a[ key ] - b[ key ];
            if(isReverse) out = -out;
            return out
        }

        /**
         * @returns {boolean} 是否成功移除
         */
        public static remove(target:any, element:any):boolean{
            let index:number = target.indexOf(element)
            if(index<0){
                return false;
            }else{
                target.splice( index, 1 );
                return true;
            }
        }

        public static uniquePush(target:any, element:any):boolean{
            if(target.indexOf(element)<0){
                target.push( element );
                return true;
            }
            return false;
        }

        /**
         * 将source里的元素按序推入target中
         */
        public static concat(target:any, source:any){
            let sourceLen:number = source.length;
            for(let i=0; i<sourceLen; ++i){
                target.push(source[i]);
            }
        }

        public static uniqueConcat(target:any, source:any){
            let sourceLen:number = source.length;
            for(let i=0; i<sourceLen; ++i){
                ArrayUtils.uniquePush(target, source[i]);
            }
        }

        /***
         * 从目标map中取得一个满足指定键值对的元素
         * @param KVList 按[key:string, value:any]轮序指定多个条件
         */
        public static getFromMap(map:any, ...KVList:[string, any][]):any{
            var iter = map.values();
            for(var check=iter.next(); !check.done; check=iter.next()){
                var element = check.value;
                if(ArrayUtils.checkElementKv(element, KVList)){
                    return element;
                }
            }
            return null;
        }
        private static checkElementKv(element:any, KVList:[string, any][]):boolean{
            for(var i=0,len=KVList.length; i<len; i++){
                var kvItem = KVList[i];
                if(element[kvItem[0]]!=kvItem[1]){
                    return false;
                }
            }
            return true;
        }

        public static getRandomElement(list:any):any{
            let listLen = list.length;
            if(listLen==0){
                return null;
            }
            let index = Math.floor(Math.random()*listLen);
            return list[index];
        }
    }
}