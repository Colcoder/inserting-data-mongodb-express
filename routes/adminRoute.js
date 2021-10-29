const express = require('express');
const adminRoute = express.Router();
const {MongoClient} = require('mongodb');

const members = [{name:'collins',password:'omondi'},{name:'peter',password:'wahome'},{name:'ngure',password:'wambui'}] ;
    adminRoute.route('/')
       .get((req,res)=>{
           const url = 'mongodb://localhost:27017';
           const dbName = 'mancave';

           (async function mongo(){
               let client;
               try{
             client= await MongoClient.connect(url);
             console.log('connected to server correctly')

             const db = client.db(dbName);
             const response = await db.collection('members').insertMany(members);
             
             res.json(response);
               } 
               catch(err){
              console.log(err)
               }
               client.close();
           }())
       })
       

module.exports = adminRoute;