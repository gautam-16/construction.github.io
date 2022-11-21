const {Sequelize,DataTypes}=require('sequelize')
const sequelize=require('../server')

const User= sequelize.define('User',{
  userid:{type:Sequelize.DataTypes.INTEGER,
  autoIncrement:true,primaryKey:true},
  name:{
    type:Sequelize.STRING,
    allowNull:false,
  },
  contact:{
  type:Sequelize.DataTypes.BIGINT,
  allowNull:false
  },
  email:{
    type:Sequelize.STRING,
    unique:true,
    validate:{isEmail:true},
    allowNull:false
  },
  password:{
    type:Sequelize.STRING,
    allowNull:false},
  address:{
    type:Sequelize.STRING,
    default:null
  },
  verification_document:{
    type:Sequelize.STRING,
    default:null
  },
  profile_image:{
    type:Sequelize.STRING,
    default:null
  }, 
  created_by:{
    type:Sequelize.INTEGER,
    allowNull:false},
  level:{
    type:Sequelize.INTEGER,
    allowNull:false
  },
  
  designation:{
    type:Sequelize.STRING,
    allowNull:false},
    metadata:{
      type:Sequelize.DataTypes.STRING
    },
    userstatus:{
      type:Sequelize.STRING,
      defaultValue:"Active"
    },
    isactive:{type:Sequelize.BOOLEAN,defaultValue:true,allowNull:false},
    updatedby:{
      type:Sequelize.DataTypes.INTEGER
    }
},{
  freezeTableName: true
});
module.exports=User;