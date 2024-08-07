package one.hdcola.server.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import one.hdcola.server.entity.Item;

import java.util.List;

@Data
@AllArgsConstructor
@Builder
public class ItemResponseDto {
    private Long id;
    private String name;
    private String description;
    private Float price;
    @JsonProperty("image_url")
    private String imageUrl;

    public ItemResponseDto(Item item) {
        this.id = item.getId();
        this.name = item.getName();
        this.description = item.getDescription();
        this.price = item.getPrice();
        this.imageUrl = item.getImageUrl();
    }

    public static List<ItemResponseDto> fromItems(List<Item> items) {
        return items.stream().map(ItemResponseDto::new).toList();
    }
}
