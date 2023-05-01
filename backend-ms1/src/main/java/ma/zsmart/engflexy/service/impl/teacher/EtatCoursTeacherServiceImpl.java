package ma.zsmart.engflexy.service.impl.teacher;

import ma.zsmart.engflexy.bean.core.EtatCours;
import ma.zsmart.engflexy.bean.history.EtatCoursHistory;
import ma.zsmart.engflexy.dao.criteria.core.EtatCoursCriteria;
import ma.zsmart.engflexy.dao.criteria.history.EtatCoursHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.EtatCoursDao;
import ma.zsmart.engflexy.dao.facade.history.EtatCoursHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.EtatCoursSpecification;
import ma.zsmart.engflexy.service.facade.teacher.EtatCoursTeacherService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;






import java.util.List;
@Service
public class EtatCoursTeacherServiceImpl extends AbstractServiceImpl<EtatCours,EtatCoursHistory, EtatCoursCriteria, EtatCoursHistoryCriteria, EtatCoursDao,
EtatCoursHistoryDao> implements EtatCoursTeacherService {


    public EtatCours findByReferenceEntity(EtatCours t){
        return  dao.findByCode(t.getCode());
    }


    public void configure() {
        super.configure(EtatCours.class,EtatCoursHistory.class, EtatCoursHistoryCriteria.class, EtatCoursSpecification.class);
    }

    public EtatCoursTeacherServiceImpl(EtatCoursDao dao, EtatCoursHistoryDao historyDao) {
        super(dao, historyDao);
    }

}