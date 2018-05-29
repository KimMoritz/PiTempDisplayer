package com.moritz.tempdisplayer.db;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TemperatureRepository extends CrudRepository<TemperatureEntity, Long> {
}
