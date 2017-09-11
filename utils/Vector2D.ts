namespace game{
    export class Vec{
        protected _x:number;
        protected _y:number;

        public constructor(x:number, y:number){
            this._x = x;
            this._y = y;
        }

        get x():number{
            return this._x;
        }
        get y():number{
            return this._y;
        }

        get len():number{
            if(this._x==0) return Math.abs(this._y);
            else if(this._y==0) return Math.abs(this._x);
            else return Math.sqrt( this._x * this._x + this._y * this._y );
        }

        public clone():Vector2D{
            let out = ObjectPool.getObj(Vector2D)
            out.copyFrom(this);
            return out;
        }

        public equal(other:Vec):boolean{
            return this._x == other._x && this._y == other._y;
        }

        static readonly LEFT:Vec = new Vec(-1,0);
        static readonly RIGHT:Vec = new Vec(1,0);
        static readonly UP:Vec = new Vec(0,1);
        static readonly DOWN:Vec = new Vec(0,-1);
        static readonly UP_LEFT:Vec = new Vec(-1, 1);
        static readonly UP_RIGHT:Vec = new Vec(1, 1);
        static readonly DOWN_LEFT:Vec = new Vec(-1, -1);
        static readonly DOWN_RIGHT:Vec = new Vec(1, -1);
    }

    export class Vector2D extends Vec{
        public constructor(x:number=0, y:number=0){
            super(x, y);
        }

        public setTo(x:number=0, y:number=0):Vector2D{
            this._x = x;
            this._y = y;
            return this;
        }

        public copyFrom(vec:Vec):Vector2D{
            this._x = vec.x;
            this._y = vec.y;
            return this;
        }


        public normal():Vector2D{
            if(this._x==0){
                this._y = this._y>=0 ? 1 : -1;
            }else if(this._y==0){
                this._x = this._x>=0 ? 1 : -1;
            }else{
                let length: number = Math.sqrt(this._x * this._x + this._y * this._y);
                this._x /= length;
                this._y /= length;
            }
            return this;
        }

        public reverse():Vector2D{
            this._x = -this._x;
            this._y = -this._y;
            return this;
        }

        public turnLeft():Vector2D{
            let orgY = this._y;
            this._y = this._x;
            this._x = -orgY;
            return this;
        }

        public turnRight():Vector2D{
            let orgY = this._y;
            this._y = -this._x;
            this._x = orgY;
            return this;
        }

        public add(dir:Vec):Vector2D{
            this._x += dir.x;
            this._y += dir.y;
            return this;
        }

        public sub(dir:Vec):Vector2D{
            this._x -= dir.x;
            this._y -= dir.y;
            return this;
        }

        public mul(value:number):Vector2D{
            this._x *= value;
            this._y *= value;
            return this;
        }

        public div(value:number):Vector2D{
            this._x /= value;
            this._y /= value;
            return this;
        }
    }
}