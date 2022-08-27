SELECT 5 + 5;
SELECT 5 - 5;
SELECT 5 * 5;
SELECT 5 / 5;

SELECT rental_duration + rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration - rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration / rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration * rental_rate FROM sakila.film LIMIT 10;

SELECT 10 DIV 3;
SELECT 10 DIV 2;
SELECT 14 DIV 3;
SELECT 13 DIV 2;

SELECT 10 MOD 3;
SELECT 10 MOD 2;
SELECT 14 MOD 3;
SELECT 13 MOD 2;
SELECT 10.5 MOD 2;

SELECT ROUND(10.4925);
SELECT ROUND(10.5136);
SELECT ROUND(-10.5136);
SELECT ROUND(10.4925, 2);
SELECT ROUND(10.4925, 3);