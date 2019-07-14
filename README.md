# Binary Search
CS concepts showing the implimtaion of Binary Search in javascript.

Binary Search is an efficient way to search an already sorted array. 

It will first check the middle element of the array for the search value.  
If finds a match it will return the value. 
If middle element value is greater than the search value, then it will check the middle of the lower half of the array.  
If the middle element is less than the search value, then it will check the middle of the upper half of the array.
The binary search algorithm will continue this process until the value is either found or not found. 

This is a pretty efficient method for searching a sorted array as with each check you are eliminating half of the possible elements. 

The BigO for binary search is `O(log n)`
