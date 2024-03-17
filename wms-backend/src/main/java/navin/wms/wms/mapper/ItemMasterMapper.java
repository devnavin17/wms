package navin.wms.wms.mapper;

import navin.wms.wms.dto.ItemMasterDto;
import navin.wms.wms.entity.ItemMaster;

public class ItemMasterMapper {

    public static ItemMasterDto maptoItemMasterDto(ItemMaster itemMaster){
        return new ItemMasterDto(
                itemMaster.getId(),
                itemMaster.getSku(),
                itemMaster.getAttribute1(),
                itemMaster.getAttribute2()
        );
    }

    public static ItemMaster mapToItemMaster(ItemMasterDto itemMasterDto){
        return new ItemMaster(
                itemMasterDto.getId(),
                itemMasterDto.getSku(),
                itemMasterDto.getAttribute1(),
                itemMasterDto.getAttribute2()
        );
    }
}
