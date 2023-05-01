package ma.zsmart.engflexy.service.impl.teacher;

import ma.zsmart.engflexy.bean.core.TypeReclamationProf;
import ma.zsmart.engflexy.bean.history.TypeReclamationProfHistory;
import ma.zsmart.engflexy.dao.criteria.core.TypeReclamationProfCriteria;
import ma.zsmart.engflexy.dao.criteria.history.TypeReclamationProfHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.TypeReclamationProfDao;
import ma.zsmart.engflexy.dao.facade.history.TypeReclamationProfHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.TypeReclamationProfSpecification;
import ma.zsmart.engflexy.service.facade.teacher.TypeReclamationProfTeacherService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;






import java.util.List;
@Service
public class TypeReclamationProfTeacherServiceImpl extends AbstractServiceImpl<TypeReclamationProf,TypeReclamationProfHistory, TypeReclamationProfCriteria, TypeReclamationProfHistoryCriteria, TypeReclamationProfDao,
TypeReclamationProfHistoryDao> implements TypeReclamationProfTeacherService {


    public TypeReclamationProf findByReferenceEntity(TypeReclamationProf t){
        return  dao.findByCode(t.getCode());
    }


    public void configure() {
        super.configure(TypeReclamationProf.class,TypeReclamationProfHistory.class, TypeReclamationProfHistoryCriteria.class, TypeReclamationProfSpecification.class);
    }

    public TypeReclamationProfTeacherServiceImpl(TypeReclamationProfDao dao, TypeReclamationProfHistoryDao historyDao) {
        super(dao, historyDao);
    }

}