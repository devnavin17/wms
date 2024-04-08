package navin.wms.wms.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ItemStorageDto {
    private int id;
    private int sku;
    private int qty;
    private String storage_id;
}
