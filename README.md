# The Babysitter Kata

This repo contains one solution to "the babysitter" code kata, as described below.

Personally, I used testem and Jasmine as my testrunner and testing framework, respectively.

To run the tests, simply run testem from the command line at the root of this project. Open http://localhost:7357/ in a browser (for example) and enjoy.

source: https://gist.github.com/jameskbride/5482722

Background
----------
This kata simulates a babysitter working and getting paid for one night.  The rules are pretty straight forward:

The babysitter 
- starts no earlier than 5:00PM
- leaves no later than 4:00AM
- gets paid $12/hour from start-time to bedtime
- gets paid $8/hour from bedtime to midnight
- gets paid $16/hour from midnight to end of job
- gets paid for full hours (no fractional hours)


Feature:
As a babysitter
In order to get paid for 1 night of work
I want to calculate my nightly charge
