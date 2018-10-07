class SingetonDB{
    private static _instance: SingetonDB = null //制定一變數來放這傢伙，但是空的，一開始並沒有初始化。
    
    private constructor(){
        //哈哈 只有我能創建 別人別想
    }
    
    //跟上面的狀況不一樣式，只有在有需要用到此instance時，這instance才會被建構，這也就是Lazy Initialization延緩初始化到要取用時，反正就是你媽叫你洗澡你才去洗澡。
    public static getInstanceDB(){
        return this._instance || (this._instance = new this());
    }
    
    //此物件含有getInfo的方法，且為public。但因為這是class內的方法，必須實例化才能使用，getInstanceDB，也就達到唯一的實例了。
    public getInfo():string{
     return 'i am unique';
    }    
}

//使用看看
let onlyOneDB = SingetonDB.getInstanceDB();//取得實例物件
console.log(onlyOneDB.getInfo()); 