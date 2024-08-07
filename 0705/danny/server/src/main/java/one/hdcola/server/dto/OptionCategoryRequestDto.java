package one.hdcola.server.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import one.hdcola.server.entity.OptionCategory;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@Builder
public class OptionCategoryRequestDto {
    private Long id;
    private String name;
    @JsonProperty("max_selection")
    private Integer maxSelection;
    @JsonProperty("min_selection")
    private Integer minSelection;
    private Boolean required;
    private Boolean multiple;
    @JsonProperty("allow_custom")
    private Boolean allowCustom;
    @JsonProperty("allow_quantity")
    private Boolean allowQuantity;
    @JsonProperty("extra_options")
    private List<ExtraOptionRequestDto> extraOptions;

    public OptionCategory toEntity() {
        return OptionCategory.builder()
                .id(id)
                .name(name)
                .maxSelection(maxSelection)
                .minSelection(minSelection)
                .required(required)
                .multiple(multiple)
                .allowCustom(allowCustom)
                .allowQuantity(allowQuantity)
                .extraOptions(extraOptions == null ? new ArrayList<>() : extraOptions.stream().map(ExtraOptionRequestDto::toEntity).toList())
                .build();
    }

    public OptionCategory toNewEntity() {
        return OptionCategory.builder()
                .name(name)
                .maxSelection(maxSelection)
                .minSelection(minSelection)
                .required(required)
                .multiple(multiple)
                .allowCustom(allowCustom)
                .allowQuantity(allowQuantity)
                .extraOptions(extraOptions == null ? new ArrayList<>() : extraOptions.stream().map(ExtraOptionRequestDto::toNewEntity).toList())
                .build();
    }
}
