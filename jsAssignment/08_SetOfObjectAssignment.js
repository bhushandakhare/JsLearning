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
"Pune",
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

     let setOfBank= new Set();
     setOfBank.add(axix_bank);
     setOfBank.add(sbi_bank);
     setOfBank.add(icici_bank);
     setOfBank.add(kotak_bank);
     setOfBank.add(hdfc_bank);
     setOfBank.add(punjab_bank);

for (const element of setOfBank) {
    console.log(`Bank Name:${element.bank_name}, Location:${element.location}`);
}
