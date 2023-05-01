package  ma.zsmart.engflexy.ws.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import ma.zsmart.engflexy.zynerator.util.StringUtil;
import ma.zsmart.engflexy.zynerator.converter.AbstractConverter;
import ma.zsmart.engflexy.zynerator.util.DateUtil;
import ma.zsmart.engflexy.bean.history.ClassAverageBonusHistory;
import ma.zsmart.engflexy.bean.core.ClassAverageBonus;
import ma.zsmart.engflexy.ws.dto.ClassAverageBonusDto;

@Component
public class ClassAverageBonusConverter extends AbstractConverter<ClassAverageBonus, ClassAverageBonusDto, ClassAverageBonusHistory> {


    public  ClassAverageBonusConverter(){
        super(ClassAverageBonus.class, ClassAverageBonusDto.class, ClassAverageBonusHistory.class);
    }

    @Override
    public ClassAverageBonus toItem(ClassAverageBonusDto dto) {
        if (dto == null) {
            return null;
        } else {
        ClassAverageBonus item = new ClassAverageBonus();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getCode()))
                item.setCode(dto.getCode());
            if(StringUtil.isNotEmpty(dto.getNombreSession()))
                item.setNombreSession(dto.getNombreSession());
            if(StringUtil.isNotEmpty(dto.getPrix()))
                item.setPrix(dto.getPrix());


        return item;
        }
    }

    @Override
    public ClassAverageBonusDto toDto(ClassAverageBonus item) {
        if (item == null) {
            return null;
        } else {
            ClassAverageBonusDto dto = new ClassAverageBonusDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getCode()))
                dto.setCode(item.getCode());
            if(StringUtil.isNotEmpty(item.getNombreSession()))
                dto.setNombreSession(item.getNombreSession());
            if(StringUtil.isNotEmpty(item.getPrix()))
                dto.setPrix(item.getPrix());


        return dto;
        }
    }


    public void initObject(boolean value) {
    }


}
