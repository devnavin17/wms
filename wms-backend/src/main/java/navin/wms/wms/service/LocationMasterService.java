package navin.wms.wms.service;

import navin.wms.wms.dto.LocationMasterDto;

import java.util.List;

public interface LocationMasterService {

    LocationMasterDto createLocationMaster(LocationMasterDto locationMasterDto);

    LocationMasterDto getLocationMasterById(Integer locationMasterId);

    List<LocationMasterDto> getAllLocationMaster();

    LocationMasterDto updateLocationMaster(Integer locationMasterId, LocationMasterDto updateLocationMaster);

    void deleteLocationMaster(Integer locationMasterId);
}
