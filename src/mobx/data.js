import { observable, action } from "mobx";
class Data{
    @observable text;
    constructor(){
    this.text='33'
    this.order=[
        {
            name:'Billy',
            company:'BTK',
            address:'HUILONGGUAN',
            start_time:'2019-1-1',
            end_time:'2019-4-5',
            build:'A',
            note:'',
        }

    ]
    }
   
   book=(e)=>{
    this.text=e
   } 

}
const DataStore=new Data()
export {DataStore}