# Topic


## Problem
<!-- 
What do you want to achieve?
-->

You want to create a new column in a pandas dataframe using a function that accepts multiple arguments.


## Solution
<!-- 
How do you do it>
-->

```python
import pandas as pd

d = {'col1': [1, 2], 'col2': [3, 4]}

df = pd.DataFrame(data=d)

print(f'Before \n\n',df, '\n')

def sum(a, b):
    return (a + b)

df['col3'] = df.apply(lambda x: sum(x['col1'], x['col2']), axis=1)

print(f'After \n\n', df)
```


## Notes
<!-- 
The how, why, any caveats?
-->


## Sources
<!-- 
What links, blogs, articles helped you achieve this
-->
- [How to apply a function with multiple arguments to create a new pandas DataFrame column in Python](https://www.adamsmith.haus/python/answers/how-to-apply-a-function-with-multiple-arguments-to-create-a-new-pandas-dataframe-column-in-python)
