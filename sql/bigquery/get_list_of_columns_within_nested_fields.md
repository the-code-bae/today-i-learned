# Topic


## Problem
<!-- 
What do you want to achieve?
-->
You want to list all columns within a table included deeply nested columns.

## Solution
<!-- 
How do you do it>
-->

```sql
SELECT 
    *
FROM 
    `my_project_name.my_dataset_name.INFORMATION_SCHEMA.COLUMN_FIELD_PATHS`
WHERE 
    table_name = 'my_table_name'
```


## Notes
<!-- 
The how, why, any caveats?
-->



## Sources
<!-- 
What links, blogs, articles helped you achieve this
-->

