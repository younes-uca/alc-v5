package ma.zsmart.engflexy.service.impl.teacher;

import ma.zsmart.engflexy.bean.core.ClassAverageBonus;
import ma.zsmart.engflexy.bean.history.ClassAverageBonusHistory;
import ma.zsmart.engflexy.dao.criteria.core.ClassAverageBonusCriteria;
import ma.zsmart.engflexy.dao.criteria.history.ClassAverageBonusHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.ClassAverageBonusDao;
import ma.zsmart.engflexy.dao.facade.history.ClassAverageBonusHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.ClassAverageBonusSpecification;
import ma.zsmart.engflexy.service.facade.teacher.ClassAverageBonusTeacherService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;






import java.util.List;
@Service
public class ClassAverageBonusTeacherServiceImpl extends AbstractServiceImpl<ClassAverageBonus,ClassAverageBonusHistory, ClassAverageBonusCriteria, ClassAverageBonusHistoryCriteria, ClassAverageBonusDao,
ClassAverageBonusHistoryDao> implements ClassAverageBonusTeacherService {


    public ClassAverageBonus findByReferenceEntity(ClassAverageBonus t){
        return  dao.findByCode(t.getCode());
    }


    public void configure() {
        super.configure(ClassAverageBonus.class,ClassAverageBonusHistory.class, ClassAverageBonusHistoryCriteria.class, ClassAverageBonusSpecification.class);
    }

    public ClassAverageBonusTeacherServiceImpl(ClassAverageBonusDao dao, ClassAverageBonusHistoryDao historyDao) {
        super(dao, historyDao);
    }

}