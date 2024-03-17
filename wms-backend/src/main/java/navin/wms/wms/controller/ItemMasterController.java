package navin.wms.wms.controller;

import lombok.AllArgsConstructor;
import navin.wms.wms.dto.ItemMasterDto;
import navin.wms.wms.service.ItemMasterService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/item_master")
public class ItemMasterController {

    private ItemMasterService itemMasterService;

    //Build Add ItemMaster REST API
    @PostMapping
    public ResponseEntity<ItemMasterDto> createItemMaster(@RequestBody ItemMasterDto itemMasterDto){
        ItemMasterDto savedItemMaster = itemMasterService.createItemMaster(itemMasterDto);
        return new ResponseEntity<>(savedItemMaster, HttpStatus.CREATED);

    }

    //Build Get ItemMaster REST API

    @GetMapping("{id}")
    public ResponseEntity<ItemMasterDto> getItemMasterById(@PathVariable("id") Integer itemMasterId){
        ItemMasterDto itemMasterDto = itemMasterService.getItemMasterById(itemMasterId);
        return ResponseEntity.ok(itemMasterDto);
    }

    //Build Get All ItemMaster REST API

    @GetMapping
    public ResponseEntity<List<ItemMasterDto>> getAllItemMaster(){
        List<ItemMasterDto> itemMasters = itemMasterService.getAllItemMaster();
        return ResponseEntity.ok(itemMasters);
    }

    //Build Update ItemMaster REST API
    @PutMapping("{id}")
    public ResponseEntity<ItemMasterDto> updateItemMaster (@PathVariable("id") Integer itemMasterId, @RequestBody ItemMasterDto updatedItemMaster){
        ItemMasterDto itemMasterDto = itemMasterService.updateItemMaster(itemMasterId, updatedItemMaster);
        return ResponseEntity.ok(itemMasterDto);
    }

    //Build Delete ItemMaster REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteItemMaster (@PathVariable("id") Integer itemMasterId){
        itemMasterService.deleteItemMaster(itemMasterId);
        return ResponseEntity.ok("Item has been deleted successfully!");
    }

}
