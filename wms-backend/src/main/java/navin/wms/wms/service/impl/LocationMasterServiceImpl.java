package navin.wms.wms.service.impl;

import lombok.AllArgsConstructor;
import navin.wms.wms.dto.LocationMasterDto;
import navin.wms.wms.entity.ItemMaster;
import navin.wms.wms.entity.LocationMaster;
import navin.wms.wms.exception.ResourceNotFoundException;
import navin.wms.wms.mapper.LocationMasterMapper;
import navin.wms.wms.repository.LocationMasterRepository;
import navin.wms.wms.service.LocationMasterService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class LocationMasterServiceImpl implements LocationMasterService {

    private LocationMasterRepository locationMasterRepository;

    @Override
    public LocationMasterDto createLocationMaster(LocationMasterDto locationMasterDto) {

        LocationMaster locationMaster = LocationMasterMapper.mapToLocationMaster(locationMasterDto);
        LocationMaster saved_location_master = locationMasterRepository.save(locationMaster);
        return LocationMasterMapper.mapToLocationMasterDto(saved_location_master);
    }

    @Override
    public LocationMasterDto getLocationMasterById(Integer locationMasterId) {
        LocationMaster locationMaster = locationMasterRepository.findById(locationMasterId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Location with given id: "+locationMasterId +"does not exist"));

        return LocationMasterMapper.mapToLocationMasterDto(locationMaster);
    }

    @Override
    public List<LocationMasterDto> getAllLocationMaster() {

        List<LocationMaster> locationMasters = locationMasterRepository.findAll();
        return locationMasters.stream().map((locationMaster) -> LocationMasterMapper.mapToLocationMasterDto(locationMaster))
                .collect(Collectors.toList());
    }

    @Override
    public LocationMasterDto updateLocationMaster(Integer locationMasterId, LocationMasterDto updatedLocationMaster) {

        LocationMaster locationMaster = locationMasterRepository.findById(locationMasterId).orElseThrow(
                () -> new ResourceNotFoundException("Location does not exist with given id"+locationMasterId)
        );

        locationMaster.setLocation(updatedLocationMaster.getLocation());
        locationMaster.setTi(updatedLocationMaster.getTi());
        locationMaster.setHi(updatedLocationMaster.getHi());
        locationMaster.setStatus(updatedLocationMaster.getStatus());

        LocationMaster updatedLocationMasterObj = locationMasterRepository.save(locationMaster);

        return LocationMasterMapper.mapToLocationMasterDto(updatedLocationMasterObj);
    }

    @Override
    public void deleteLocationMaster(Integer locationMasterId) {

        LocationMaster locationMaster = locationMasterRepository.findById(locationMasterId).orElseThrow(
                () -> new ResourceNotFoundException("Location does not exist with given id: " + locationMasterId)
        );

        locationMasterRepository.deleteById(locationMasterId);
    }
}