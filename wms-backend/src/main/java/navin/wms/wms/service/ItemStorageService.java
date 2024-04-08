package navin.wms.wms.service;

import navin.wms.wms.dto.ItemStorageDto;

import java.util.List;

public interface ItemStorageService {

    ItemStorageDto createItemStorage(ItemStorageDto itemStorageDto);

    ItemStorageDto getItemStorageById(Integer itemStorageId);

    List<ItemStorageDto> getAllItemStorage();

    ItemStorageDto updateItemStorage(Integer itemStorageId, ItemStorageDto updatedItemStorage);

    void deleteItemStorage(Integer itemStorageId);
}
