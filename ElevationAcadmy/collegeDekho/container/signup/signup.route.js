import express from 'express';
import SignupController, { createUserNew, getUser } from './signup.controller';

const router = express.Router();

/**
 * @description Route to create the user
 */

router.get('/',
// getUser
// getUser
SignupController.getUser
);


router.post('/',
  
SignupController.createUser
);


router.put('/',
  
SignupController.updateUser
);

export default router;
