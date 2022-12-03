# Topic


## Problem
<!-- 
What do you want to achieve?
-->
You want to use the library pathlib to access system files instead of os.

## Solution
<!-- 
How do you do it>
-->

```python
import pathlib

CURRENT_FOLDER_FILE_PATH = pathlib.Path(__file__).parent
CURRENT_FILE_PATH = pathlib.Path(__file__)

print(f'This file exists within this folder: {CURRENT_FOLDER_FILE_PATH}')
print(f'The absolute filepath of the current file is: {CURRENT_FILE_PATH}')


```


## Notes
<!-- 
The how, why, any caveats?
-->

- Personally I find `pathlib` easier to use than the `os` library because I find it to be less obscure and more easily understood. There are lots of articles online which compare the two e.g.

    - [Python Pathlib Is Better Than the OS Module for Handling Files. Here’s How to Use It.](https://builtin.com/software-engineering-perspectives/python-pathlib)
    - [Why you should be using pathlib](https://treyhunner.com/2018/12/why-you-should-be-using-pathlib/)


## Sources
<!-- 
What links, blogs, articles helped you achieve this
-->
- [Python pathlib - Zetcode](https://zetcode.com/python/pathlib/)
