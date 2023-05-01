package ma.zsmart.engflexy.service.impl.student;

import ma.zsmart.engflexy.bean.core.FaqEtudiant;
import ma.zsmart.engflexy.bean.history.FaqEtudiantHistory;
import ma.zsmart.engflexy.dao.criteria.core.FaqEtudiantCriteria;
import ma.zsmart.engflexy.dao.criteria.history.FaqEtudiantHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.FaqEtudiantDao;
import ma.zsmart.engflexy.dao.facade.history.FaqEtudiantHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.FaqEtudiantSpecification;
import ma.zsmart.engflexy.service.facade.student.FaqEtudiantStudentService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;


import ma.zsmart.engflexy.service.facade.student.FaqTypeStudentService ;


import java.util.List;
@Service
public class FaqEtudiantStudentServiceImpl extends AbstractServiceImpl<FaqEtudiant,FaqEtudiantHistory, FaqEtudiantCriteria, FaqEtudiantHistoryCriteria, FaqEtudiantDao,
FaqEtudiantHistoryDao> implements FaqEtudiantStudentService {



    public List<FaqEtudiant> findByEtudiantId(Long id){
        return dao.findByEtudiantId(id);
    }
    public int deleteByEtudiantId(Long id){
        return dao.deleteByEtudiantId(id);
    }
    public List<FaqEtudiant> findByAdminId(Long id){
        return dao.findByAdminId(id);
    }
    public int deleteByAdminId(Long id){
        return dao.deleteByAdminId(id);
    }
    public List<FaqEtudiant> findByFaqTypeId(Long id){
        return dao.findByFaqTypeId(id);
    }
    public int deleteByFaqTypeId(Long id){
        return dao.deleteByFaqTypeId(id);
    }

    public void configure() {
        super.configure(FaqEtudiant.class,FaqEtudiantHistory.class, FaqEtudiantHistoryCriteria.class, FaqEtudiantSpecification.class);
    }

    @Autowired
    private FaqTypeStudentService faqTypeService ;
    public FaqEtudiantStudentServiceImpl(FaqEtudiantDao dao, FaqEtudiantHistoryDao historyDao) {
        super(dao, historyDao);
    }

}