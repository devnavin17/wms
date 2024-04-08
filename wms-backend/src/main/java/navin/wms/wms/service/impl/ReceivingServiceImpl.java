package navin.wms.wms.service.impl;


import lombok.AllArgsConstructor;
import navin.wms.wms.dto.ReceivingDto;
import navin.wms.wms.entity.Receiving;
import navin.wms.wms.exception.ResourceNotFoundException;
import navin.wms.wms.mapper.ReceivingMapper;
import navin.wms.wms.repository.ReceivingRepository;
import navin.wms.wms.service.ReceivingService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ReceivingServiceImpl implements ReceivingService {

    private ReceivingRepository receivingRepository;

    @Override
    public ReceivingDto createReceiving(ReceivingDto receivingDto) {
        Receiving receiving = ReceivingMapper.mapToReceiving(receivingDto);
        Receiving saved_receiving = receivingRepository.save(receiving);
        return ReceivingMapper.mapToReceivingDto(saved_receiving);
    }

    @Override
    public ReceivingDto getReceivingById (Integer receivingId) {
        Receiving receiving = receivingRepository.findById(receivingId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Receiving does not exist with give id : "+receivingId));

        return ReceivingMapper.mapToReceivingDto(receiving);
    }

    @Override
    public List<ReceivingDto> getAllReceiving() {
        
        List<Receiving> receivings = receivingRepository.findAll();
        return receivings.stream().map((receiving -> ReceivingMapper.mapToReceivingDto(receiving)))
                .collect(Collectors.toList());
    }

    @Override
    public ReceivingDto updateReceiving(Integer receivingId, ReceivingDto updatedReceiving) {

        Receiving receiving = receivingRepository.findById(receivingId).orElseThrow(
                () -> new ResourceNotFoundException("Item does not exist with given id"+receivingId)
        );

        //receiving.setId(updatedReceiving.getId()); no need to send the ID, we are sending via PutMapping URL
        receiving.setSku(updatedReceiving.getSku());
        receiving.setQty_received(updatedReceiving.getQty_received());
        receiving.setExpiry_date(updatedReceiving.getExpiry_date());
        receiving.setReceived_time(updatedReceiving.getReceived_time());
        receiving.setStatus(updatedReceiving.getStatus());

        Receiving updatedReceivingObj = receivingRepository.save(receiving);

        return ReceivingMapper.mapToReceivingDto(updatedReceivingObj);
    }
}
