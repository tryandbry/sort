describe('Bubble Sort', function(){

  beforeEach(function() {
    spyOn(window,'toLower').and.callThrough();
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('sorts a one-element array', function(){
    var arr = [1];
    expect(bubbleSort(arr)).toEqual(arr);
  });

  it('sorts a longer array', function(){
    var arr = [3,1,2];
    expect(bubbleSort(arr)).toEqual([1,2,3]);
  });

  it('executes the expected number of times', function(){
    var arr = [3,1,2];
    bubbleSort(arr);
    expect(toLower.calls.count()).toEqual(6);

    arr = [4,1,3,2];
    bubbleSort(arr);
    expect(toLower.calls.count()).toEqual(18);

  });
});



