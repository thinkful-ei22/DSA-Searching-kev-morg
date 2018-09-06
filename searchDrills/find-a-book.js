/* Imagine you are looking for a book in a library 
with a Dewey Decimal index. How would you go about it? 
Can you express this process as a searching algorithm? */

//First, look by subject (linear look of 100 values at a time)
//then, look by sub-series (linear look of 10 values at a time)
//then, look at sub-sub-series (linear look of 1 value at a time)
//...

/*

        Tree
  / / / / | \ \ \ \
  1 2 3 4 5 6 7 8 9 
  /|\
........................... (1000 leaves)

  DecimalSearchTree constructor(key, value){
    this.key,
    this.value,
    this.one,
    this.two,
    this.three,
    ... ,
    this.parent
  }

  - algorithm would look from the root, comparing each place value
  function(subject)
  (100's runtime is O(10n) at most)
  (each step cuts off 90% percent of the options, so O(logn) for each step)
  Total Runtime: O(nlogn)


  function findDeweyDecimal(category, subcategory, specific, title){
    return Tree.find(naturalSciences(500) -> chemistry(520) -> biochemistry(523) -> title(523.01));
  }

  return Tree.find(naturalSciences(500) -> chemistry(520) -> biochemistry(523) -> title(523.01));
  */