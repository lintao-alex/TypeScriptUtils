/**
 * Created by lintao_alex on 2017/8/24.
 */
namespace game{
    export class PropertyRecord{
        private _record:Object;

        public constructor(){
            this._record = {};
        }

        public clear(){
            this._record = {};
        }

        public getValue(pName:string){
            return this._record[pName];
        }

        public read(source:any, ...propertys:string[]){
            for(let i = propertys.length - 1; i >= 0; i--){
                let name:string = propertys[i];
                this._record[name] = source[name];
            }
        }

        public write(target:any){
            for(let pName in this._record){
                target[pName] = this._record[pName];
            }
        }
    }
}