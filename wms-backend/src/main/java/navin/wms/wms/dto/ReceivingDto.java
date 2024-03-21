package navin.wms.wms.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReceivingDto {
    private int id;
    private int sku;
    private int qty_received;
    private LocalDate expiry_date;
    private LocalDateTime received_time;
    private int status;
}
