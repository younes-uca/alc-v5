package ma.zsmart.engflexy.service.impl.student;

import ma.zsmart.engflexy.bean.core.InteretEtudiant;
import ma.zsmart.engflexy.bean.history.InteretEtudiantHistory;
import ma.zsmart.engflexy.dao.criteria.core.InteretEtudiantCriteria;
import ma.zsmart.engflexy.dao.criteria.history.InteretEtudiantHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.InteretEtudiantDao;
import ma.zsmart.engflexy.dao.facade.history.InteretEtudiantHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.InteretEtudiantSpecification;
import ma.zsmart.engflexy.service.facade.student.InteretEtudiantStudentService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;






import java.util.List;
@Service
public class InteretEtudiantStudentServiceImpl extends AbstractServiceImpl<InteretEtudiant,InteretEtudiantHistory, InteretEtudiantCriteria, InteretEtudiantHistoryCriteria, InteretEtudiantDao,
InteretEtudiantHistoryDao> implements InteretEtudiantStudentService {


    public InteretEtudiant findByReferenceEntity(InteretEtudiant t){
        return  dao.findByCode(t.getCode());
    }


    public void configure() {
        super.configure(InteretEtudiant.class,InteretEtudiantHistory.class, InteretEtudiantHistoryCriteria.class, InteretEtudiantSpecification.class);
    }

    public InteretEtudiantStudentServiceImpl(InteretEtudiantDao dao, InteretEtudiantHistoryDao historyDao) {
        super(dao, historyDao);
    }

}