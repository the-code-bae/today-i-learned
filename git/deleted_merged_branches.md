# Topic


## Problem
<!-- 
What do you want to achieve?
-->
You want to quickly clean up all your local branches that have been merged on the remote. 


## Solution
<!-- 
How do you do it>
-->

```commandline
git branch --merged | egrep -v "dev|main|master" | xargs git branch -d
```


## Notes
<!-- 
The how, why, any caveats?
-->

- You can enter branch names you wish to keep within "this_branch|that_branch"
- Regex is supported so you can get fancy and sophisticated with it!

## Sources
<!-- 
What links, blogs, articles helped you achieve this
-->
- [How do I delete all Git branches which have been merged?](https://stackoverflow.com/questions/6127328/how-do-i-delete-all-git-branches-which-have-been-merged)
