package navin.wms.wms.controller;

import lombok.AllArgsConstructor;
import navin.wms.wms.dto.LocationMasterDto;
import navin.wms.wms.service.LocationMasterService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/location_master")
public class LocationMasterController {

    private LocationMasterService locationMasterService;

    //Build API LocationMaster REST API

    @PostMapping
    public ResponseEntity<LocationMasterDto> createLocationMaster(@RequestBody LocationMasterDto locationMasterDto){
        LocationMasterDto savedLocationMaster = locationMasterService.createLocationMaster(locationMasterDto);
        return new ResponseEntity<>(savedLocationMaster, HttpStatus.CREATED);
    }

    //Build Get LocationMaster REST API

    @GetMapping("{id}")
    public ResponseEntity<LocationMasterDto> getLocationMasterById(@PathVariable("id") Integer locationMasterId){
        LocationMasterDto locationMasterDto = locationMasterService.getLocationMasterById(locationMasterId);
        return ResponseEntity.ok(locationMasterDto);
    }

    // Build Get All LocationMaster REST API

    @GetMapping
    public ResponseEntity<List<LocationMasterDto>> getAllLocationMasterById(){
        List<LocationMasterDto> locationMasters = locationMasterService.getAllLocationMaster();
        return ResponseEntity.ok(locationMasters);
    }

    //Build Update LocationMaster REST API

    @PutMapping("{id}")
    public ResponseEntity<LocationMasterDto> updateLocationMaster (@PathVariable("id") Integer locationMasterId,@RequestBody LocationMasterDto updatedLocationMasterDto){
        LocationMasterDto locationMasterDto = locationMasterService.updateLocationMaster(locationMasterId, updatedLocationMasterDto);
        return ResponseEntity.ok(locationMasterDto);
    }


    //Build Delete LocationMaster REST API

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteLocationMaster (@PathVariable("id") Integer locationMasterId){
        locationMasterService.deleteLocationMaster(locationMasterId);
        return ResponseEntity.ok("Location has been deleted successfully");

    }

}