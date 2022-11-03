# List all partitions for a table


## Problem
<!--
What do you want to achieve?
-->

You want to find out what partitions exist for a table.

## Solution
<!--
How do you do it>
-->

```sql
SELECT partition_id
FROM `my_project_name.my_dataset_name.INFORMATION_SCHEMA.PARTITIONS`
WHERE table_name = 'my_table_name'
```


## Notes
<!--
The how, why, any caveats?
-->

- Some notes

## Sources
<!--
What links, blogs, articles helped you achieve this
-->
