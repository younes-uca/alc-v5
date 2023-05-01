package ma.zsmart.engflexy.service.impl.teacher;

import ma.zsmart.engflexy.bean.core.VocabularyQuiz;
import ma.zsmart.engflexy.bean.history.VocabularyQuizHistory;
import ma.zsmart.engflexy.dao.criteria.core.VocabularyQuizCriteria;
import ma.zsmart.engflexy.dao.criteria.history.VocabularyQuizHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.VocabularyQuizDao;
import ma.zsmart.engflexy.dao.facade.history.VocabularyQuizHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.VocabularyQuizSpecification;
import ma.zsmart.engflexy.service.facade.teacher.VocabularyQuizTeacherService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import ma.zsmart.engflexy.bean.core.Vocabulary;

import ma.zsmart.engflexy.service.facade.teacher.VocabularyTeacherService ;
import ma.zsmart.engflexy.service.facade.teacher.SectionTeacherService ;


import java.util.List;
@Service
public class VocabularyQuizTeacherServiceImpl extends AbstractServiceImpl<VocabularyQuiz,VocabularyQuizHistory, VocabularyQuizCriteria, VocabularyQuizHistoryCriteria, VocabularyQuizDao,
VocabularyQuizHistoryDao> implements VocabularyQuizTeacherService {

    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public VocabularyQuiz create(VocabularyQuiz t) {
        super.create(t);
        if (t.getVocabularys() != null) {
                t.getVocabularys().forEach(element-> {
                    element.setVocabularyQuiz(t);
                    vocabularyService.create(element);
            });
        }
        return t;
    }

    public VocabularyQuiz findWithAssociatedLists(Long id){
        VocabularyQuiz result = dao.findById(id).orElse(null);
        if(result!=null && result.getId() != null) {
            result.setVocabularys(vocabularyService.findByVocabularyQuizId(id));
        }
        return result;
    }
    @Transactional
    public void deleteAssociatedLists(Long id) {
        vocabularyService.deleteByVocabularyQuizId(id);
    }


    public void updateWithAssociatedLists(VocabularyQuiz vocabularyQuiz){
    if(vocabularyQuiz !=null && vocabularyQuiz.getId() != null){
            List<List<Vocabulary>> resultVocabularys= vocabularyService.getToBeSavedAndToBeDeleted(vocabularyService.findByVocabularyQuizId(vocabularyQuiz.getId()),vocabularyQuiz.getVocabularys());
            vocabularyService.delete(resultVocabularys.get(1));
            ListUtil.emptyIfNull(resultVocabularys.get(0)).forEach(e -> e.setVocabularyQuiz(vocabularyQuiz));
            vocabularyService.update(resultVocabularys.get(0),true);
    }
    }


    public List<VocabularyQuiz> findBySectionId(Long id){
        return dao.findBySectionId(id);
    }
    public int deleteBySectionId(Long id){
        return dao.deleteBySectionId(id);
    }

    public void configure() {
        super.configure(VocabularyQuiz.class,VocabularyQuizHistory.class, VocabularyQuizHistoryCriteria.class, VocabularyQuizSpecification.class);
    }

    @Autowired
    private VocabularyTeacherService vocabularyService ;
    @Autowired
    private SectionTeacherService sectionService ;
    public VocabularyQuizTeacherServiceImpl(VocabularyQuizDao dao, VocabularyQuizHistoryDao historyDao) {
        super(dao, historyDao);
    }

}