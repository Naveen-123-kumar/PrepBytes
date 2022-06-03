// Write a program takes takes three angles and checks whether the triangle is acute or obtuse.

const Triangle_Check = (A,B,C) => {
    if(A,B,C < 0 || A,B,C > 180){
      return -1
    }
    else{
      if( A < 90 && B < 90 && C < 90){
      return 'acute'
    }
    else if(B>90 && (A+B+C)==180){
      return 'obtuse'
    }
    else if(C>90 && (A+B+C)==180){
      return 'obtuse'
    }
    else if(A>90 && (A+B+C)==180){
      return 'obtuse'
    }
    }   
    };
    console.log(Triangle_Check(40,50,90))
    