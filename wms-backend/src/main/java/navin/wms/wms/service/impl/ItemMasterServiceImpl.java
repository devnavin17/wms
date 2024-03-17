package navin.wms.wms.service.impl;

import lombok.AllArgsConstructor;
import navin.wms.wms.dto.ItemMasterDto;
import navin.wms.wms.entity.ItemMaster;
import navin.wms.wms.exception.ResourceNotFoundException;
import navin.wms.wms.mapper.ItemMasterMapper;
import navin.wms.wms.repository.ItemMasterRepository;
import navin.wms.wms.service.ItemMasterService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ItemMasterServiceImpl implements ItemMasterService {

    private ItemMasterRepository itemMasterRepository;

    @Override
    public ItemMasterDto createItemMaster(ItemMasterDto itemMasterDto) {

        ItemMaster itemMaster = ItemMasterMapper.mapToItemMaster(itemMasterDto);
        ItemMaster saved_item_master = itemMasterRepository.save(itemMaster);
        return ItemMasterMapper.maptoItemMasterDto(saved_item_master);

    }

    @Override
    public ItemMasterDto getItemMasterById(Integer itemMasterId) {
        ItemMaster itemMaster = itemMasterRepository.findById(itemMasterId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Item does not exist with given id : "+itemMasterId));

        return ItemMasterMapper.maptoItemMasterDto(itemMaster);
    }

    @Override
    public List<ItemMasterDto> getAllItemMaster() {

        List<ItemMaster> itemMasters = itemMasterRepository.findAll();
        return itemMasters.stream().map((itemMaster) -> ItemMasterMapper.maptoItemMasterDto(itemMaster))
                .collect(Collectors.toList());
    }

    @Override
    public ItemMasterDto updateItemMaster(Integer itemMasterId, ItemMasterDto updatedItemMaster) {

        ItemMaster itemMaster = itemMasterRepository.findById(itemMasterId).orElseThrow(
                () -> new ResourceNotFoundException("Item does not exist with given id"+itemMasterId)
        );

        //itemMaster.setId(updatedItemMaster.getId()); no need to send the ID, we are sending via PutMapping URL
        itemMaster.setSku(updatedItemMaster.getSku());
        itemMaster.setAttribute1(updatedItemMaster.getAttribute1());
        itemMaster.setAttribute2(updatedItemMaster.getAttribute2());

        ItemMaster updatedItemMasterObj = itemMasterRepository.save(itemMaster);

        return ItemMasterMapper.maptoItemMasterDto(updatedItemMasterObj);
    }

    @Override
    public void deleteItemMaster(Integer itemMasterId) {

        ItemMaster itemMaster = itemMasterRepository.findById(itemMasterId).orElseThrow(
                () -> new ResourceNotFoundException("Item does not exist with given id"+itemMasterId)
        );

        itemMasterRepository.deleteById(itemMasterId);

    }

}
