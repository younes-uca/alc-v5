package ma.zsmart.engflexy.service.impl.student;

import ma.zsmart.engflexy.bean.core.EtatInscription;
import ma.zsmart.engflexy.bean.history.EtatInscriptionHistory;
import ma.zsmart.engflexy.dao.criteria.core.EtatInscriptionCriteria;
import ma.zsmart.engflexy.dao.criteria.history.EtatInscriptionHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.EtatInscriptionDao;
import ma.zsmart.engflexy.dao.facade.history.EtatInscriptionHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.EtatInscriptionSpecification;
import ma.zsmart.engflexy.service.facade.student.EtatInscriptionStudentService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;






import java.util.List;
@Service
public class EtatInscriptionStudentServiceImpl extends AbstractServiceImpl<EtatInscription,EtatInscriptionHistory, EtatInscriptionCriteria, EtatInscriptionHistoryCriteria, EtatInscriptionDao,
EtatInscriptionHistoryDao> implements EtatInscriptionStudentService {


    public EtatInscription findByReferenceEntity(EtatInscription t){
        return  dao.findByLibelle(t.getLibelle());
    }


    public void configure() {
        super.configure(EtatInscription.class,EtatInscriptionHistory.class, EtatInscriptionHistoryCriteria.class, EtatInscriptionSpecification.class);
    }

    public EtatInscriptionStudentServiceImpl(EtatInscriptionDao dao, EtatInscriptionHistoryDao historyDao) {
        super(dao, historyDao);
    }

}