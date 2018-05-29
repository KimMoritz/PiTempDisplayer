package com.moritz.tempdisplayer;

import com.moritz.tempdisplayer.db.TemperatureEntity;
import com.moritz.tempdisplayer.db.TemperatureRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestController
public class TempController {
    @Autowired
    TemperatureRepository temperatureRepository;

    @RequestMapping("/a")
    public String apa(){
        Iterable<TemperatureEntity> temperatureEntities = temperatureRepository.findAll();
        Map<LocalDateTime, Double> temps = new HashMap<>();
        temperatureEntities.forEach(temperatureEntity -> temps.put(temperatureEntity.getTime().toLocalDateTime(), temperatureEntity.getTemperature()));

        return new JSONObject(temps).toString();
    }

}
