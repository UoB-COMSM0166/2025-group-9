function loadPlatforms(difficulty, xOffset, yOffset, mode) {
    let platforms = []; 

    if (mode === 0){
        
        if (difficulty === 'hard') {
            //ground floor 
            platforms.push({ x: 71 + xOffset, y: 718 + yOffset, width: 1298, height: 50 });
            platforms.push({ x: 71 + xOffset, y: 691 + yOffset, width: 421, height: 27 });
            platforms.push({ x: 71 + xOffset, y: 664 + yOffset, width: 373, height: 27 });

            //table
            platforms.push({ x: 1224 + xOffset, y: 684 + yOffset, width: 50, height: 5 });

            //lock
            platforms.push({ x: 320 + xOffset, y: 510 + yOffset, width: 60, height: 120 });
  
            //first floor
            platforms.push({ x: 71 + xOffset, y: 492 + yOffset, width: 801, height: 54 });
            platforms.push({ x: 983 + xOffset, y: 493 + yOffset, width: 386, height: 54 });

            //additional first floor platforms
            platforms.push({ x: 483 + xOffset, y: 467 + yOffset, width: 237, height: 26 });
            platforms.push({ x: 507 + xOffset, y: 449 + yOffset, width: 188, height: 18 });
            platforms.push({ x: 1012  + xOffset, y: 460 + yOffset, width: 37, height: 6 });
            platforms.push({ x: 1074 + xOffset, y: 445 + yOffset, width: 35, height: 6 });
            platforms.push({ x: 129 + xOffset, y: 440 + yOffset, width: 52, height: 52 });
            platforms.push({ x: 1278 + xOffset, y: 445 + yOffset, width: 49, height: 49 });


            //second floor
            platforms.push({ x: 71 + xOffset, y: 269 + yOffset, width: 806, height: 54 });
            platforms.push({ x: 986 + xOffset, y: 270 + yOffset, width: 384, height: 54 });

            //additional second floor platforms
            platforms.push({ x: 298 + xOffset, y: 244 + yOffset, width: 156, height: 27 });
            platforms.push({ x: 71 + xOffset, y: 218 + yOffset, width: 110, height: 52 });
            platforms.push({ x: 1262 + xOffset, y: 216 + yOffset, width: 107, height: 53 });
            platforms.push({ x: 1159 + xOffset, y: 225 + yOffset, width: 46, height: 18 });
            platforms.push({ x: 1098 + xOffset, y: 201 + yOffset, width: 47, height: 18 });
            platforms.push({ x: 1039 + xOffset, y: 229 + yOffset, width: 47, height: 18 });
            platforms.push({ x: 218 + xOffset, y: 224 + yOffset, width: 37, height: 19 });
            platforms.push({ x: 487 + xOffset, y: 224 + yOffset, width: 37, height: 19 });
            platforms.push({ x: 335 + xOffset, y: 152 + yOffset, width: 37, height: 19 });
            platforms.push({ x: 616 + xOffset, y: 188 + yOffset, width: 120, height: 18 });


            //building boundaries
            platforms.push({ x: 71 + xOffset, y: 44 + yOffset, width: 1298, height: 54 });
            platforms.push({ x: 66 + xOffset, y: 0 + yOffset, width: 5, height: 820 });
            platforms.push({ x: 1368 + xOffset, y: 0 + yOffset, width: 5, height: 820 });

        }

        else if( difficulty === 'easy'){
            platforms = [];

            //ground floor 
            platforms.push({ x: 71 + xOffset, y: 719 + yOffset, width: 1298, height: 50 });


            //additional ground floor
            platforms.push({ x: 537 + xOffset, y: 682 + yOffset, width: 67, height: 17 });
            platforms.push({ x: 473 + xOffset, y: 640 + yOffset, width: 67, height: 18 });
            platforms.push({ x: 277 + xOffset, y: 639 + yOffset, width: 66, height: 16 });
            platforms.push({ x: 204 + xOffset, y: 680 + yOffset, width: 66, height: 16 });
            platforms.push({ x: 370 + xOffset, y: 678 + yOffset, width: 73, height: 43 });


            //first floor
            platforms.push({ x: 71 + xOffset, y: 506 + yOffset, width: 801, height: 54 });
            platforms.push({ x: 990 + xOffset, y: 506 + yOffset, width: 379, height: 54 });

            //additional first floor platforms
            platforms.push({ x: 1263 + xOffset, y: 454 + yOffset, width: 106, height: 53 });
            platforms.push({ x: 1045 + xOffset, y: 454 + yOffset, width: 109, height: 53 });
            platforms.push({ x: 311 + xOffset, y: 454 + yOffset, width: 109, height: 53 });
            platforms.push({ x: 616 + xOffset, y: 411 + yOffset, width: 75, height: 50 });
            platforms.push({ x: 68 + xOffset, y: 455 + yOffset, width: 113, height: 52 });

            platforms.push({ x: 790 + xOffset, y: 441 + yOffset, width: 68, height: 16 });
            platforms.push({ x: 720 + xOffset, y: 396 + yOffset, width: 68, height: 16 });
            platforms.push({ x: 516 + xOffset, y: 401 + yOffset, width: 68, height: 16 });
            platforms.push({ x: 445 + xOffset, y: 441 + yOffset, width: 68, height: 16 });
    
    
            //second floor
            platforms.push({ x: 71 + xOffset, y: 273 + yOffset, width: 797, height: 54 });
            platforms.push({ x: 986 + xOffset, y: 279 + yOffset, width: 384, height: 54 });

            //additional second floor platforms
            platforms.push({ x: 305 + xOffset, y: 222 + yOffset, width: 202, height: 52 });
            platforms.push({ x: 68 + xOffset, y: 222 + yOffset, width: 110, height: 52 });
            platforms.push({ x: 696 + xOffset, y: 222 + yOffset, width: 172, height: 52 });
            platforms.push({ x: 1264 + xOffset, y: 227 + yOffset, width: 105, height: 53 });
            platforms.push({ x: 986 + xOffset, y: 227 + yOffset, width: 158, height: 53 });
            platforms.push({ x: 1134 + xOffset, y: 178 + yOffset, width: 68, height: 16 });
            platforms.push({ x: 218 + xOffset, y: 199 + yOffset, width: 46, height: 48 });



            //building boundaries
            platforms.push({ x: 71 + xOffset, y: 44 + yOffset, width: 1298, height: 10 });
            platforms.push({ x: 66 + xOffset, y: 0 + yOffset, width: 5, height: 820 });
            platforms.push({ x: 1368 + xOffset, y: 0 + yOffset, width: 5, height: 820 });
        }
    }

    else if(mode === 1 && difficulty === 'hard'){

        platforms = [];

        //ground floor 
        platforms.push({ x: 71 + xOffset, y: 718 + yOffset, width: 1298, height: 50 });
        platforms.push({ x: 71 + xOffset, y: 691 + yOffset, width: 421, height: 27 });
        platforms.push({ x: 71 + xOffset, y: 664 + yOffset, width: 373, height: 27 });
      
        //table
        platforms.push({ x: 1224 + xOffset, y: 684 + yOffset, width: 50, height: 5 });
      
        //first floor
        platforms.push({ x: 71 + xOffset, y: 492 + yOffset, width: 801, height: 54 });
        platforms.push({ x: 983 + xOffset, y: 493 + yOffset, width: 386, height: 54 });
      
        //additional first floor platforms
        platforms.push({ x: 483 + xOffset, y: 467 + yOffset, width: 237, height: 26 });
        platforms.push({ x: 507 + xOffset, y: 449 + yOffset, width: 188, height: 18 });
        platforms.push({ x: 1012  + xOffset, y: 460 + yOffset, width: 37, height: 6 });
        platforms.push({ x: 1074 + xOffset, y: 445 + yOffset, width: 35, height: 6 });
        platforms.push({ x: 129 + xOffset, y: 440 + yOffset, width: 52, height: 52 });
        platforms.push({ x: 1278 + xOffset, y: 445 + yOffset, width: 49, height: 49 });
      
      
        //second floor
        platforms.push({ x: 71 + xOffset, y: 268 + yOffset, width: 806, height: 54 });
        platforms.push({ x: 986 + xOffset, y: 269 + yOffset, width: 384, height: 54 });
      
        //additional second floor platforms
        platforms.push({ x: 298 + xOffset, y: 244 + yOffset, width: 156, height: 27 });
        platforms.push({ x: 71 + xOffset, y: 218 + yOffset, width: 110, height: 52 });
        platforms.push({ x: 1262 + xOffset, y: 216 + yOffset, width: 107, height: 53 });
        platforms.push({ x: 1159 + xOffset, y: 225 + yOffset, width: 46, height: 18 });
        platforms.push({ x: 1098 + xOffset, y: 201 + yOffset, width: 47, height: 18 });
        platforms.push({ x: 1039 + xOffset, y: 229 + yOffset, width: 47, height: 18 });
        platforms.push({ x: 218 + xOffset, y: 224 + yOffset, width: 37, height: 19 });
        platforms.push({ x: 487 + xOffset, y: 224 + yOffset, width: 37, height: 19 });
        platforms.push({ x: 335 + xOffset, y: 152 + yOffset, width: 37, height: 19 });
        platforms.push({ x: 616 + xOffset, y: 188 + yOffset, width: 120, height: 18 });
      
      
        //building boundaries
        platforms.push({ x: 71 + xOffset, y: 44 + yOffset, width: 1298, height: 54 });
        platforms.push({ x: 66 + xOffset, y: 0 + yOffset, width: 5, height: 820 });
        platforms.push({ x: 1368 + xOffset, y: 0 + yOffset, width: 5, height: 820 });
          

    }
    
    return platforms;
}

window.loadPlatforms = loadPlatforms;
