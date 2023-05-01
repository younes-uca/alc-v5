package  ma.zsmart.engflexy.ws.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ma.zsmart.engflexy.bean.core.Section;
import ma.zsmart.engflexy.bean.core.VocabularyQuiz;

import ma.zsmart.engflexy.zynerator.util.StringUtil;
import ma.zsmart.engflexy.zynerator.converter.AbstractConverter;
import ma.zsmart.engflexy.zynerator.util.DateUtil;
import ma.zsmart.engflexy.bean.history.VocabularyHistory;
import ma.zsmart.engflexy.bean.core.Vocabulary;
import ma.zsmart.engflexy.ws.dto.VocabularyDto;

@Component
public class VocabularyConverter extends AbstractConverter<Vocabulary, VocabularyDto, VocabularyHistory> {

    @Autowired
    private SectionConverter sectionConverter ;
    @Autowired
    private VocabularyQuizConverter vocabularyQuizConverter ;
    private boolean section;
    private boolean vocabularyQuiz;

    public  VocabularyConverter(){
        super(Vocabulary.class, VocabularyDto.class, VocabularyHistory.class);
    }

    @Override
    public Vocabulary toItem(VocabularyDto dto) {
        if (dto == null) {
            return null;
        } else {
        Vocabulary item = new Vocabulary();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getRef()))
                item.setRef(dto.getRef());
            if(StringUtil.isNotEmpty(dto.getNumero()))
                item.setNumero(dto.getNumero());
            if(StringUtil.isNotEmpty(dto.getWord()))
                item.setWord(dto.getWord());
            if(StringUtil.isNotEmpty(dto.getLibelle()))
                item.setLibelle(dto.getLibelle());
            if(StringUtil.isNotEmpty(dto.getResult()))
                item.setResult(dto.getResult());
            if(StringUtil.isNotEmpty(dto.getExplication()))
                item.setExplication(dto.getExplication());
            if(StringUtil.isNotEmpty(dto.getExemple()))
                item.setExemple(dto.getExemple());
            if(StringUtil.isNotEmpty(dto.getImage()))
                item.setImage(dto.getImage());
            if(dto.getSection() != null && dto.getSection().getId() != null){
                item.setSection(new Section());
                item.getSection().setId(dto.getSection().getId());
            }

            if(dto.getVocabularyQuiz() != null && dto.getVocabularyQuiz().getId() != null){
                item.setVocabularyQuiz(new VocabularyQuiz());
                item.getVocabularyQuiz().setId(dto.getVocabularyQuiz().getId());
            }



        return item;
        }
    }

    @Override
    public VocabularyDto toDto(Vocabulary item) {
        if (item == null) {
            return null;
        } else {
            VocabularyDto dto = new VocabularyDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getRef()))
                dto.setRef(item.getRef());
            if(StringUtil.isNotEmpty(item.getNumero()))
                dto.setNumero(item.getNumero());
            if(StringUtil.isNotEmpty(item.getWord()))
                dto.setWord(item.getWord());
            if(StringUtil.isNotEmpty(item.getLibelle()))
                dto.setLibelle(item.getLibelle());
            if(StringUtil.isNotEmpty(item.getResult()))
                dto.setResult(item.getResult());
            if(StringUtil.isNotEmpty(item.getExplication()))
                dto.setExplication(item.getExplication());
            if(StringUtil.isNotEmpty(item.getExemple()))
                dto.setExemple(item.getExemple());
            if(StringUtil.isNotEmpty(item.getImage()))
                dto.setImage(item.getImage());
        if(this.section && item.getSection()!=null) {
            dto.setSection(sectionConverter.toDto(item.getSection())) ;
        }
        if(this.vocabularyQuiz && item.getVocabularyQuiz()!=null) {
            dto.setVocabularyQuiz(vocabularyQuizConverter.toDto(item.getVocabularyQuiz())) ;
        }


        return dto;
        }
    }


    public void initObject(boolean value) {
        this.section = value;
        this.vocabularyQuiz = value;
    }


    public SectionConverter getSectionConverter(){
        return this.sectionConverter;
    }
    public void setSectionConverter(SectionConverter sectionConverter ){
        this.sectionConverter = sectionConverter;
    }
    public VocabularyQuizConverter getVocabularyQuizConverter(){
        return this.vocabularyQuizConverter;
    }
    public void setVocabularyQuizConverter(VocabularyQuizConverter vocabularyQuizConverter ){
        this.vocabularyQuizConverter = vocabularyQuizConverter;
    }
    public boolean  isSection(){
        return this.section;
    }
    public void  setSection(boolean section){
        this.section = section;
    }
    public boolean  isVocabularyQuiz(){
        return this.vocabularyQuiz;
    }
    public void  setVocabularyQuiz(boolean vocabularyQuiz){
        this.vocabularyQuiz = vocabularyQuiz;
    }
}
