package ma.zsmart.engflexy.service.impl.student;

import ma.zsmart.engflexy.bean.core.FaqType;
import ma.zsmart.engflexy.bean.history.FaqTypeHistory;
import ma.zsmart.engflexy.dao.criteria.core.FaqTypeCriteria;
import ma.zsmart.engflexy.dao.criteria.history.FaqTypeHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.FaqTypeDao;
import ma.zsmart.engflexy.dao.facade.history.FaqTypeHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.FaqTypeSpecification;
import ma.zsmart.engflexy.service.facade.student.FaqTypeStudentService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;






import java.util.List;
@Service
public class FaqTypeStudentServiceImpl extends AbstractServiceImpl<FaqType,FaqTypeHistory, FaqTypeCriteria, FaqTypeHistoryCriteria, FaqTypeDao,
FaqTypeHistoryDao> implements FaqTypeStudentService {




    public void configure() {
        super.configure(FaqType.class,FaqTypeHistory.class, FaqTypeHistoryCriteria.class, FaqTypeSpecification.class);
    }

    public FaqTypeStudentServiceImpl(FaqTypeDao dao, FaqTypeHistoryDao historyDao) {
        super(dao, historyDao);
    }

}