# List files changed in current branch


## Problem
<!-- 
What do you want to achieve?
-->

You want to list all the files you've changed in your current branch.


## Solution
<!-- 
How do you do it>
-->

```commandline
git diff --diff-filter=MA --name-status master...
```


## Notes
<!-- 
The how, why, any caveats?
-->

- Swap `master` with the name of the branch you'd like to compare your current branch to. E.g if you want to compare your feature-branch to your dev branch, you'd write `git diff --diff-filter=MA --name-status dev...`
- Use the `--diff-filter=` arg to specify which files to list, in the above example, it filters on (**M**)odified and (**A**)dded files only

## Sources
<!-- 
What links, blogs, articles helped you achieve this
-->
- [How to list files changed in current branch (and run prettier on them)](https://dev.to/darraghor/how-to-list-files-changed-in-current-branch-and-run-prettier-on-them-38oe)
- [git diff docs](https://git-scm.com/docs/git-diff#Documentation/git-diff.txt---diff-filterACDMRTUXB82308203)
