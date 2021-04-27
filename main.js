var numbers = new Array();
var words = new Array();

i = 2;
q = 0;
while(process.argv[i] != null){
    numbers[i-2] = process.argv[i];
    i = i + 1;
}
while(numbers[q] != null){
    n = 0;
    while(numbers[q][n] != null){
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
        n = n + 1;
    }
    if(numbers[q+1] != null){
        process.stdout.write(", ");
    }
    q = q + 1;
}
process.stdout.write("\n");
