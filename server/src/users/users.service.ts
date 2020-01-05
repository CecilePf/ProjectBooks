import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';
var jwt = require('jwt-simple');

@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  createTokenForUser(user) {
    return jwt.encode(user.id, 'test1234');
  }

  validate = function(req, res) {
    var self = this;
    this.userModel.findOne({ username : req.username}, function(err, result) {
      if (result) {
        if (result.password == req.password) {
          res.json({token : self.createTokenForUser(result), id : result.id});
        } else {
          res.status(403).send({ErrorMsg : 'Mauvais mot de passe.'});
        }        
      } else {
        res.status(403).send({ErrorMsg : 'Utilisateur non trouvé.'});
      }        
    });
  }

  create = function(req, res) {
    const createUser = new this.userModel(req);
    createUser.save(function(err, result ) {
      if(err) {
        console.log(err);
        res.status(403).send({ErrorCode : err.code});
      }
      if (result) {
        res.send({'user ok' : req.body})
      }      
    });
  }

}
