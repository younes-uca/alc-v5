package ma.zsmart.engflexy.service.impl.teacher;

import ma.zsmart.engflexy.bean.core.FaqProf;
import ma.zsmart.engflexy.bean.history.FaqProfHistory;
import ma.zsmart.engflexy.dao.criteria.core.FaqProfCriteria;
import ma.zsmart.engflexy.dao.criteria.history.FaqProfHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.FaqProfDao;
import ma.zsmart.engflexy.dao.facade.history.FaqProfHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.FaqProfSpecification;
import ma.zsmart.engflexy.service.facade.teacher.FaqProfTeacherService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;


import ma.zsmart.engflexy.service.facade.teacher.FaqTypeTeacherService ;


import java.util.List;
@Service
public class FaqProfTeacherServiceImpl extends AbstractServiceImpl<FaqProf,FaqProfHistory, FaqProfCriteria, FaqProfHistoryCriteria, FaqProfDao,
FaqProfHistoryDao> implements FaqProfTeacherService {



    public List<FaqProf> findByProfId(Long id){
        return dao.findByProfId(id);
    }
    public int deleteByProfId(Long id){
        return dao.deleteByProfId(id);
    }
    public List<FaqProf> findByAdminId(Long id){
        return dao.findByAdminId(id);
    }
    public int deleteByAdminId(Long id){
        return dao.deleteByAdminId(id);
    }
    public List<FaqProf> findByFaqTypeId(Long id){
        return dao.findByFaqTypeId(id);
    }
    public int deleteByFaqTypeId(Long id){
        return dao.deleteByFaqTypeId(id);
    }

    public void configure() {
        super.configure(FaqProf.class,FaqProfHistory.class, FaqProfHistoryCriteria.class, FaqProfSpecification.class);
    }

    @Autowired
    private FaqTypeTeacherService faqTypeService ;
    public FaqProfTeacherServiceImpl(FaqProfDao dao, FaqProfHistoryDao historyDao) {
        super(dao, historyDao);
    }

}