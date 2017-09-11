namespace game{
    export class ObjectPool{
        private static _poolMap: Map<any, ObjectPool> = new Map<any, ObjectPool>();
        public static getObj(objClass:any):any{
            return ObjectPool.getPool(objClass).getObj()
        }

        public static recycleObj(obj:Object){
            this.getPool(obj.constructor).recycleObj(obj)
        }
        private static getPool(objClass:any):ObjectPool{
            if(ObjectPool._poolMap.has(objClass)){
                return ObjectPool._poolMap.get(objClass)
            }else{
                let pool = new ObjectPool(objClass);
                ObjectPool._poolMap.set(objClass, pool);
                return pool;
            }
        }

        private _objList:Object[];
        private _objClass:any;

        public constructor(objClass){
            this._objClass = objClass;
            this._objList = [];
        }

        public getObj():any{
            if(this._objList.length>0){
                return this._objList.pop();
            }else{
                return new this._objClass();
            }
        }

        public recycleObj(obj:Object){
            if(obj instanceof this._objClass){
                if(this._objList.indexOf(obj)>=0) return;
                let clearFuc = obj['clear'] as Function;
                if(clearFuc!=null){
                    clearFuc.call(obj);
                }
                this._objList.push(obj);
            }else{
                throw new Error('类型不匹配')
            }
        }
    }

    export interface IClear
    {
        clear();
    }

}