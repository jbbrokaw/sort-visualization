$(function () {

  var happinesses = [];


  var findAnimationEndpoint = function (rank, rows) {
    var topOffset = 200 * Math.floor(rank / rows);
    var leftOffset = 300 * (rank % rows);
    return {left: (leftOffset + "px"),
             top: (topOffset + "px")};
  };

  var swapElements = function (index1, index2, gap) {
    if (index1 !== index2) {
      originClass = "el" + index1;
      destinationClass = "el" + index2;
      console.log(originClass + " " + destinationClass);
      //SWAP POSITIONS
      $('.' + originClass)
        .animate(findAnimationEndpoint(index2, gap), {duration: 1000});
      $('.' + destinationClass)
        .animate(findAnimationEndpoint(index1, gap), {duration: 1000});
      //SWAP CLASS NAMES
      $('.' + originClass).removeClass(originClass).addClass("TEMP");
      $('.' + destinationClass).removeClass(destinationClass).addClass(originClass);
      $('.' + "TEMP").removeClass("TEMP").addClass(destinationClass);
      //PUT DELAY ON ALL OTHER CLASSES
      for (j = 0; j < 11; j++) {
        if ((j != index1) && (j != index2)) {
          otherClass = "el" + j;
          $('.' + otherClass).delay(1000);
        }
      }
    } else {
      $('.region').delay(1000);
    }
  };

  var placeOnGrid = function (rows) {
    for (j = 0; j < 9; j++) {
      className = "el" + j;
      $('.' + className).animate(findAnimationEndpoint(j, rows), {duration: 1000});
    }
  };

  var animatedShellSort = function () {
    var gaps = [4, 3, 1];
    var temp = 0.00;
    var i, j, gap, gapIndex;
    for (gapIndex = 0; gapIndex < gaps.length; gapIndex++) {
      gap = gaps[gapIndex];
      placeOnGrid(gap);
      for (i = gap; i < happinesses.length; i++) {
        temp = happinesses[i];
        swapElements(i, 10, gap); //using 10 as a holder for temp
        for (j = i; j >= gap && happinesses[j - gap] > temp; j -= gap) {
            happinesses[j] = happinesses[j - gap];
            swapElements(j, j - gap, gap);
        }
        happinesses[j] = temp;
        swapElements(j, 10, gap);
      }
    }
  };

  $('div').each(function (index) {
    happinesses[index] = Number($(this).text());
    $(this).animate(findAnimationEndpoint(index, 3), {duration: 2000});
  });

  console.log(happinesses);

  animatedShellSort();

  console.log(happinesses);

});

/*
# Sort an array a[0...n-1].
gaps = [701, 301, 132, 57, 23, 10, 4, 1]

# Start with the largest gap and work down to a gap of 1
foreach (gap in gaps)
{
    # Do a gapped insertion sort for this gap size.
    # The first gap elements a[0..gap-1] are already in gapped order
    # keep adding one more element until the entire array is gap sorted
    for (i = gap; i < n; i += 1)
    {
        # add a[i] to the elements that have been gap sorted
        # save a[i] in temp and make a hole at position i
        temp = a[i]
        # shift earlier gap-sorted elements up until the correct location for a[i] is found
        for (j = i; j >= gap and a[j - gap] > temp; j -= gap)
        {
            a[j] = a[j - gap]
        }
        # put temp (the original a[i]) in its correct location
        a[j] = temp
    }

}

*/
