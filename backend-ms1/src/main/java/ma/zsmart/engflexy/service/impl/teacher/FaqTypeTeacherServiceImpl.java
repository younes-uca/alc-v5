package ma.zsmart.engflexy.service.impl.teacher;

import ma.zsmart.engflexy.bean.core.FaqType;
import ma.zsmart.engflexy.bean.history.FaqTypeHistory;
import ma.zsmart.engflexy.dao.criteria.core.FaqTypeCriteria;
import ma.zsmart.engflexy.dao.criteria.history.FaqTypeHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.FaqTypeDao;
import ma.zsmart.engflexy.dao.facade.history.FaqTypeHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.FaqTypeSpecification;
import ma.zsmart.engflexy.service.facade.teacher.FaqTypeTeacherService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;






import java.util.List;
@Service
public class FaqTypeTeacherServiceImpl extends AbstractServiceImpl<FaqType,FaqTypeHistory, FaqTypeCriteria, FaqTypeHistoryCriteria, FaqTypeDao,
FaqTypeHistoryDao> implements FaqTypeTeacherService {




    public void configure() {
        super.configure(FaqType.class,FaqTypeHistory.class, FaqTypeHistoryCriteria.class, FaqTypeSpecification.class);
    }

    public FaqTypeTeacherServiceImpl(FaqTypeDao dao, FaqTypeHistoryDao historyDao) {
        super(dao, historyDao);
    }

}