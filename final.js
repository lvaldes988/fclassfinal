//1. What are the four steps of mergesort?

//a) Find the middle point to divide the array into two halves: 
//b) Call mergeSort for first half: Call the function mergeSort 
//c). Call mergeSort for second half: Call the function again mergeSort
//d) Merge the two halves sorted in step 2 and 3: Call merge



//2.Using JavaScript, generate a random number between 50 and 100.

function getNumber(min, max) {
    return (Math.random() * (max - min)) + min;
}


getNumber(50,100)

//3.Using Javascript, generate a random number between -100 and 100.

function getNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


getNumber(-100,100)

//4.

//5.Re-state the following expression without using negation: !(10 > x)
!(10 > x) === 10<=X

//6.Re-state the following expression without using negation: !(a > 10 && b <= 5)
!(a > 10 && b <= 5) === a <= 10 || b > 5

//7.Re-state the following expression without repeating variable a: (a && x <= 10) || (a && y < 0)
(a && x <= 10) || (a && y < 0) === a && x<= 10 && y < 0

//8.Re-state the following expression without negations: !( (a > 10) || (b > 10) || (c > 10) || (isAdmin) )
!( (a > 10) || (b > 10) || (c > 10) || (isAdmin) ) === ((a <= 10) && (b <= 10) && (c <= 10))
//18.What are the main operations of a stack?
first in first out 

push, which adds an element to the collection, and
pop, which removes the most recently added element that was not yet removed.

//19.What are the main operations of a queue?
the queue only two operations are allowed enqueue and dequeue.
 Enqueue means to insert an item into the back of the queue,
  dequeue means removing the front item.

//20.What is the runtime of bubblesort? How does it work?        
Instead of searching an array as a whole, the bubble sort works by comparing adjacent pairs of objects in the array.
  
