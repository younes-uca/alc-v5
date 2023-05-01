package ma.zsmart.engflexy.service.impl.teacher;

import ma.zsmart.engflexy.bean.core.RecommendTeacher;
import ma.zsmart.engflexy.bean.history.RecommendTeacherHistory;
import ma.zsmart.engflexy.dao.criteria.core.RecommendTeacherCriteria;
import ma.zsmart.engflexy.dao.criteria.history.RecommendTeacherHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.RecommendTeacherDao;
import ma.zsmart.engflexy.dao.facade.history.RecommendTeacherHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.RecommendTeacherSpecification;
import ma.zsmart.engflexy.service.facade.teacher.RecommendTeacherTeacherService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;




import java.util.List;
@Service
public class RecommendTeacherTeacherServiceImpl extends AbstractServiceImpl<RecommendTeacher,RecommendTeacherHistory, RecommendTeacherCriteria, RecommendTeacherHistoryCriteria, RecommendTeacherDao,
RecommendTeacherHistoryDao> implements RecommendTeacherTeacherService {


    public RecommendTeacher findByReferenceEntity(RecommendTeacher t){
        return  dao.findByRef(t.getRef());
    }

    public List<RecommendTeacher> findByProfId(Long id){
        return dao.findByProfId(id);
    }
    public int deleteByProfId(Long id){
        return dao.deleteByProfId(id);
    }

    public void configure() {
        super.configure(RecommendTeacher.class,RecommendTeacherHistory.class, RecommendTeacherHistoryCriteria.class, RecommendTeacherSpecification.class);
    }

    public RecommendTeacherTeacherServiceImpl(RecommendTeacherDao dao, RecommendTeacherHistoryDao historyDao) {
        super(dao, historyDao);
    }

}