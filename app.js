if(closeCount > openCount){//bulls count
      bullCount++;
      //checking for R.L.P
      if(high - close < candleSize * 0.1){//GREEN hammer
         if(open - low > candleSize * 0.6){
            RLPCount++;
            if(candleIndex > 11){
               if(bullCount > bearCount && RLPCount > RHPCount){//the bulls are many
                  Comment("green candles --- more bulls --- more R.L.P.");
               }//the bulls are many
               if(bearCount > bullCount && RHPCount > RLPCount){//the bear are many
                  Comment("green candles --- more bears --- more R.H.P.");
               }//the bear are many
            }
         }
      }//checking for R.L.P  
   }//bulls count
   
   if(closeCount < openCount){//bears count
      bearCount++;
      //checking for R.H.P
      if(high - close > candleSize * 0.6){//green shooting-star
         if(open - low < candleSize * 0.1){
            RHPCount++;
            if(candleIndex > 11){
               if(bullCount < bearCount && RLPCount < RHPCount){//the bulls are many
                  Comment("red candles --- more bears --- more R.H.P.");
               }//the bulls are many
               if(bearCount < bullCount && RHPCount < RLPCount){//the bear are many
                  Comment("red candles --- more bears --- more R.H.P.");
               }//the bear are many
            }
         }
      }//checking for R.H.P
   }//bears count
   
   
///////////////ANOTHER ONE ///////////////////////////////////////


if(candleIndex < 60 && bullCount > bearCount){//looking of buy signals
      if(highCount > highCount3 && highCount3 > highCount5){
         if(MainLine[1] > 0){//when signal ismain above 0
             if(MainLine[1] > Signal[1] && MainLine[3] < Signal[3]){
                  if(MainLine[1] > MainLine[3] && MainLine[3] > MainLine[5]){
                        Comment("my Uptrend");
                        createOBJ(time, low, 233, clrGreen, "Buy");
                  }
             }
         }//when signal is below 0 and main above 0
         if(MainLine[1] < 0){//when below above 0
            if(-MainLine[1] < -Signal[1] && -MainLine[3] > -Signal[3]){
               if(MainLine[1] > MainLine[3] && MainLine[3] > MainLine[5]){
                  Comment("my Uptrend");
                  createOBJ(time, low, 233, clrGreen, "Buy");
               }
            }
         }//when below above 0
      }
   }//looking of buy signals
   
   if(candleIndex < 60 && bearCount > bullCount){//looking of sell signals
      if(lowCount < lowCount3 && lowCount3 < lowCount5){
        if(MainLine[1] < 0){//when main is above 0
           if(-MainLine[1] > -Signal[1] && -MainLine[3] < -Signal[3]){
               if(-MainLine[1] > -MainLine[3] && -MainLine[3] > -MainLine[5]){
                  Comment("Downtrend");
                  createOBJ(time, high, 234, clrRed, "sell");
               }
           }
         }//when main is above 0
         if(MainLine[1] > 0){//when main above 0
            if(MainLine[1] < Signal[1] && MainLine[3] > Signal[3]){
               if(-MainLine[1] > -MainLine[3] && -MainLine[3] > -MainLine[5]){
                  Comment("my Downtrend");
                  createOBJ(time, high, 234, clrRed, "sell");
               }
            }
         }//when main above 0
      }
   }//looking of sell signals