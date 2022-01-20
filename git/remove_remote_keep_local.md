# Removing a file remotely, but keep locally


## Problem
You have a file that you no longer want to be on github but you want to keep the file locally. 

## Solution

```commandline
# Use this command if you want to remove individual files
git rm --cached file-name.txt

# Use this command if you want to remove a whole folder 
git rm -r --cached folder-name

# Commit changes and push to remote
git commit -m "removed file-name and/or folder-name"
git push origin master or branch-name
```

Your files/folder should now be deleted!

## Notes
- Although you remove the file from the remote location, it won't delete the file and all it's history, the commit history will still be visible to the public if it is a public repo. **It is important to make sure that you never push sensitive information if you don't want it to be potentially discovered.**

## Sources
- [mir4ef gist](https://gist.github.com/mir4ef/dfe0f8fa7e27633347c575510298e501)
- [code grepper - git remove file but keep local](https://www.codegrepper.com/code-examples/shell/git+remove+file+but+keep+local)
- [Removing sensitive data from a repository](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)