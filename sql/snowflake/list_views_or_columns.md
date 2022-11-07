# Topic


## Problem
<!-- 
What do you want to achieve?
-->


## Solution
<!-- 
How do you do it>
-->

```sql

-- list views
SELECT
    * 
FROM
    production.information_schema.views

-- list columns
SELECT 
    * 
FROM 
    production.information_schema.columns
WHERE
    table_name = 'my_table'
ORDER BY 
    ordinal_position
```


## Notes
<!-- 
The how, why, any caveats?
-->


## Sources
<!-- 
What links, blogs, articles helped you achieve this
-->

