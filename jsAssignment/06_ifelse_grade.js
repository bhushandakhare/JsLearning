var voteEligible=function(age){
      var result= +age;
    if (age==0 || age<0 || age>=130 || age==null || isNaN(result) ) {
        console.log(`Invalid Data: ${age}`); 
    
    }
    else{
        if (age<18) {
            console.log(`You are not eligible for vote: ${age}`);
             }

             else{
                console.log(`You are eligible for vote: ${age}`);
             }
    }
    
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);
voteEligible(undefined);
voteEligible("Bhushan")

