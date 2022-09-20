# Remarks on Mike Dobrin's Solution to the Challenge

## Spaces vs Tabs

I use spaces and tab size is 4. There are pros and cons of this approach. If company settled with some other standard already - I'm not going to argue with that and accept it.
But otherwise I will indoctrinate juniors into accepting my choice.

## Constants for Time Intervals

Since almost every time interval is defined using the lower (smaller) time interval I decided to declare them from the lowest to the greatest (longest).
Those numbers can actually be precalculated in advance but I don't like magic numbers that you can't tell if they are right just by looking at them.
I then reuse the constants in **TIME_INTERVALS**. Why do we need it? It addresses two purposes:

1. Gives us the correct order of iteration which is from greatest to lowest (shortes) time intervals
2. Groups labels together with time intervals. Instead of having 2 string arrays we have 1 array of nice objects. It can be very helpful in future when we decide to add *weeks* for instance. 

## Arrow Functions

They are less verbose and it's easier to read the code. However, to delimit the definiton of the longer *formatDuration* function I've used *(* and *)*. It can be skipped but it adds to readability.

## No invalid input handling

My code doesn't handle the invalid input. While the original code returns *undefined* when something else rather than number is passed.
Also negative numbers produce different output.

## Complexity

This code executes in constant time and uses constant space.