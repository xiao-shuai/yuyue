import { observable, action } from "mobx";
class Data{
    @observable text;
    constructor(){
    this.text='33'
    }

}
const DataStore=new Data()
export {DataStore}