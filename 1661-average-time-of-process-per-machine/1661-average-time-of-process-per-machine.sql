# Write your MySQL query statement below

WITH process_time AS (
    SELECT 
        machine_id,
        process_id,
        MAX(CASE WHEN activity_type = 'end' THEN timestamp END) -
        MAX(CASE WHEN activity_type = 'start' THEN timestamp END) AS duration
    FROM Activity
    GROUP BY machine_id, process_id
)
SELECT 
    machine_id,
    ROUND(AVG(duration), 3) AS processing_time
FROM process_time
GROUP BY machine_id;
