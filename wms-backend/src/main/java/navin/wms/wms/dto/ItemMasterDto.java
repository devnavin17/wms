package navin.wms.wms.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ItemMasterDto {
    private int id;
    private int sku;
    private String attribute1;
    private String attribute2;
}
