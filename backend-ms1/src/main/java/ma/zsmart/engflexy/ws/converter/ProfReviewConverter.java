package  ma.zsmart.engflexy.ws.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ma.zsmart.engflexy.bean.core.Etudiant;
import ma.zsmart.engflexy.bean.core.Prof;
import ma.zsmart.engflexy.bean.core.Cours;

import ma.zsmart.engflexy.zynerator.util.StringUtil;
import ma.zsmart.engflexy.zynerator.converter.AbstractConverter;
import ma.zsmart.engflexy.zynerator.util.DateUtil;
import ma.zsmart.engflexy.bean.history.ProfReviewHistory;
import ma.zsmart.engflexy.bean.core.ProfReview;
import ma.zsmart.engflexy.ws.dto.ProfReviewDto;

@Component
public class ProfReviewConverter extends AbstractConverter<ProfReview, ProfReviewDto, ProfReviewHistory> {

    @Autowired
    private EtudiantConverter etudiantConverter ;
    @Autowired
    private CoursConverter coursConverter ;
    @Autowired
    private ProfConverter profConverter ;
    private boolean etudiant;
    private boolean prof;
    private boolean cours;

    public  ProfReviewConverter(){
        super(ProfReview.class, ProfReviewDto.class, ProfReviewHistory.class);
    }

    @Override
    public ProfReview toItem(ProfReviewDto dto) {
        if (dto == null) {
            return null;
        } else {
        ProfReview item = new ProfReview();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getReview()))
                item.setReview(dto.getReview());
            if(StringUtil.isNotEmpty(dto.getComment()))
                item.setComment(dto.getComment());
            if(StringUtil.isNotEmpty(dto.getDateReview()))
                item.setDateReview(DateUtil.stringEnToDate(dto.getDateReview()));
            if(dto.getEtudiant() != null && dto.getEtudiant().getId() != null){
                item.setEtudiant(new Etudiant());
                item.getEtudiant().setId(dto.getEtudiant().getId());
            }

            if(dto.getProf() != null && dto.getProf().getId() != null){
                item.setProf(new Prof());
                item.getProf().setId(dto.getProf().getId());
            }

            if(dto.getCours() != null && dto.getCours().getId() != null){
                item.setCours(new Cours());
                item.getCours().setId(dto.getCours().getId());
            }



        return item;
        }
    }

    @Override
    public ProfReviewDto toDto(ProfReview item) {
        if (item == null) {
            return null;
        } else {
            ProfReviewDto dto = new ProfReviewDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getReview()))
                dto.setReview(item.getReview());
            if(StringUtil.isNotEmpty(item.getComment()))
                dto.setComment(item.getComment());
            if(item.getDateReview()!=null)
                dto.setDateReview(DateUtil.dateTimeToString(item.getDateReview()));
        if(this.etudiant && item.getEtudiant()!=null) {
            dto.setEtudiant(etudiantConverter.toDto(item.getEtudiant())) ;
        }
        if(this.prof && item.getProf()!=null) {
            dto.setProf(profConverter.toDto(item.getProf())) ;
        }
        if(this.cours && item.getCours()!=null) {
            dto.setCours(coursConverter.toDto(item.getCours())) ;
        }


        return dto;
        }
    }


    public void initObject(boolean value) {
        this.etudiant = value;
        this.prof = value;
        this.cours = value;
    }


    public EtudiantConverter getEtudiantConverter(){
        return this.etudiantConverter;
    }
    public void setEtudiantConverter(EtudiantConverter etudiantConverter ){
        this.etudiantConverter = etudiantConverter;
    }
    public CoursConverter getCoursConverter(){
        return this.coursConverter;
    }
    public void setCoursConverter(CoursConverter coursConverter ){
        this.coursConverter = coursConverter;
    }
    public ProfConverter getProfConverter(){
        return this.profConverter;
    }
    public void setProfConverter(ProfConverter profConverter ){
        this.profConverter = profConverter;
    }
    public boolean  isEtudiant(){
        return this.etudiant;
    }
    public void  setEtudiant(boolean etudiant){
        this.etudiant = etudiant;
    }
    public boolean  isProf(){
        return this.prof;
    }
    public void  setProf(boolean prof){
        this.prof = prof;
    }
    public boolean  isCours(){
        return this.cours;
    }
    public void  setCours(boolean cours){
        this.cours = cours;
    }
}
