package ma.zsmart.engflexy.service.impl.student;

import ma.zsmart.engflexy.bean.core.PackStudent;
import ma.zsmart.engflexy.bean.history.PackStudentHistory;
import ma.zsmart.engflexy.dao.criteria.core.PackStudentCriteria;
import ma.zsmart.engflexy.dao.criteria.history.PackStudentHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.PackStudentDao;
import ma.zsmart.engflexy.dao.facade.history.PackStudentHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.PackStudentSpecification;
import ma.zsmart.engflexy.service.facade.student.PackStudentStudentService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;


import ma.zsmart.engflexy.service.facade.student.ParcoursStudentService ;


import java.util.List;
@Service
public class PackStudentStudentServiceImpl extends AbstractServiceImpl<PackStudent,PackStudentHistory, PackStudentCriteria, PackStudentHistoryCriteria, PackStudentDao,
PackStudentHistoryDao> implements PackStudentStudentService {


    public PackStudent findByReferenceEntity(PackStudent t){
        return  dao.findByCode(t.getCode());
    }

    public List<PackStudent> findByParcoursId(Long id){
        return dao.findByParcoursId(id);
    }
    public int deleteByParcoursId(Long id){
        return dao.deleteByParcoursId(id);
    }
    public List<PackStudent> findByPriceId(Long id){
        return dao.findByPriceId(id);
    }
    public int deleteByPriceId(Long id){
        return dao.deleteByPriceId(id);
    }

    public void configure() {
        super.configure(PackStudent.class,PackStudentHistory.class, PackStudentHistoryCriteria.class, PackStudentSpecification.class);
    }

    @Autowired
    private ParcoursStudentService parcoursService ;
    public PackStudentStudentServiceImpl(PackStudentDao dao, PackStudentHistoryDao historyDao) {
        super(dao, historyDao);
    }

}