package navin.wms.wms.controller;


import lombok.AllArgsConstructor;
import navin.wms.wms.dto.ReceivingDto;
import navin.wms.wms.service.ReceivingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/receiving")
public class ReceivingController {

    private ReceivingService receivingService;


    //Build Add Receiving REST API

    @PostMapping
   public ResponseEntity<ReceivingDto> createReceiving (@RequestBody ReceivingDto receivingDto){
        LocalDateTime received_date = LocalDateTime.now();
//        LocalDateTime expiry_date = LocalDateTime.now();
        receivingDto.setReceived_time(received_date);
//        receivingDto.setExpiry_date(expiry_date);
        ReceivingDto savedReceiving = receivingService.createReceiving(receivingDto);
        return new ResponseEntity<>(savedReceiving, HttpStatus.CREATED);


    }


    //Build Get Receiving by id REST API

    @GetMapping("{id}")
    public ResponseEntity<ReceivingDto> getReceivingByID(@PathVariable("id") Integer receivingID){
        ReceivingDto receivingDto = receivingService.getReceivingById(receivingID);
        return ResponseEntity.ok(receivingDto);

    }

    //Build Get All Receiving REST API

    @GetMapping
    public ResponseEntity<List<ReceivingDto>> getAllReceiving(){
        List<ReceivingDto> receivings = receivingService.getAllReceiving();
        return ResponseEntity.ok(receivings);
    }
}
