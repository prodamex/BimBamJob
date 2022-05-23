import React from 'react'

 const Mower =()=> {
  
    function Mower(id, x,y,o,t) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.o = o;
        this.suite = t;
    }
    
    const mower1 = new Mower(1,4,4,2,"LFRRFFLFRFF");
    const mower2 = new Mower(2,2,2,0,"FFRLLRFRLF");
    
    const mowers = [mower1, mower2];
    const orientation = ['N', 'E', 'S', 'W'];
    
    
    for (let mower of mowers) {
        
        for (const i of mower.suite) {
            switch(i){
                case "L":
                    // turn de -90° 
                    mower.o--;
                    if(mower.o == -1) mower.o = 3;
                    break;
                case "R":
                    // turn 90°
                    mower.o++;
                    if(mower.o == 4) mower.o = 0;
                    break;
                case "F":
                    switch(mower.o){
                        case 0:
                            mower.y++;
                            break;
                        case 1:
                            mower.x++
                            break;
                        case 2:
                            mower.y--;
                            break;
                        case 3: 
                            mower.x--;
                            break;
                    }   
            }
    
            console.log(mower);
     
        }
    
        console.log("Pour la tondeuse " + mower.id +" ["+  mower.x + ", "+  mower.y + "] et orientation "+  orientation[mower.o]);
        
    }
    return (
        <div>
            <h2>Pour la tondeuse numéro {mower1.id} : [{mower1.x},{mower1.y}] et orientation {orientation[mower1.o]}  </h2> 
            <h2>Pour la tondeuse numéro {mower2.id} : [{mower2.x},{mower2.y}] et orientation {orientation[mower2.o]}  </h2> 
        </div>
          )
  
}
export default Mower;