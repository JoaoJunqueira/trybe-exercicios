SELECT a.actor_id, CONCAT(a.first_name, CONCAT(' ', a.last_name)) AS name, f.film_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;

SELECT s.first_name, s.last_name, a.address
FROM sakila.address AS a
INNER JOIN sakila.staff AS s
ON s.address_id = a.address_id;

