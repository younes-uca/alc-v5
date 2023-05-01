package ma.zsmart.engflexy.service.impl.teacher;

import ma.zsmart.engflexy.bean.core.ResultatHomeWork;
import ma.zsmart.engflexy.bean.history.ResultatHomeWorkHistory;
import ma.zsmart.engflexy.dao.criteria.core.ResultatHomeWorkCriteria;
import ma.zsmart.engflexy.dao.criteria.history.ResultatHomeWorkHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.ResultatHomeWorkDao;
import ma.zsmart.engflexy.dao.facade.history.ResultatHomeWorkHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.ResultatHomeWorkSpecification;
import ma.zsmart.engflexy.service.facade.teacher.ResultatHomeWorkTeacherService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;






import java.util.List;
@Service
public class ResultatHomeWorkTeacherServiceImpl extends AbstractServiceImpl<ResultatHomeWork,ResultatHomeWorkHistory, ResultatHomeWorkCriteria, ResultatHomeWorkHistoryCriteria, ResultatHomeWorkDao,
ResultatHomeWorkHistoryDao> implements ResultatHomeWorkTeacherService {


    public ResultatHomeWork findByReferenceEntity(ResultatHomeWork t){
        return  dao.findByCode(t.getCode());
    }


    public void configure() {
        super.configure(ResultatHomeWork.class,ResultatHomeWorkHistory.class, ResultatHomeWorkHistoryCriteria.class, ResultatHomeWorkSpecification.class);
    }

    public ResultatHomeWorkTeacherServiceImpl(ResultatHomeWorkDao dao, ResultatHomeWorkHistoryDao historyDao) {
        super(dao, historyDao);
    }

}