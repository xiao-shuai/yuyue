import { observable, action } from "mobx";
class Data{
    @observable text;
    @observable order;
    constructor(){
    this.text='33'
    this.order=[
        {
            name:'Billy',
            company:'BTK',
            address:'HUILONGGUAN',
            phone:'18765345678',
            start_time:'2019-4-6',
            end_time:'2019-4-7',
            build:'A',
            note:'',
        },

    ]
    }
   
   book=(e)=>{
    this.text=e
   } 
   save_order=(e)=>{
    this.order=e
   } 

}
const DataStore=new Data()
export {DataStore}