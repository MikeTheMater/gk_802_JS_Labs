// Κώδικας που θα εκτελείται όταν φορτωθεί η σελίδα:
// Code that will run when the page is loaded:
//
// Γράψτε εδώ τον κώδικά σας
// Write your code here
//

//--------------------------------------------------
// Ο παραπάνω κώδικας θα κάνει χρήση των εξής συναρτήσεων:
// The above code will use the following functions:

// 1. Επιστρέφει το πλήθος των εργασιών που έχουν σημειωθεί ως ολοκληρωμένες
// 1. Returns the count of the tasks that have been marked as done
function getDoneCount() {
    let done = document.querySelectorAll(".done span");
    for (let i = 0; i < done.length; i++) {
        done[i].style.textDecoration = "line-through";
    }
    return done.length;
}

// 2. Επιστρέφει το πλήθος όλων των εργασιών
// 2. Returns the total count of all the tasks
function getTotalCount() {
    let total = document.querySelectorAll("li");
    
    return total.length;
}

// 3. Χρωματίζει όλες τις άρτιες εργασίες
// 3. Colors every odd task
function colorEveryOddTask() {
    let tasks = document.querySelectorAll("li");
    for(let i = 0; i < tasks.length; i++) {
        if(i % 2 == 0) {
            tasks[i].style.backgroundColor = "lightgray";
        }
    }
}

let total1= document.getElementsByClassName("total");
total1[0].innerHTML= getTotalCount();

let done1= document.getElementsByClassName("left-todo");
done1[0].innerHTML= getTotalCount() - getDoneCount();

colorEveryOddTask();