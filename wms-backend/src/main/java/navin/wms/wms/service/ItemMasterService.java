package navin.wms.wms.service;

import navin.wms.wms.dto.ItemMasterDto;

import java.util.List;

public interface ItemMasterService {

    ItemMasterDto createItemMaster(ItemMasterDto itemMasterDto);

    ItemMasterDto getItemMasterById(Integer itemMasterId);

    List<ItemMasterDto> getAllItemMaster();

    ItemMasterDto updateItemMaster(Integer itemMasterId, ItemMasterDto updatedItemMaster);

    void deleteItemMaster(Integer itemMasterId);
}
