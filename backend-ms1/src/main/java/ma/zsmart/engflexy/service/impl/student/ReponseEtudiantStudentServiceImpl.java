package ma.zsmart.engflexy.service.impl.student;

import ma.zsmart.engflexy.bean.core.ReponseEtudiant;
import ma.zsmart.engflexy.bean.history.ReponseEtudiantHistory;
import ma.zsmart.engflexy.dao.criteria.core.ReponseEtudiantCriteria;
import ma.zsmart.engflexy.dao.criteria.history.ReponseEtudiantHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.ReponseEtudiantDao;
import ma.zsmart.engflexy.dao.facade.history.ReponseEtudiantHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.ReponseEtudiantSpecification;
import ma.zsmart.engflexy.service.facade.student.ReponseEtudiantStudentService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;


import ma.zsmart.engflexy.service.facade.student.QuizEtudiantStudentService ;
import ma.zsmart.engflexy.service.facade.student.QuestionStudentService ;


import java.util.List;
@Service
public class ReponseEtudiantStudentServiceImpl extends AbstractServiceImpl<ReponseEtudiant,ReponseEtudiantHistory, ReponseEtudiantCriteria, ReponseEtudiantHistoryCriteria, ReponseEtudiantDao,
ReponseEtudiantHistoryDao> implements ReponseEtudiantStudentService {


    public ReponseEtudiant findByReferenceEntity(ReponseEtudiant t){
        return  dao.findByRef(t.getRef());
    }

    public List<ReponseEtudiant> findByReponseId(Long id){
        return dao.findByReponseId(id);
    }
    public int deleteByReponseId(Long id){
        return dao.deleteByReponseId(id);
    }
    public List<ReponseEtudiant> findByQuizEtudiantId(Long id){
        return dao.findByQuizEtudiantId(id);
    }
    public int deleteByQuizEtudiantId(Long id){
        return dao.deleteByQuizEtudiantId(id);
    }
    public List<ReponseEtudiant> findByQuestionId(Long id){
        return dao.findByQuestionId(id);
    }
    public int deleteByQuestionId(Long id){
        return dao.deleteByQuestionId(id);
    }

    public void configure() {
        super.configure(ReponseEtudiant.class,ReponseEtudiantHistory.class, ReponseEtudiantHistoryCriteria.class, ReponseEtudiantSpecification.class);
    }

    @Autowired
    private QuizEtudiantStudentService quizEtudiantService ;
    @Autowired
    private QuestionStudentService questionService ;
    public ReponseEtudiantStudentServiceImpl(ReponseEtudiantDao dao, ReponseEtudiantHistoryDao historyDao) {
        super(dao, historyDao);
    }

}