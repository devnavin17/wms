package navin.wms.wms.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "receiving")
public class Receiving {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int sku;
    private int qty_received;
    private LocalDateTime expiry_date;
    private LocalDateTime received_time;
}