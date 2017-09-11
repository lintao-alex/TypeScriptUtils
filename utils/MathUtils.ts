namespace game{
    export class MathUtils{
        public static getRandomInt(top:number):number{
            return Math.floor(Math.random() * top);
        }

        public static randomRange(start:number, end:number):number{
            return start + (end - start) * Math.random();
        }

        public static limit(value:number, min:number, max:number):number{
            if(value>max){
                return max;
            }else if(value<min){
                return min;
            }
            return value
        }
    }
}