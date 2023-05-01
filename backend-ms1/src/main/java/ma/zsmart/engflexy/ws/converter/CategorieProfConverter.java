package  ma.zsmart.engflexy.ws.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ma.zsmart.engflexy.zynerator.util.ListUtil;


import ma.zsmart.engflexy.zynerator.util.StringUtil;
import ma.zsmart.engflexy.zynerator.converter.AbstractConverter;
import ma.zsmart.engflexy.zynerator.util.DateUtil;
import ma.zsmart.engflexy.bean.history.CategorieProfHistory;
import ma.zsmart.engflexy.bean.core.CategorieProf;
import ma.zsmart.engflexy.ws.dto.CategorieProfDto;

@Component
public class CategorieProfConverter extends AbstractConverter<CategorieProf, CategorieProfDto, CategorieProfHistory> {

    @Autowired
    private RecommendTeacherConverter recommendTeacherConverter ;
    @Autowired
    private ParcoursConverter parcoursConverter ;
    @Autowired
    private TypeTeacherConverter typeTeacherConverter ;
    @Autowired
    private TrancheHoraireProfConverter trancheHoraireProfConverter ;
    @Autowired
    private ClassRoomConverter classRoomConverter ;
    @Autowired
    private ProfConverter profConverter ;
    private boolean profs;

    public  CategorieProfConverter(){
        super(CategorieProf.class, CategorieProfDto.class, CategorieProfHistory.class);
        init(true);
    }

    @Override
    public CategorieProf toItem(CategorieProfDto dto) {
        if (dto == null) {
            return null;
        } else {
        CategorieProf item = new CategorieProf();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getCode()))
                item.setCode(dto.getCode());
            if(StringUtil.isNotEmpty(dto.getLevel()))
                item.setLevel(dto.getLevel());
            if(StringUtil.isNotEmpty(dto.getLessonRate()))
                item.setLessonRate(dto.getLessonRate());

            if(this.profs && ListUtil.isNotEmpty(dto.getProfs()))
                item.setProfs(profConverter.toItem(dto.getProfs()));

        return item;
        }
    }

    @Override
    public CategorieProfDto toDto(CategorieProf item) {
        if (item == null) {
            return null;
        } else {
            CategorieProfDto dto = new CategorieProfDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getCode()))
                dto.setCode(item.getCode());
            if(StringUtil.isNotEmpty(item.getLevel()))
                dto.setLevel(item.getLevel());
            if(StringUtil.isNotEmpty(item.getLessonRate()))
                dto.setLessonRate(item.getLessonRate());
        if(this.profs && ListUtil.isNotEmpty(item.getProfs())){
            profConverter.init(true);
            profConverter.setCategorieProf(false);
            dto.setProfs(profConverter.toDto(item.getProfs()));
            profConverter.setCategorieProf(true);

        }


        return dto;
        }
    }

    public void initList(boolean value) {
        this.profs = value;
    }

    public void initObject(boolean value) {
    }


    public RecommendTeacherConverter getRecommendTeacherConverter(){
        return this.recommendTeacherConverter;
    }
    public void setRecommendTeacherConverter(RecommendTeacherConverter recommendTeacherConverter ){
        this.recommendTeacherConverter = recommendTeacherConverter;
    }
    public ParcoursConverter getParcoursConverter(){
        return this.parcoursConverter;
    }
    public void setParcoursConverter(ParcoursConverter parcoursConverter ){
        this.parcoursConverter = parcoursConverter;
    }
    public TypeTeacherConverter getTypeTeacherConverter(){
        return this.typeTeacherConverter;
    }
    public void setTypeTeacherConverter(TypeTeacherConverter typeTeacherConverter ){
        this.typeTeacherConverter = typeTeacherConverter;
    }
    public TrancheHoraireProfConverter getTrancheHoraireProfConverter(){
        return this.trancheHoraireProfConverter;
    }
    public void setTrancheHoraireProfConverter(TrancheHoraireProfConverter trancheHoraireProfConverter ){
        this.trancheHoraireProfConverter = trancheHoraireProfConverter;
    }
    public ClassRoomConverter getClassRoomConverter(){
        return this.classRoomConverter;
    }
    public void setClassRoomConverter(ClassRoomConverter classRoomConverter ){
        this.classRoomConverter = classRoomConverter;
    }
    public ProfConverter getProfConverter(){
        return this.profConverter;
    }
    public void setProfConverter(ProfConverter profConverter ){
        this.profConverter = profConverter;
    }
    public boolean  isProfs(){
        return this.profs ;
    }
    public void  setProfs(boolean profs ){
        this.profs  = profs ;
    }
}
