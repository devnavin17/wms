package navin.wms.wms.mapper;

import navin.wms.wms.dto.LocationMasterDto;
import navin.wms.wms.entity.LocationMaster;

public class LocationMasterMapper {

    public static LocationMasterDto mapToLocationMasterDto(LocationMaster locationMaster) {
        return new LocationMasterDto(
                locationMaster.getId(),
                locationMaster.getLocation(),
                locationMaster.getTi(),
                locationMaster.getHi(),
                locationMaster.getStatus()
        );
    }

    public static LocationMaster mapToLocationMaster(LocationMasterDto locationMasterDto){
        return new LocationMaster(
                locationMasterDto.getId(),
                locationMasterDto.getLocation(),
                locationMasterDto.getTi(),
                locationMasterDto.getHi(),
                locationMasterDto.getStatus()
        );
    }
}
