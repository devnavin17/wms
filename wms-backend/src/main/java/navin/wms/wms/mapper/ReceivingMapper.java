package navin.wms.wms.mapper;

import navin.wms.wms.dto.ReceivingDto;
import navin.wms.wms.entity.Receiving;

public class ReceivingMapper {

    public static ReceivingDto mapToReceivingDto(Receiving receiving){
        return new ReceivingDto(
                receiving.getId(),
                receiving.getSku(),
                receiving.getQty_received(),
                receiving.getExpiry_date(),
                receiving.getReceived_time(),
                receiving.getStatus()
        );
    }

    public static Receiving mapToReceiving(ReceivingDto receivingDto){
        return new Receiving(
                receivingDto.getId(),
                receivingDto.getSku(),
                receivingDto.getQty_received(),
                receivingDto.getExpiry_date(),
                receivingDto.getReceived_time(),
                receivingDto.getStatus()
        );
    }
}
