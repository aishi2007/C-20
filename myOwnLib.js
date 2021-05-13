function isTouching(obj_1,obj_2){

    if (obj_1.x-obj_2.x < obj_1.width/2 + obj_2.width/2 && 
      obj_2.x-obj_1.x < obj_1.width/2 + obj_2.width/2 &&
      obj_1.y-obj_2.y < obj_1.height/2 + obj_2.height/2 &&
      obj_2.y-obj_1.y < obj_1.height/2 + obj_2.height/2) {
         
        return true
    } else {
      return false
  
    }
  
  
  }

  function bounceOff(obj_1,obj_2){

    if (obj_1.x-obj_2.x < obj_1.width/2 + obj_2.width/2 && 
      obj_2.x-obj_1.x < obj_1.width/2 + obj_2.width/2 &&
      obj_1.y-obj_2.y < obj_1.height/2 + obj_2.height/2 &&
          obj_2.y-obj_1.y < obj_1.height/2 + obj_2.height/2
      ) {
          obj_1.shapeColor='green';
          obj_2.shapeColor='green';
    
          obj_1.velocityX=(-1) *obj_1.velocityX;
          obj_2.velocityX=(-1)* obj_2.velocityX;
          obj_1.velocityY=(-1) *obj_1.velocityY;
          obj_2.velocityY=(-1)* obj_2.velocityY;
      }
    }