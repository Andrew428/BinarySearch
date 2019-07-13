/* BinarySearch */
import  BinarySearch from './util/BinarySearch.js';
import MergeSort from './util/MergeSort.js';

window.onload = () => {   
    const ms = new MergeSort();     
      let sortedArray = ms.mergeSort(['harry', 'bob', 'andy', 'liz', 'larry', 'alex']);
      
    console.log('BinarySearch');
    const search = new BinarySearch();
      let target = 'andy';
      console.log('Looking for...', target);
      let result = search.binarySearch(sortedArray, target);    // must pass in a sorted array
      console.log('Result: ', result);  
};