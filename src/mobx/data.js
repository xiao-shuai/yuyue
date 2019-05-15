import { observable, action } from "mobx";
class Data{
    @observable text;
    constructor(){
    this.text='33'
    }
   
   book=(e)=>{
    this.text=e
   } 

}
const DataStore=new Data()
export {DataStore}