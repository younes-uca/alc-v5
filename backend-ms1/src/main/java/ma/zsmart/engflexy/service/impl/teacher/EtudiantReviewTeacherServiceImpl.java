package ma.zsmart.engflexy.service.impl.teacher;

import ma.zsmart.engflexy.bean.core.EtudiantReview;
import ma.zsmart.engflexy.bean.history.EtudiantReviewHistory;
import ma.zsmart.engflexy.dao.criteria.core.EtudiantReviewCriteria;
import ma.zsmart.engflexy.dao.criteria.history.EtudiantReviewHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.EtudiantReviewDao;
import ma.zsmart.engflexy.dao.facade.history.EtudiantReviewHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.EtudiantReviewSpecification;
import ma.zsmart.engflexy.service.facade.teacher.EtudiantReviewTeacherService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;


import ma.zsmart.engflexy.service.facade.teacher.CoursTeacherService ;


import java.util.List;
@Service
public class EtudiantReviewTeacherServiceImpl extends AbstractServiceImpl<EtudiantReview,EtudiantReviewHistory, EtudiantReviewCriteria, EtudiantReviewHistoryCriteria, EtudiantReviewDao,
EtudiantReviewHistoryDao> implements EtudiantReviewTeacherService {



    public List<EtudiantReview> findByEtudiantId(Long id){
        return dao.findByEtudiantId(id);
    }
    public int deleteByEtudiantId(Long id){
        return dao.deleteByEtudiantId(id);
    }
    public List<EtudiantReview> findByProfId(Long id){
        return dao.findByProfId(id);
    }
    public int deleteByProfId(Long id){
        return dao.deleteByProfId(id);
    }
    public List<EtudiantReview> findByCoursId(Long id){
        return dao.findByCoursId(id);
    }
    public int deleteByCoursId(Long id){
        return dao.deleteByCoursId(id);
    }

    public void configure() {
        super.configure(EtudiantReview.class,EtudiantReviewHistory.class, EtudiantReviewHistoryCriteria.class, EtudiantReviewSpecification.class);
    }

    @Autowired
    private CoursTeacherService coursService ;
    public EtudiantReviewTeacherServiceImpl(EtudiantReviewDao dao, EtudiantReviewHistoryDao historyDao) {
        super(dao, historyDao);
    }

}