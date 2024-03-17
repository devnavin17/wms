package navin.wms.wms.service;

import navin.wms.wms.dto.ReceivingDto;
import navin.wms.wms.entity.Receiving;

import java.util.List;

public interface ReceivingService {

    ReceivingDto createReceiving (ReceivingDto receivingDto);

    ReceivingDto getReceivingById (Integer receivingId);

    List<ReceivingDto> getAllReceiving ();
}

