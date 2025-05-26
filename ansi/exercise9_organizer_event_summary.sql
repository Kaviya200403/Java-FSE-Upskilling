SELECT u.full_name,
  COUNT(e.event_id) AS total_events,
  SUM(e.status = 'upcoming') AS upcoming,
  SUM(e.status = 'completed') AS completed,
  SUM(e.status = 'cancelled') AS cancelled
FROM Events e
JOIN Users u ON e.organizer_id = u.user_id
GROUP BY u.user_id;
