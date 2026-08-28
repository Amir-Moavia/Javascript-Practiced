// const PromiseOne = new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//         console.log("Hello there")
//         resolve();
//     }, 2000)
// })


// PromiseOne.then(() => {
//     console.log("Promise called")
// })


// new Promise(function(resolve,reject)
// {
//     setTimeout(()=>{  
//         console.log("Async task 2 called");
//         resolve();
//     },2000)
// }).then(()=>{
//     console.log("Async 2 resolved");
// })

// const PromiseThree = new Promise(function(resolve,reject){

//     setTimeout(function(){
//         resolve({username: "HelloAmir",email: "amirmoavia969@gmail.com"});
//     },2000)
// })
// PromiseThree.then(function(user){
//     console.log(user.username)
// })


// const PromiseFour = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let error = true;
//         if (!error) {
//             resolve({username: "HelloAmir",email: "amirmoavia969@gmail.com"});
//         }
//         else{
//             reject("Error 404: Something went wrong")
//         }

//     },2000)
// }).then(function(user)
// {
//     console.log(user.username)

// }).catch(function(error)
// {
//     console.log(error)
// }).finally(function()
// {
//     console.log("The Promise is either rejected or resolved ");

// })
 
// const PromiseFive = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let error = false;
//         if (!error) {
//             resolve({username: "HelloAmir",email: "amirmoavia969@gmail.com"});
//         }
//         else{
//             reject("Error 404: Something went wrong")
//         }

//     },2000)
// })

// async function consumePromiseFive() {
//     try{
//         const response = await PromiseFive;
//         console.log(response.username);
        
//     }
//     catch(error){
//         console.log(error)
//     }
// }
//  consumePromiseFive();


// const PromiseSix = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let error = false;
//         if (!error) {
//             resolve({username: "HelloAmir",email: "amirmoavia969@gmail.com"});
//         }
//         else{
//             reject("Error 404: Something went wrong")
//         }

//     },2000)
// })

// async function consumePromiseSix() {
//     try{
//         const response = await PromiseSix;
//         console.log(response.username);
        
//     }
//     catch(error){
//         console.log(error)
//     }
// }
//  consumePromiseSix();


// async function getAllUsers() {
//     try{
//         const response = await fetch('https://pro-api.coinmarketcap.com/public-api/v1/simple/price?ids=1')
//         const Data = await response.json();
//         console.log(Data.data[0].price)}
//         catch (error)
//         {
//             console.log("Error 404 found")
//         }
// }

// getAllUsers();


// fetch('http://universities.hipolabs.com/search?country=United+States')
// .then((response) => {
//     return response.json();
//   }).then((Data) => { 
//     console.log(Data[1].web_pages[0])
//   }).catch((error) => console.log("Error"))

//const mydata = {"userProfile":{"firstName":"Amir","lastName":"Moavia","dateOfBirth":"10/10/2005 12:00:00 AM","primaryEmail":"amirmoavia969@gmail.com","gender":"Man","genderPronounPreference":"He/Him/His","puid":"00037FFE75783225","oid":"00000000-0000-0000-6525-704414ffd470","isPrivate":false,"isTextOptIn":false,"isPrivacyAgreed":true,"deleted":false,"modifiedBy":"amirmoavia969@gmail.com","createdBy":"amirmoavia969@gmail.com","dateCreated":"2026-08-28T05:15:13.4223097","dateModified":"2026-08-28T05:35:58.560119","addresses":[{"addressType":"Primary","stateOrProvince":"Khyber Pakhtunkhwa","countryOrRegion":"Pakistan","createdBy":"amirmoavia969@gmail.com","modifiedBy":"amirmoavia969@gmail.com","dateCreated":"2026-08-28T05:15:17.1573326","dateModified":"2026-08-28T05:35:59.0337766","deleted":false}],"phoneInfo":[{"phoneType":"Mobile","isVerified":false,"dateCreated":"2026-08-28T05:15:17.1574629","dateModified":"2026-08-28T05:35:59.0337858","createdBy":"amirmoavia969@gmail.com","modifiedBy":"amirmoavia969@gmail.com"}],"socialNetworks":[{"handle":"amirmoavia/","isPrivate":false},{"handle":"Amir-Moavia","isPrivate":false}],"languages":[],"programmingLanguages":[{"programmingLanguage":"C++"},{"programmingLanguage":"JavaScript"},{"programmingLanguage":"Python"},{"programmingLanguage":"T-SQL"}],"functionalRoles":[],"azureBenefitRequestForms":[],"azureBenefits":[]},"studentAmbassadorProgram":{"events":[],"activities":[],"applications":[{"formType":"Application","formStatus":"Under Review","dateModified":"2026-08-28T05:35:58.5601188","dateCreated":"2026-08-28T05:15:13.4223097","modifiedBy":"amirmoavia969@gmail.com","createdBy":"amirmoavia969@gmail.com","deleted":false,"dateSubmitted":"2026-08-28T05:35:58.5601189","answers":[{"question":"What is the User Name for your Microsoft Learn account? All registered members are required to have a Microsoft Learn account. If you do not have a Learn account, create one now. https://aka.ms/LearnAccountSettings.","answer":"Amir Moavia"},{"question":"Which of the following technologies interest you?","optionText":"Networking"}]}],"nominations":[],"school":{"schoolName":"Abdul Wali Khan University - Islamabad Campus","countryOrRegion":"Pakistan","schoolDegreeProgram":"Computer Science","schoolDegreeLevel":"Bachelor","expectedGraduationDate":"2029-02-28T19:00:00"},"benefits":[],"strengths":[],"testimonials":[],"visualStudioBenefitRequests":[],"visualStudioBenefitDetails":[]},"isSuccess":true}
// console.log(mydata.userProfile.primaryEmail)

  

fetch('./PrivacyData.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response;
  })
  .then((data) => { 
    console.log(data);
  })
  .catch((error) => {
    console.error("Fetch error details:", error);
  });