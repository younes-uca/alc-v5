package  ma.zsmart.engflexy.ws.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import ma.zsmart.engflexy.zynerator.util.StringUtil;
import ma.zsmart.engflexy.zynerator.converter.AbstractConverter;
import ma.zsmart.engflexy.zynerator.util.DateUtil;
import ma.zsmart.engflexy.bean.history.FreeTrialConfigurationHistory;
import ma.zsmart.engflexy.bean.core.FreeTrialConfiguration;
import ma.zsmart.engflexy.ws.dto.FreeTrialConfigurationDto;

@Component
public class FreeTrialConfigurationConverter extends AbstractConverter<FreeTrialConfiguration, FreeTrialConfigurationDto, FreeTrialConfigurationHistory> {


    public  FreeTrialConfigurationConverter(){
        super(FreeTrialConfiguration.class, FreeTrialConfigurationDto.class, FreeTrialConfigurationHistory.class);
    }

    @Override
    public FreeTrialConfiguration toItem(FreeTrialConfigurationDto dto) {
        if (dto == null) {
            return null;
        } else {
        FreeTrialConfiguration item = new FreeTrialConfiguration();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getDateApplicationDebut()))
                item.setDateApplicationDebut(DateUtil.stringEnToDate(dto.getDateApplicationDebut()));
            if(StringUtil.isNotEmpty(dto.getDateApplicationFin()))
                item.setDateApplicationFin(DateUtil.stringEnToDate(dto.getDateApplicationFin()));
            if(StringUtil.isNotEmpty(dto.getNombreStudentMax()))
                item.setNombreStudentMax(dto.getNombreStudentMax());
            if(StringUtil.isNotEmpty(dto.getNombreStudentMin()))
                item.setNombreStudentMin(dto.getNombreStudentMin());


        return item;
        }
    }

    @Override
    public FreeTrialConfigurationDto toDto(FreeTrialConfiguration item) {
        if (item == null) {
            return null;
        } else {
            FreeTrialConfigurationDto dto = new FreeTrialConfigurationDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(item.getDateApplicationDebut()!=null)
                dto.setDateApplicationDebut(DateUtil.dateTimeToString(item.getDateApplicationDebut()));
            if(item.getDateApplicationFin()!=null)
                dto.setDateApplicationFin(DateUtil.dateTimeToString(item.getDateApplicationFin()));
            if(StringUtil.isNotEmpty(item.getNombreStudentMax()))
                dto.setNombreStudentMax(item.getNombreStudentMax());
            if(StringUtil.isNotEmpty(item.getNombreStudentMin()))
                dto.setNombreStudentMin(item.getNombreStudentMin());


        return dto;
        }
    }


    public void initObject(boolean value) {
    }


}
