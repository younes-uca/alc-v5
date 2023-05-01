package ma.zsmart.engflexy.service.impl.student;

import ma.zsmart.engflexy.bean.core.TypeHomeWork;
import ma.zsmart.engflexy.bean.history.TypeHomeWorkHistory;
import ma.zsmart.engflexy.dao.criteria.core.TypeHomeWorkCriteria;
import ma.zsmart.engflexy.dao.criteria.history.TypeHomeWorkHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.TypeHomeWorkDao;
import ma.zsmart.engflexy.dao.facade.history.TypeHomeWorkHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.TypeHomeWorkSpecification;
import ma.zsmart.engflexy.service.facade.student.TypeHomeWorkStudentService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;






import java.util.List;
@Service
public class TypeHomeWorkStudentServiceImpl extends AbstractServiceImpl<TypeHomeWork,TypeHomeWorkHistory, TypeHomeWorkCriteria, TypeHomeWorkHistoryCriteria, TypeHomeWorkDao,
TypeHomeWorkHistoryDao> implements TypeHomeWorkStudentService {


    public TypeHomeWork findByReferenceEntity(TypeHomeWork t){
        return  dao.findByCode(t.getCode());
    }


    public void configure() {
        super.configure(TypeHomeWork.class,TypeHomeWorkHistory.class, TypeHomeWorkHistoryCriteria.class, TypeHomeWorkSpecification.class);
    }

    public TypeHomeWorkStudentServiceImpl(TypeHomeWorkDao dao, TypeHomeWorkHistoryDao historyDao) {
        super(dao, historyDao);
    }

}