SELECT 
  film_id,
  title,
  CASE 
    WHEN title = 'ACE GOLDFINGER' THEN 'Já assisti a esse filme'
    ELSE 'Não conheço o filme'
  END AS 'conheço o filme?'
FROM sakila.film;