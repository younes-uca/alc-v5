package ma.zsmart.engflexy.service.impl.student;

import ma.zsmart.engflexy.bean.core.Fonction;
import ma.zsmart.engflexy.bean.history.FonctionHistory;
import ma.zsmart.engflexy.dao.criteria.core.FonctionCriteria;
import ma.zsmart.engflexy.dao.criteria.history.FonctionHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.FonctionDao;
import ma.zsmart.engflexy.dao.facade.history.FonctionHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.FonctionSpecification;
import ma.zsmart.engflexy.service.facade.student.FonctionStudentService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;






import java.util.List;
@Service
public class FonctionStudentServiceImpl extends AbstractServiceImpl<Fonction,FonctionHistory, FonctionCriteria, FonctionHistoryCriteria, FonctionDao,
FonctionHistoryDao> implements FonctionStudentService {


    public Fonction findByReferenceEntity(Fonction t){
        return  dao.findByCode(t.getCode());
    }


    public void configure() {
        super.configure(Fonction.class,FonctionHistory.class, FonctionHistoryCriteria.class, FonctionSpecification.class);
    }

    public FonctionStudentServiceImpl(FonctionDao dao, FonctionHistoryDao historyDao) {
        super(dao, historyDao);
    }

}