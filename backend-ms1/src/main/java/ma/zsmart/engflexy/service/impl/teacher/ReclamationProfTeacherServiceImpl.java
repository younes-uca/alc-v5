package ma.zsmart.engflexy.service.impl.teacher;

import ma.zsmart.engflexy.bean.core.ReclamationProf;
import ma.zsmart.engflexy.bean.history.ReclamationProfHistory;
import ma.zsmart.engflexy.dao.criteria.core.ReclamationProfCriteria;
import ma.zsmart.engflexy.dao.criteria.history.ReclamationProfHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.ReclamationProfDao;
import ma.zsmart.engflexy.dao.facade.history.ReclamationProfHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.ReclamationProfSpecification;
import ma.zsmart.engflexy.service.facade.teacher.ReclamationProfTeacherService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;


import ma.zsmart.engflexy.service.facade.teacher.TypeReclamationProfTeacherService ;


import java.util.List;
@Service
public class ReclamationProfTeacherServiceImpl extends AbstractServiceImpl<ReclamationProf,ReclamationProfHistory, ReclamationProfCriteria, ReclamationProfHistoryCriteria, ReclamationProfDao,
ReclamationProfHistoryDao> implements ReclamationProfTeacherService {


    public ReclamationProf findByReferenceEntity(ReclamationProf t){
        return  dao.findByReference(t.getReference());
    }

    public List<ReclamationProf> findByAdminId(Long id){
        return dao.findByAdminId(id);
    }
    public int deleteByAdminId(Long id){
        return dao.deleteByAdminId(id);
    }
    public List<ReclamationProf> findByProfId(Long id){
        return dao.findByProfId(id);
    }
    public int deleteByProfId(Long id){
        return dao.deleteByProfId(id);
    }
    public List<ReclamationProf> findByTypeReclamationProfId(Long id){
        return dao.findByTypeReclamationProfId(id);
    }
    public int deleteByTypeReclamationProfId(Long id){
        return dao.deleteByTypeReclamationProfId(id);
    }

    public void configure() {
        super.configure(ReclamationProf.class,ReclamationProfHistory.class, ReclamationProfHistoryCriteria.class, ReclamationProfSpecification.class);
    }

    @Autowired
    private TypeReclamationProfTeacherService typeReclamationProfService ;
    public ReclamationProfTeacherServiceImpl(ReclamationProfDao dao, ReclamationProfHistoryDao historyDao) {
        super(dao, historyDao);
    }

}