import  * as  create  from './Create';
import  * as  getAll from  './GetAll';
import  * as  getByid from  './GetById';
import  * as  UpadeteByid from './UpDateByid';
import  * as  deleteByid from './DeleteByid';



export const CidadeControllers = {
  ...create,
  ...getAll,
  ...getByid,
  ...UpadeteByid,
  ...deleteByid,
};
