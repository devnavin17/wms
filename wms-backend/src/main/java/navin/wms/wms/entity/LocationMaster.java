package navin.wms.wms.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="location_master")
public class LocationMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String location;
    private int ti;
    private int hi;
    private int status;

}
