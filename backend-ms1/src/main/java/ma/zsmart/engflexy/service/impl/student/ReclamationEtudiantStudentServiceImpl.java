package ma.zsmart.engflexy.service.impl.student;

import ma.zsmart.engflexy.bean.core.ReclamationEtudiant;
import ma.zsmart.engflexy.bean.history.ReclamationEtudiantHistory;
import ma.zsmart.engflexy.dao.criteria.core.ReclamationEtudiantCriteria;
import ma.zsmart.engflexy.dao.criteria.history.ReclamationEtudiantHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.ReclamationEtudiantDao;
import ma.zsmart.engflexy.dao.facade.history.ReclamationEtudiantHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.ReclamationEtudiantSpecification;
import ma.zsmart.engflexy.service.facade.student.ReclamationEtudiantStudentService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;


import ma.zsmart.engflexy.service.facade.student.TypeReclamationEtudiantStudentService ;


import java.util.List;
@Service
public class ReclamationEtudiantStudentServiceImpl extends AbstractServiceImpl<ReclamationEtudiant,ReclamationEtudiantHistory, ReclamationEtudiantCriteria, ReclamationEtudiantHistoryCriteria, ReclamationEtudiantDao,
ReclamationEtudiantHistoryDao> implements ReclamationEtudiantStudentService {


    public ReclamationEtudiant findByReferenceEntity(ReclamationEtudiant t){
        return  dao.findByReference(t.getReference());
    }

    public List<ReclamationEtudiant> findByTypeReclamationEtudiantId(Long id){
        return dao.findByTypeReclamationEtudiantId(id);
    }
    public int deleteByTypeReclamationEtudiantId(Long id){
        return dao.deleteByTypeReclamationEtudiantId(id);
    }

    public void configure() {
        super.configure(ReclamationEtudiant.class,ReclamationEtudiantHistory.class, ReclamationEtudiantHistoryCriteria.class, ReclamationEtudiantSpecification.class);
    }

    @Autowired
    private TypeReclamationEtudiantStudentService typeReclamationEtudiantService ;
    public ReclamationEtudiantStudentServiceImpl(ReclamationEtudiantDao dao, ReclamationEtudiantHistoryDao historyDao) {
        super(dao, historyDao);
    }

}