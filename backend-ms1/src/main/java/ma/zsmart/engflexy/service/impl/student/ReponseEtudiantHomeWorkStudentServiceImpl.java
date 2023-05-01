package ma.zsmart.engflexy.service.impl.student;

import ma.zsmart.engflexy.bean.core.ReponseEtudiantHomeWork;
import ma.zsmart.engflexy.bean.history.ReponseEtudiantHomeWorkHistory;
import ma.zsmart.engflexy.dao.criteria.core.ReponseEtudiantHomeWorkCriteria;
import ma.zsmart.engflexy.dao.criteria.history.ReponseEtudiantHomeWorkHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.ReponseEtudiantHomeWorkDao;
import ma.zsmart.engflexy.dao.facade.history.ReponseEtudiantHomeWorkHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.ReponseEtudiantHomeWorkSpecification;
import ma.zsmart.engflexy.service.facade.student.ReponseEtudiantHomeWorkStudentService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;


import ma.zsmart.engflexy.service.facade.student.HoweWorkQSTReponseStudentService ;
import ma.zsmart.engflexy.service.facade.student.HomeWorkQuestionStudentService ;
import ma.zsmart.engflexy.service.facade.student.HomeWorkEtudiantStudentService ;


import java.util.List;
@Service
public class ReponseEtudiantHomeWorkStudentServiceImpl extends AbstractServiceImpl<ReponseEtudiantHomeWork,ReponseEtudiantHomeWorkHistory, ReponseEtudiantHomeWorkCriteria, ReponseEtudiantHomeWorkHistoryCriteria, ReponseEtudiantHomeWorkDao,
ReponseEtudiantHomeWorkHistoryDao> implements ReponseEtudiantHomeWorkStudentService {



    public List<ReponseEtudiantHomeWork> findByHoweWorkQSTReponseId(Long id){
        return dao.findByHoweWorkQSTReponseId(id);
    }
    public int deleteByHoweWorkQSTReponseId(Long id){
        return dao.deleteByHoweWorkQSTReponseId(id);
    }
    public List<ReponseEtudiantHomeWork> findByHomeWorkEtudiantId(Long id){
        return dao.findByHomeWorkEtudiantId(id);
    }
    public int deleteByHomeWorkEtudiantId(Long id){
        return dao.deleteByHomeWorkEtudiantId(id);
    }
    public List<ReponseEtudiantHomeWork> findByHomeWorkQuestionId(Long id){
        return dao.findByHomeWorkQuestionId(id);
    }
    public int deleteByHomeWorkQuestionId(Long id){
        return dao.deleteByHomeWorkQuestionId(id);
    }

    public void configure() {
        super.configure(ReponseEtudiantHomeWork.class,ReponseEtudiantHomeWorkHistory.class, ReponseEtudiantHomeWorkHistoryCriteria.class, ReponseEtudiantHomeWorkSpecification.class);
    }

    @Autowired
    private HoweWorkQSTReponseStudentService howeWorkQSTReponseService ;
    @Autowired
    private HomeWorkQuestionStudentService homeWorkQuestionService ;
    @Autowired
    private HomeWorkEtudiantStudentService homeWorkEtudiantService ;
    public ReponseEtudiantHomeWorkStudentServiceImpl(ReponseEtudiantHomeWorkDao dao, ReponseEtudiantHomeWorkHistoryDao historyDao) {
        super(dao, historyDao);
    }

}