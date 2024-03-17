package navin.wms.wms.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LocationMasterDto {
    private int id;
    private String location;
    private int ti;
    private int hi;
    private int status;
}
