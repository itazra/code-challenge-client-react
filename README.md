# Solutioning Highlights

## Hightlights of your improvements (tests and others you choose)
- Refactored the code and extracted the Beer Component which is the basic component that displays the beer name, temperature and status.
- This meant that we can create a separate unit test for the Beer Component which checks for the name, temperature and the status.
- Improved App.test. made it a kind of integration test to cover the list of Beers and made it dynamic in case in the future, additional beers will be added to the list.
- Overall, the work i did is cover the basic functionality which is to test the list of beers and check for data correctness.

## What would you improve next if you had more time?
- If i had more time, Further Refactoring to improve quality and testability.

## Questions you would ask and your own answers and assumptions
- How to handle exception scenarios like API is down or hardware issue. in this case, it would be good to show some kind of dialog/modal with options to the user like retry connection.

## Explanations of decisions or the approach you took
- there are two things that i tried to achieve in this exercise. 
    1. breaking down existing components into smaller and basic components for better maintanability.
    2. trying to achieve both component localized testing as well as inter-component integration tests to achieve system predictability. example: if a particular beer doesn't have a temperature value while other beers have then we can say with high probability that it is a specific sensor problem because we covered it in the testing.

## Any other notes you feel relevant to evaluate your test improvements
- given the limited time of the exercise, i was really torn between trying to improve the code quality versus doing code coverage but ultimately i focuse on the testing and code coverage because at the end of the day it was the primary task assigned to me.