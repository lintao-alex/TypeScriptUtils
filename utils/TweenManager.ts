/**
 * Created by lintao_alex on 2017/8/11.
 */

namespace game {
    import Tween = egret.Tween;

    export class TweenManager {
        private _tweenList:Tween[];
        public constructor() {
            this._tweenList = [];
        }

        public get(target: any, props?: {
            loop?: boolean;
            onChange?: Function;
            onChangeObj?: any;
        }, pluginData?: any, override?: boolean):Tween{
            let out = Tween.get( target, props, pluginData, override );
            this._tweenList.push(out);
            return out;
        }

        public paueAll(){
            for( var i = this._tweenList.length - 1; i >= 0; i-- ) {
                var tween = this._tweenList[ i ];
                tween.pause()
            }
        }

        public resumeAll(){
            for( var i = this._tweenList.length - 1; i >= 0; i-- ) {
                var tween = this._tweenList[ i ];
                tween.play();
            }
        }

        static readonly instance = new TweenManager();
    }
}