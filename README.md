sort-visualization
==================

# Sorting the 9 US Census Bureau Regions by Happiness
## Using an animated Shell sort with gaps of 3 and 1

* The sort works by pulling an element out and then shifting subarrays of elements separated by gap
* In this case, the gap of 3 makes the *columns* sort first
* Then it finishes with a simple insertion sort (gap of 1)

### jQuery considerations
* I originally was tracking divs by their index in the DOM, but then not stupidly not updating that index
* The solution was the el0--el10 classes, which contain the updated indexing information

Data taken from the GSS, produced by NORC. http://www3.norc.org/GSS+Website/Data+Analysis/
Census Region images from Wikipedia, CC License.
