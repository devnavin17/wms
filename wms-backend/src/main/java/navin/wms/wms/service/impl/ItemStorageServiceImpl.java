package navin.wms.wms.service.impl;

import lombok.AllArgsConstructor;
import navin.wms.wms.dto.ItemStorageDto;
import navin.wms.wms.entity.ItemStorage;
import navin.wms.wms.exception.ResourceNotFoundException;
import navin.wms.wms.mapper.ItemStorageMapper;
import navin.wms.wms.repository.ItemStorageRepository;
import navin.wms.wms.service.ItemStorageService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ItemStorageServiceImpl implements ItemStorageService {

    private ItemStorageRepository itemStorageRepository;

    @Override
    public ItemStorageDto createItemStorage(ItemStorageDto itemStorageDto) {

        ItemStorage itemStorage = ItemStorageMapper.mapToItemStorage(itemStorageDto);
        ItemStorage saved_item_master = itemStorageRepository.save(itemStorage);
        return ItemStorageMapper.maptoItemStorageDto(saved_item_master);

    }

    @Override
    public ItemStorageDto getItemStorageById(Integer itemStorageId) {
        ItemStorage itemStorage = itemStorageRepository.findById(itemStorageId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Item does not exist with given id : "+itemStorageId));

        return ItemStorageMapper.maptoItemStorageDto(itemStorage);
    }

    @Override
    public List<ItemStorageDto> getAllItemStorage() {

        List<ItemStorage> itemStorages = itemStorageRepository.findAll();
        return itemStorages.stream().map((itemStorage) -> ItemStorageMapper.maptoItemStorageDto(itemStorage))
                .collect(Collectors.toList());
    }

    @Override
    public ItemStorageDto updateItemStorage(Integer itemStorageId, ItemStorageDto updatedItemStorage) {

        ItemStorage itemStorage = itemStorageRepository.findById(itemStorageId).orElseThrow(
                () -> new ResourceNotFoundException("Item does not exist with given id"+itemStorageId)
        );

        //itemStorage.setId(updatedItemStorage.getId()); no need to send the ID, we are sending via PutMapping URL
        itemStorage.setSku(updatedItemStorage.getSku());
        itemStorage.setQty(updatedItemStorage.getQty());
        itemStorage.setStorage_id(updatedItemStorage.getStorage_id());

        ItemStorage updatedItemStorageObj = itemStorageRepository.save(itemStorage);

        return ItemStorageMapper.maptoItemStorageDto(updatedItemStorageObj);
    }

    @Override
    public void deleteItemStorage(Integer itemStorageId) {

        ItemStorage itemStorage = itemStorageRepository.findById(itemStorageId).orElseThrow(
                () -> new ResourceNotFoundException("Item does not exist with given id"+itemStorageId)
        );

        itemStorageRepository.deleteById(itemStorageId);

    }

}
