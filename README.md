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

<details open>

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
