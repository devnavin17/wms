package navin.wms.wms.controller;

import lombok.AllArgsConstructor;
import navin.wms.wms.dto.ItemStorageDto;
import navin.wms.wms.service.ItemStorageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/item_storage")
public class ItemStorageController {

    private ItemStorageService ItemStorageService;

    //Build Add ItemStorage REST API
    @PostMapping
    public ResponseEntity<ItemStorageDto> createItemStorage(@RequestBody ItemStorageDto ItemStorageDto){
        ItemStorageDto savedItemStorage = ItemStorageService.createItemStorage(ItemStorageDto);
        return new ResponseEntity<>(savedItemStorage, HttpStatus.CREATED);

    }

    //Build Get ItemStorage REST API

    @GetMapping("{id}")
    public ResponseEntity<ItemStorageDto> getItemStorageById(@PathVariable("id") Integer ItemStorageId){
        ItemStorageDto ItemStorageDto = ItemStorageService.getItemStorageById(ItemStorageId);
        return ResponseEntity.ok(ItemStorageDto);
    }

    //Build Get All ItemStorage REST API

    @GetMapping
    public ResponseEntity<List<ItemStorageDto>> getAllItemStorage(){
        List<ItemStorageDto> ItemStorages = ItemStorageService.getAllItemStorage();
        return ResponseEntity.ok(ItemStorages);
    }

    //Build Update ItemStorage REST API

    @PutMapping("{id}")
    public ResponseEntity<ItemStorageDto> updateItemStorage (@PathVariable("id") Integer ItemStorageId, @RequestBody ItemStorageDto updatedItemStorage){
        ItemStorageDto ItemStorageDto = ItemStorageService.updateItemStorage(ItemStorageId, updatedItemStorage);
        return ResponseEntity.ok(ItemStorageDto);
    }

    //Build Delete ItemStorage REST API

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteItemStorage (@PathVariable("id") Integer ItemStorageId){
        ItemStorageService.deleteItemStorage(ItemStorageId);
        return ResponseEntity.ok("Item has been deleted successfully!");
    }

}
