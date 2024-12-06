# Advent of Code 2024

This year I am comitting to completing Advent of Code 2024, and I've chosen to do it in TypeScript since it is such a ubiquitous language that I really have not spent as much time with as I should. I'm hoping this gives me the opportunity to understand some of the intricacies of the langauge more while working on novel problems so I don't get fixed in my normal way of thinking when working on other professional projects.

<details>
<summary>Day 1</summary>

## Day 1

Day 1 was a breeze, as most Day 1 puzzles are. It did give me a good warmup, and made me excited for day 2.

</details>

<details>
<summary>Day 2</summary>

## Day 2

Day 2 was much more challenging off the bat. The first part of the puzzle wasn't too bad, although I did get tripped up by one small typescript quirk. Since I'm used to python, I was trying to iterate over the contents of the reports using `for (var report in reports) {}`. However, I found that this did not work, and was giving me the index of the value instead. I just replaced it with `reports.forEach((report) => {});` and moved on, but it did trip me up for a minute.

Part 2 was more challenging as I came at it from the wrong angle. The way I read the problem, you would simply skip over a value if it was not valid and continue with your processing of the report. This was wrong though, as the actual wording of the challenge was that you can _**remove one number**_ and turn an invalid report into a valid one. This meant that a number earlier on could be responsible for the failed report (mainly due to direction) but you wouldn't always have that number when you hit the error. To deal with this, I iterated over the array, removing one element at a time to see if it would be valid without that number.

It is very likely there is some other algorithm you could use to determine this, but I had some other obligations and couldn't spend as much time thinking over it: I just wanted to get down a solution that worked.

Shoutout to [this Reddit thread](<[url](https://www.reddit.com/r/adventofcode/comments/1h4shdu/2024_day_2_part2_edge_case_finder/)>) which helped me realize the issue with directions I had in my initial solution that had me rethink how to check for valid reports.

</details>

<details>

<summary>Day 3</summary>

## Day 3

Right off the bat, this looked like a problem from a regex. Going down that path was going to be trickier considering I was sleep deprived after flying home from Thanksgiving and after a multiple-hour car ride, but it nonetheless was definitely the right choice.

Part 1 went off without a hitch, easily identifying the mults with a simple regex that just looked for "mul", an open paren, 1-3 digits, a comma, 1-3 digits, and a closed paren: `mul\((\d{1,3}),(\d{1,3})\)`. I then just used JavaScript's `matchAll` to get an iterable of all the matches and summed them up. I also added a custom type just to make the data a bit more readable (and I had a suspicion it might get worse in part 2).

I was correct about part 2 getting worse. I did make a lot of initial progress, realizing that the only parts of the string I cared about were those within a block of `do()...don't()`. This was a bad assumption though, but more on that later.

### Regex Woes

As expected, sleep deprivation and regex don't mix well. I was able to get the regex to highlight a full block of `do()...don't()`, but it would skip over do's and don'ts within that larger block. I found [this Reddit comment](https://www.reddit.com/r/regex/comments/gnej1k/comment/fr9om98/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button) which helped guide me toward non-greedy matching, which got me to matching each individual block.

### Solution

I was now able to get all of the values from within the `do` and `don't` blocks, but when entering my answer the value was too low. Re-reading the problem, I realized that any values before an instruction were to be treated as if they were within a `do` block. A better regexer might have been able to figure out how to plumb this all together into a single beautiful and horrible regex statement, but after trying for a bit I took the easier route of multiple validators. I created one that would match anything before a `do` or `don't` block (since once we've seen either once we can play by the other rules), and then another that would match within the `do` and `don't` blocks. I then just iterated over the matches and summed them up as before, breaking out some things into helpers as needed.

I'm sure there is a more elegant solution, but I was happy to get this one working and move on to the next day.

</details>

<details>
<summary>Day 4</summary>

## Day 4

Day 4 was one of those days where the first part seemed so much harder than the second. The first part had be break out good old Depth-First Search (DFS) to try and solve it, while part two's scope was simple enough to just brute force it.

### Part 1

For part 1, it appeared pretty likely this was going to be a recursive DFS problem. It had all the hallmarks of a leetcode-style DFS question: a large grid of information to search, a clear goal, and the need to try many different directions. As I worked on it though, I realized a faux-DFS was going
to be more than enough for this, since once we begin searching a direction we will always follow that same direction.

I started by creating a recursive helper function that would take in the current coordinates and try out all the possible directions. I then tweaked it to actually only continue to search the direction we are currently going, as words aren't allowed to bend!
By doing this, I was able to create a pretty simple solution that would begin by searching in all directions, and then each branch would continue out until it found "XMAS" or failed. I did add one small optimization, which was skipping over anything that wasn't an "X" to save time. I looked for
some easy wins to optimize further, like potentially memoization, but considering each branch was a constant length with a constant solution, I didn't see a meaningful way to speed things up.

I added some helper functions, classes, and enums as well to make the code more readable. Knowing I was potentially going into recursion-hell, I also thoroughly documented what each bit of code was doing to reference later if bugs arose. And bugs arose.

My core implementation was fine actually, I was just caught by an off-by-one error. Trying to decipher that in the massive input was too difficult however, so I created a minimal reproduction for each direction instead, as was able to see that I was not actually
doing any searches in the last column or row. I fixed this by changing my bounds to be `<=` instead of `<` and was able to get the correct answer.

### Part 2

With all of that recursion built up, I was sure I was going to need to use it again for part 2. However, the problem ended up being much simpler. We are looking for an X of "MAS", which had the key feature of always having an "A" in the middle.

By realizing that, I actually was able to strip out all the recursion and just iterate over each character, and check if it was an "A". If it was, I could get the coordinates of the surrounding characters that made the X and just make sure they were
the correct characters in one really big "if" statement. Significantly easier than my solution for part 1.

Another day down, hopefully tomorrow doesn't bring more recursion! 😅

</details>

<details open>
<summary>Day 5</summary>

## Day 5

Day 5 was a tricky one. I realized pretty quickly how I wanted to approach the problem, but it opened me up to some difficulties later. This was definitely the most
word-heavy problem so far, so I took notes at the top of my code to make sure I was hitting all of the key points and not missing things
down the line, which proved helpful to not get off-track.

### Part 1

For part 1, things went fairly smoothly. I knew the steps I wanted to take immediately: get the rules into a dictionary to make looking up
the rules easier, and get the page orders into a list of lists to iterate over.

Once I had gotten that done, I decided the full dataset was going to be too overwhelming to use to test everything, so in addition to the puzzle input I was given, I took the
example from the page to test with a small set of well-known solutions. This was a good idea, since the rules required enough complexity that smaller was definitely better.

I then came up with my main solver function, which iterates over the list, and then backtracks over it to find if any pages are invalid. This definitely works, since all rules are
covering what pages **must** come before others, but it is not the most efficient solution, I'm sure. I did add a small optimization that skips the backtracking for any number without
a corresponding ruleset, but I'm sure there are more optimizations that could be made.

I then iterated over the list, got the middle number of each valid list, and summed them up. I was happy to see that my solution worked on the first try, and I moved on to part 2.

### Part 2

Part 2 added the corresponding half to the problem: the first half dealt with the valid lists, so naturally the second half dealt with the invalid ones. I had set up my code mostly with
the expectation that this was going to happen, so I had an easy spot to execute a new sorting function to deal with the invalid lists.

The algorithm I used here was largely the same as checking for a valif list, but notibly two things changed:

1. When backtracking, I was no longer stopped at the first invalid location. I needed the first location the page
   would be valid to know where to insert it, so iteration continues until we find that valid spot (or the front of the list).
2. When we find a value that needs to be moved, we pull it out and insert it at the location it would be valid.

I initially had some trouble with point 2, as my head went to something like a bubble sort where we would swap the values. This was a bad idea though, because
swapping them results in us moving things from valid positions and ultimately results in a different solution than the examples wanted.

Using the examples as my test cases, I was able to (after quite a bit of debugging statements) identify the swap vs. insert problem, and fixed it. I ran the full dataset, and got the answer
right on my next guess. I will say that the ending of the problem confused me a bit, as I wasn't sure if I was supposed to give the sum of all middle numbers,
or just the sum of middle numbers from the previously invalid lists. Turns out it was the latter.

</details>
