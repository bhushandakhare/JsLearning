console.log(`============================ Assignment Map ============================`);
console.log(`                                                                          `);
class Bank{
   bank_name;
   location;
   account_no;
   ifsc;
   interest_rate

constructor(bank_name,location,account_no,ifsc,interest_rate){
this.bank_name=bank_name;
this.location=location;
this.account_no=account_no;
this.ifsc=ifsc;
this.interest_rate=interest_rate;
}

};
let axix_bank= new Bank(
"Axis",
"Nagpur",
44586256215,
"AXIX0012135",
"15%"
);

let sbi_bank= new Bank(
    "SBI",
    "Mumbai",
    7586556215,
    "SBIN001136",
    "12%"
    );

    let icici_bank= new Bank(
        "ICICI",
        "Amravati",
        5652623698,
        "ICICI26522",
        "10%"
     );

     let kotak_bank= new Bank(
        "KOTAK",
        "Pune",
        6535267849,
        "KOTAK456236",
        "15%"
     );

     let hdfc_bank= new Bank(
        "HDFC",
        "Chandrapur",
        9564431653,
        "HDFC021541",
        "13%"
     );

     let punjab_bank= new Bank(
        "PUNJAB",
        "Pune",
        5256356215,
        "PUNJ652215",
        "10%"
     );

     const map= new Map();
     map.set("AXIX0012135",axix_bank);
     map.set("SBIN001136",sbi_bank);
     map.set("ICICI26522",icici_bank);
     map.set("KOTAK456236",kotak_bank);
     map.set("HDFC021541",hdfc_bank);
     map.set("PUNJ652215",punjab_bank);
   
     const totalKeys= map.keys();
     for (const key of totalKeys) {
        const banks=map.get(key)
        console.log(`Bank Name: ${banks.bank_name} , Account No.: ${banks.account_no}, Intereest Rate is: ${banks.interest_rate} `);
     }

    