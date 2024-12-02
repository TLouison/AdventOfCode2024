# Advent of Code 2024
This year I am comitting to completing Advent of Code 2024, and I've chosen to do it in TypeScript since it is such a ubiquitous language that I really have not spent as much time with as I should. I'm hoping this gives me the opportunity to understand some of the intricacies of the langauge more while working on novel problems so I don't get fixed in my normal way of thinking when working on other professional projects.

## Day 1
Day 1 was a breeze, as most Day 1 puzzles are. It did give me a good warmup, and made me excited for day 2.

## Day 2
Day 2 was much more challenging off the bat. The first part of the puzzle wasn't too bad, although I did get tripped up by one small typescript quirk. Since I'm used to python, I was trying to iterate over the contents of the reports using `for (var report in reports) {}`. However, I found that this did not work, and was giving me the index of the value instead. I just replaced it with `reports.forEach((report) => {});` and moved on, but it did trip me up for a minute.

Part 2 was more challenging as I came at it from the wrong angle. The way I read the problem, you would simply skip over a value if it was not valid and continue with your processing of the report. This was wrong though, as the actual wording of the challenge was that you can _**remove one number**_ and turn an invalid report into a valid one. This meant that a number earlier on could be responsible for the failed report (mainly due to direction) but you wouldn't always have that number when you hit the error. To deal with this, I iterated over the array, removing one element at a time to see if it would be valid without that number.

It is very likely there is some other algorithm you could use to determine this, but I had some other obligations and couldn't spend as much time thinking over it: I just wanted to get down a solution that worked.

Shoutout to [this Reddit thread]([url](https://www.reddit.com/r/adventofcode/comments/1h4shdu/2024_day_2_part2_edge_case_finder/)) which helped me realize the issue with directions I had in my initial solution that had me rethink how to check for valid reports.
