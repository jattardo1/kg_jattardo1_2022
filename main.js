main();


//isValid checks if the user inputted any values
function isValid(i){
    if(process.argv[i] == null){
        process.stdout.write("No Values were entered. Run Program Again");
        return 0;
    }
    return 1;
}

//NumConvert converts the inputted numbers into a word and prints that word
function NumConvert(q,n,numbers){
    if(numbers[q][n] == 0){
        process.stdout.write("Zero");
    }
    else if(numbers[q][n] == 1){
        process.stdout.write("One");
    }
    else if(numbers[q][n] == 2){
        process.stdout.write("Two");
    }
    else if(numbers[q][n] == 3){
        process.stdout.write("Three");
    }
    else if(numbers[q][n] == 4){
        process.stdout.write("Four");
    }
    else if(numbers[q][n] == 5){
        process.stdout.write("Five");
    }
    else if(numbers[q][n] == 6){
        process.stdout.write("Six");
    }
    else if(numbers[q][n] == 7){
        process.stdout.write("Seven");
    }
    else if(numbers[q][n] == 8){
        process.stdout.write("Eight");
    }
    else if(numbers[q][n] == 9){
        process.stdout.write("Nine");
    }
    else{
        process.stdout.write("Invalid");
    }
}

// createArray reads the inputted values and creates a numerical array
function createArray(i,numbers){
    while(process.argv[i] != null){
        numbers[i-2] = process.argv[i];
        i = i + 1;
    }
}

function main(){
    //initialize variables
    var numbers = new Array(); // array of the inputted values
    i = 2; // number for argv to start at when looking for inputted values
    q = 0; // starting value for the numbers array

    isValid(i)

    createArray(i,numbers);

    // runs through the numerical array and prints the array of words
    while(numbers[q] != null){
        n = 0; // number to read each individual number of each value
        while(numbers[q][n] != null){
            NumConvert(q,n,numbers);
            n = n + 1;
        }
        if(numbers[q+1] != null){
            process.stdout.write(", ");
        }
        q = q + 1;
    }
    process.stdout.write("\n");
}