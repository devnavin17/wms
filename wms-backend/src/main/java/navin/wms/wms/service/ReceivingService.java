package navin.wms.wms.service;

import navin.wms.wms.dto.ReceivingDto;

import java.util.List;

public interface ReceivingService {

    ReceivingDto createReceiving (ReceivingDto receivingDto);

    ReceivingDto getReceivingById (Integer receivingId);

    List<ReceivingDto> getAllReceiving ();

    ReceivingDto updateReceiving(Integer receivingId, ReceivingDto updatedReceiving);
}

