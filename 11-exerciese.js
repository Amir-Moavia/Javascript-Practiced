
const array_one = [1,4,-2,5,0];

function minMax(array_one)
{ 
    let minimum = array_one[0];
    let maximum = array_one[0];


    if (array_one.length === 0) {
        console.log(`Minumum = null
maximum = null`);
    }
    
    else{
        

        
        for(let i=1; i < array_one.length ; i++)
        {
            if (minimum > array_one[i]) {
                minimum = array_one[i];
            }
            else if (maximum < array_one[i]) {
                maximum = array_one[i];
            }
            else if (minimum === maximum){
                 console.log(`the minumum is ${minimum}
the maximum is ${maximum};`);
    }

        }
        console.log(`the minumum is ${minimum}`);
        console.log(`the maximum is ${maximum}`);}

}

minMax(array_one);


//============================================================//

const array_two = ['apple' ,'grape','apple','apple', 'mango']

function countWords(arr){

    const  wordCount = {};



    for(let i = 0; i< arr.length; i++)
    {
        const words = arr[i];

        if (wordCount[words])
        {
            wordCount[words]++;
        }
        else {
            wordCount[words] = 1;
        }
    }
    return wordCount;

}

console.log(countWords(array_two));