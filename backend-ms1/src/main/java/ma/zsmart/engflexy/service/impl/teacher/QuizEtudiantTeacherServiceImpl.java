package ma.zsmart.engflexy.service.impl.teacher;

import ma.zsmart.engflexy.bean.core.QuizEtudiant;
import ma.zsmart.engflexy.bean.history.QuizEtudiantHistory;
import ma.zsmart.engflexy.dao.criteria.core.QuizEtudiantCriteria;
import ma.zsmart.engflexy.dao.criteria.history.QuizEtudiantHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.QuizEtudiantDao;
import ma.zsmart.engflexy.dao.facade.history.QuizEtudiantHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.QuizEtudiantSpecification;
import ma.zsmart.engflexy.service.facade.teacher.QuizEtudiantTeacherService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import ma.zsmart.engflexy.bean.core.ReponseEtudiant;

import ma.zsmart.engflexy.service.facade.teacher.QuizTeacherService ;
import ma.zsmart.engflexy.service.facade.teacher.ReponseEtudiantTeacherService ;


import java.util.List;
@Service
public class QuizEtudiantTeacherServiceImpl extends AbstractServiceImpl<QuizEtudiant,QuizEtudiantHistory, QuizEtudiantCriteria, QuizEtudiantHistoryCriteria, QuizEtudiantDao,
QuizEtudiantHistoryDao> implements QuizEtudiantTeacherService {

    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public QuizEtudiant create(QuizEtudiant t) {
        super.create(t);
        if (t.getReponseEtudiants() != null) {
                t.getReponseEtudiants().forEach(element-> {
                    element.setQuizEtudiant(t);
                    reponseEtudiantService.create(element);
            });
        }
        return t;
    }

    public QuizEtudiant findWithAssociatedLists(Long id){
        QuizEtudiant result = dao.findById(id).orElse(null);
        if(result!=null && result.getId() != null) {
            result.setReponseEtudiants(reponseEtudiantService.findByQuizEtudiantId(id));
        }
        return result;
    }
    @Transactional
    public void deleteAssociatedLists(Long id) {
        reponseEtudiantService.deleteByQuizEtudiantId(id);
    }


    public void updateWithAssociatedLists(QuizEtudiant quizEtudiant){
    if(quizEtudiant !=null && quizEtudiant.getId() != null){
            List<List<ReponseEtudiant>> resultReponseEtudiants= reponseEtudiantService.getToBeSavedAndToBeDeleted(reponseEtudiantService.findByQuizEtudiantId(quizEtudiant.getId()),quizEtudiant.getReponseEtudiants());
            reponseEtudiantService.delete(resultReponseEtudiants.get(1));
            ListUtil.emptyIfNull(resultReponseEtudiants.get(0)).forEach(e -> e.setQuizEtudiant(quizEtudiant));
            reponseEtudiantService.update(resultReponseEtudiants.get(0),true);
    }
    }

    public QuizEtudiant findByReferenceEntity(QuizEtudiant t){
        return  dao.findByRef(t.getRef());
    }

    public List<QuizEtudiant> findByEtudiantId(Long id){
        return dao.findByEtudiantId(id);
    }
    public int deleteByEtudiantId(Long id){
        return dao.deleteByEtudiantId(id);
    }
    public List<QuizEtudiant> findByQuizId(Long id){
        return dao.findByQuizId(id);
    }
    public int deleteByQuizId(Long id){
        return dao.deleteByQuizId(id);
    }

    public void configure() {
        super.configure(QuizEtudiant.class,QuizEtudiantHistory.class, QuizEtudiantHistoryCriteria.class, QuizEtudiantSpecification.class);
    }

    @Autowired
    private QuizTeacherService quizService ;
    @Autowired
    private ReponseEtudiantTeacherService reponseEtudiantService ;
    public QuizEtudiantTeacherServiceImpl(QuizEtudiantDao dao, QuizEtudiantHistoryDao historyDao) {
        super(dao, historyDao);
    }

}