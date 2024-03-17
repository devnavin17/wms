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
}
