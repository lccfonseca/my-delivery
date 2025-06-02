DELIMITER //

CREATE PROCEDURE near_cities(
    IN ref_lat DOUBLE,
    IN ref_lon DOUBLE,
    IN radius_km DOUBLE,
    IN max_results INT
)
BEGIN
SELECT 
    id,
    name,
    state,
    latitude,
    longitude,
    ST_Distance_Sphere(
        POINT(ref_lon, ref_lat),
        POINT(longitude, latitude)
    ) / 1000 AS distance_km
FROM 
    city
WHERE 
    (latitude != ref_lat OR longitude != ref_lon)
    AND ST_Distance_Sphere(
        POINT(ref_lon, ref_lat),
        POINT(longitude, latitude)
    ) <= radius_km * 1000
ORDER BY 
    distance_km ASC
LIMIT max_results;
END //

DELIMITER ;