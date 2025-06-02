SET @ref_lat = -23.5505;    -- Parâmetro: latitude da cidade de referência
SET @ref_lon = -46.6333;    -- Parâmetro: longitude da cidade de referência
SET @raio_km = 100;         -- Raio de busca em quilômetros

SELECT 
    id,
    name,
    state,
    latitude,
    longitude,
    ST_Distance_Sphere(
        POINT(@ref_lon, @ref_lat),
        POINT(longitude, latitude)
    ) / 1000 AS distancia_km
FROM 
    city
WHERE 
    (latitude != @ref_lat OR longitude != @ref_lon)
    AND ST_Distance_Sphere(
        POINT(@ref_lon, @ref_lat),
        POINT(longitude, latitude)
    ) <= @raio_km * 1000
ORDER BY 
    distancia_km ASC
LIMIT 20;