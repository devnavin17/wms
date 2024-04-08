package navin.wms.wms.mapper;

import navin.wms.wms.dto.ItemStorageDto;
import navin.wms.wms.entity.ItemStorage;

public class ItemStorageMapper {

    public static ItemStorageDto maptoItemStorageDto(ItemStorage itemStorage){
        return new ItemStorageDto(
                itemStorage.getId(),
                itemStorage.getSku(),
                itemStorage.getQty(),
                itemStorage.getStorage_id()
        );
    }

    public static ItemStorage mapToItemStorage(ItemStorageDto itemStorageDto){
        return new ItemStorage(
                itemStorageDto.getId(),
                itemStorageDto.getSku(),
                itemStorageDto.getQty(),
                itemStorageDto.getStorage_id()
        );
    }
}
