package ma.zsmart.engflexy.service.impl.student;

import ma.zsmart.engflexy.bean.core.Vocabulary;
import ma.zsmart.engflexy.bean.history.VocabularyHistory;
import ma.zsmart.engflexy.dao.criteria.core.VocabularyCriteria;
import ma.zsmart.engflexy.dao.criteria.history.VocabularyHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.VocabularyDao;
import ma.zsmart.engflexy.dao.facade.history.VocabularyHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.VocabularySpecification;
import ma.zsmart.engflexy.service.facade.student.VocabularyStudentService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;


import ma.zsmart.engflexy.service.facade.student.SectionStudentService ;
import ma.zsmart.engflexy.service.facade.student.VocabularyQuizStudentService ;


import java.util.List;
@Service
public class VocabularyStudentServiceImpl extends AbstractServiceImpl<Vocabulary,VocabularyHistory, VocabularyCriteria, VocabularyHistoryCriteria, VocabularyDao,
VocabularyHistoryDao> implements VocabularyStudentService {



    public List<Vocabulary> findBySectionId(Long id){
        return dao.findBySectionId(id);
    }
    public int deleteBySectionId(Long id){
        return dao.deleteBySectionId(id);
    }
    public List<Vocabulary> findByVocabularyQuizId(Long id){
        return dao.findByVocabularyQuizId(id);
    }
    public int deleteByVocabularyQuizId(Long id){
        return dao.deleteByVocabularyQuizId(id);
    }

    public void configure() {
        super.configure(Vocabulary.class,VocabularyHistory.class, VocabularyHistoryCriteria.class, VocabularySpecification.class);
    }

    @Autowired
    private SectionStudentService sectionService ;
    @Autowired
    private VocabularyQuizStudentService vocabularyQuizService ;
    public VocabularyStudentServiceImpl(VocabularyDao dao, VocabularyHistoryDao historyDao) {
        super(dao, historyDao);
    }

}