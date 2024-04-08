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
@Table(name = "item_storage")
public class ItemStorage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int sku;
    private int qty;
    private String storage_id;
}
