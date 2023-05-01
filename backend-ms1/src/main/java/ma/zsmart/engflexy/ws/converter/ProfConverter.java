package  ma.zsmart.engflexy.ws.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ma.zsmart.engflexy.zynerator.util.ListUtil;

import ma.zsmart.engflexy.bean.core.Parcours;
import ma.zsmart.engflexy.bean.core.CategorieProf;

import ma.zsmart.engflexy.zynerator.util.StringUtil;
import ma.zsmart.engflexy.zynerator.converter.AbstractConverter;
import ma.zsmart.engflexy.zynerator.util.DateUtil;
import ma.zsmart.engflexy.bean.history.ProfHistory;
import ma.zsmart.engflexy.bean.core.Prof;
import ma.zsmart.engflexy.ws.dto.ProfDto;

@Component
public class ProfConverter extends AbstractConverter<Prof, ProfDto, ProfHistory> {

    @Autowired
    private TypeTeacherConverter typeTeacherConverter ;
    @Autowired
    private QuizConverter quizConverter ;
    @Autowired
    private EtudiantClassRoomConverter etudiantClassRoomConverter ;
    @Autowired
    private ParcoursConverter parcoursConverter ;
    @Autowired
    private CategorieProfConverter categorieProfConverter ;
    @Autowired
    private QuizClassRoomConverter quizClassRoomConverter ;
    @Autowired
    private TrancheHoraireProfConverter trancheHoraireProfConverter ;
    @Autowired
    private ClassRoomConverter classRoomConverter ;
    @Autowired
    private EtudiantConverter etudiantConverter ;
    @Autowired
    private RecommendTeacherConverter recommendTeacherConverter ;
    private boolean parcours;
    private boolean categorieProf;
    private boolean typeTeacher;
    private boolean trancheHoraireProfs;
    private boolean classRooms;
    private boolean recommendTeachers;

    public  ProfConverter(){
        super(Prof.class, ProfDto.class, ProfHistory.class);
        init(true);
    }

    @Override
    public Prof toItem(ProfDto dto) {
        if (dto == null) {
            return null;
        } else {
        Prof item = new Prof();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getRef()))
                item.setRef(dto.getRef());
            if(StringUtil.isNotEmpty(dto.getAbout()))
                item.setAbout(dto.getAbout());
            if(StringUtil.isNotEmpty(dto.getEmail()))
                item.setEmail(dto.getEmail());
            if(dto.getParcours() != null && dto.getParcours().getId() != null){
                item.setParcours(new Parcours());
                item.getParcours().setId(dto.getParcours().getId());
            }

            if(dto.getCategorieProf() != null && dto.getCategorieProf().getId() != null){
                item.setCategorieProf(new CategorieProf());
                item.getCategorieProf().setId(dto.getCategorieProf().getId());
            }

            if(this.typeTeacher && dto.getTypeTeacher()!=null)
                item.setTypeTeacher(typeTeacherConverter.toItem(dto.getTypeTeacher())) ;


            if(this.trancheHoraireProfs && ListUtil.isNotEmpty(dto.getTrancheHoraireProfs()))
                item.setTrancheHoraireProfs(trancheHoraireProfConverter.toItem(dto.getTrancheHoraireProfs()));
            if(this.classRooms && ListUtil.isNotEmpty(dto.getClassRooms()))
                item.setClassRooms(classRoomConverter.toItem(dto.getClassRooms()));
            if(this.recommendTeachers && ListUtil.isNotEmpty(dto.getRecommendTeachers()))
                item.setRecommendTeachers(recommendTeacherConverter.toItem(dto.getRecommendTeachers()));

        return item;
        }
    }

    @Override
    public ProfDto toDto(Prof item) {
        if (item == null) {
            return null;
        } else {
            ProfDto dto = new ProfDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getRef()))
                dto.setRef(item.getRef());
            if(StringUtil.isNotEmpty(item.getAbout()))
                dto.setAbout(item.getAbout());
            if(StringUtil.isNotEmpty(item.getEmail()))
                dto.setEmail(item.getEmail());
        if(this.parcours && item.getParcours()!=null) {
            dto.setParcours(parcoursConverter.toDto(item.getParcours())) ;
        }
        if(this.categorieProf && item.getCategorieProf()!=null) {
            dto.setCategorieProf(categorieProfConverter.toDto(item.getCategorieProf())) ;
        }
        if(this.typeTeacher && item.getTypeTeacher()!=null) {
            dto.setTypeTeacher(typeTeacherConverter.toDto(item.getTypeTeacher())) ;
        }
        if(this.trancheHoraireProfs && ListUtil.isNotEmpty(item.getTrancheHoraireProfs())){
            trancheHoraireProfConverter.init(true);
            trancheHoraireProfConverter.setProf(false);
            dto.setTrancheHoraireProfs(trancheHoraireProfConverter.toDto(item.getTrancheHoraireProfs()));
            trancheHoraireProfConverter.setProf(true);

        }
        if(this.classRooms && ListUtil.isNotEmpty(item.getClassRooms())){
            classRoomConverter.init(true);
            classRoomConverter.setProf(false);
            dto.setClassRooms(classRoomConverter.toDto(item.getClassRooms()));
            classRoomConverter.setProf(true);

        }
        if(this.recommendTeachers && ListUtil.isNotEmpty(item.getRecommendTeachers())){
            recommendTeacherConverter.init(true);
            recommendTeacherConverter.setProf(false);
            dto.setRecommendTeachers(recommendTeacherConverter.toDto(item.getRecommendTeachers()));
            recommendTeacherConverter.setProf(true);

        }


        return dto;
        }
    }

    public void initList(boolean value) {
        this.trancheHoraireProfs = value;
        this.classRooms = value;
        this.recommendTeachers = value;
    }

    public void initObject(boolean value) {
        this.parcours = value;
        this.categorieProf = value;
        this.typeTeacher = value;
    }


    public TypeTeacherConverter getTypeTeacherConverter(){
        return this.typeTeacherConverter;
    }
    public void setTypeTeacherConverter(TypeTeacherConverter typeTeacherConverter ){
        this.typeTeacherConverter = typeTeacherConverter;
    }
    public QuizConverter getQuizConverter(){
        return this.quizConverter;
    }
    public void setQuizConverter(QuizConverter quizConverter ){
        this.quizConverter = quizConverter;
    }
    public EtudiantClassRoomConverter getEtudiantClassRoomConverter(){
        return this.etudiantClassRoomConverter;
    }
    public void setEtudiantClassRoomConverter(EtudiantClassRoomConverter etudiantClassRoomConverter ){
        this.etudiantClassRoomConverter = etudiantClassRoomConverter;
    }
    public ParcoursConverter getParcoursConverter(){
        return this.parcoursConverter;
    }
    public void setParcoursConverter(ParcoursConverter parcoursConverter ){
        this.parcoursConverter = parcoursConverter;
    }
    public CategorieProfConverter getCategorieProfConverter(){
        return this.categorieProfConverter;
    }
    public void setCategorieProfConverter(CategorieProfConverter categorieProfConverter ){
        this.categorieProfConverter = categorieProfConverter;
    }
    public QuizClassRoomConverter getQuizClassRoomConverter(){
        return this.quizClassRoomConverter;
    }
    public void setQuizClassRoomConverter(QuizClassRoomConverter quizClassRoomConverter ){
        this.quizClassRoomConverter = quizClassRoomConverter;
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
    public EtudiantConverter getEtudiantConverter(){
        return this.etudiantConverter;
    }
    public void setEtudiantConverter(EtudiantConverter etudiantConverter ){
        this.etudiantConverter = etudiantConverter;
    }
    public RecommendTeacherConverter getRecommendTeacherConverter(){
        return this.recommendTeacherConverter;
    }
    public void setRecommendTeacherConverter(RecommendTeacherConverter recommendTeacherConverter ){
        this.recommendTeacherConverter = recommendTeacherConverter;
    }
    public boolean  isParcours(){
        return this.parcours;
    }
    public void  setParcours(boolean parcours){
        this.parcours = parcours;
    }
    public boolean  isCategorieProf(){
        return this.categorieProf;
    }
    public void  setCategorieProf(boolean categorieProf){
        this.categorieProf = categorieProf;
    }
    public boolean  isTypeTeacher(){
        return this.typeTeacher;
    }
    public void  setTypeTeacher(boolean typeTeacher){
        this.typeTeacher = typeTeacher;
    }
    public boolean  isTrancheHoraireProfs(){
        return this.trancheHoraireProfs ;
    }
    public void  setTrancheHoraireProfs(boolean trancheHoraireProfs ){
        this.trancheHoraireProfs  = trancheHoraireProfs ;
    }
    public boolean  isClassRooms(){
        return this.classRooms ;
    }
    public void  setClassRooms(boolean classRooms ){
        this.classRooms  = classRooms ;
    }
    public boolean  isRecommendTeachers(){
        return this.recommendTeachers ;
    }
    public void  setRecommendTeachers(boolean recommendTeachers ){
        this.recommendTeachers  = recommendTeachers ;
    }
}
