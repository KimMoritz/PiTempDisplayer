package com.moritz.tempdisplayer.db;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;

@Repository
public interface TemperatureRepository extends CrudRepository<TemperatureEntity, Long> {
    public Iterable<TemperatureEntity> findByTimeIsAfter(Timestamp time);
}
