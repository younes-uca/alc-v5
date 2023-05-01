package ma.zsmart.engflexy.service.impl.student;

import ma.zsmart.engflexy.bean.core.StatutSocial;
import ma.zsmart.engflexy.bean.history.StatutSocialHistory;
import ma.zsmart.engflexy.dao.criteria.core.StatutSocialCriteria;
import ma.zsmart.engflexy.dao.criteria.history.StatutSocialHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.StatutSocialDao;
import ma.zsmart.engflexy.dao.facade.history.StatutSocialHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.StatutSocialSpecification;
import ma.zsmart.engflexy.service.facade.student.StatutSocialStudentService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;






import java.util.List;
@Service
public class StatutSocialStudentServiceImpl extends AbstractServiceImpl<StatutSocial,StatutSocialHistory, StatutSocialCriteria, StatutSocialHistoryCriteria, StatutSocialDao,
StatutSocialHistoryDao> implements StatutSocialStudentService {


    public StatutSocial findByReferenceEntity(StatutSocial t){
        return  dao.findByCode(t.getCode());
    }


    public void configure() {
        super.configure(StatutSocial.class,StatutSocialHistory.class, StatutSocialHistoryCriteria.class, StatutSocialSpecification.class);
    }

    public StatutSocialStudentServiceImpl(StatutSocialDao dao, StatutSocialHistoryDao historyDao) {
        super(dao, historyDao);
    }

}