package ma.zsmart.engflexy.service.impl.teacher;

import ma.zsmart.engflexy.bean.core.ClassAverageBonusProf;
import ma.zsmart.engflexy.bean.history.ClassAverageBonusProfHistory;
import ma.zsmart.engflexy.dao.criteria.core.ClassAverageBonusProfCriteria;
import ma.zsmart.engflexy.dao.criteria.history.ClassAverageBonusProfHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.ClassAverageBonusProfDao;
import ma.zsmart.engflexy.dao.facade.history.ClassAverageBonusProfHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.ClassAverageBonusProfSpecification;
import ma.zsmart.engflexy.service.facade.teacher.ClassAverageBonusProfTeacherService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;


import ma.zsmart.engflexy.service.facade.teacher.SalaryTeacherService ;


import java.util.List;
@Service
public class ClassAverageBonusProfTeacherServiceImpl extends AbstractServiceImpl<ClassAverageBonusProf,ClassAverageBonusProfHistory, ClassAverageBonusProfCriteria, ClassAverageBonusProfHistoryCriteria, ClassAverageBonusProfDao,
ClassAverageBonusProfHistoryDao> implements ClassAverageBonusProfTeacherService {



    public List<ClassAverageBonusProf> findByProfId(Long id){
        return dao.findByProfId(id);
    }
    public int deleteByProfId(Long id){
        return dao.deleteByProfId(id);
    }
    public List<ClassAverageBonusProf> findBySalaryId(Long id){
        return dao.findBySalaryId(id);
    }
    public int deleteBySalaryId(Long id){
        return dao.deleteBySalaryId(id);
    }

    public void configure() {
        super.configure(ClassAverageBonusProf.class,ClassAverageBonusProfHistory.class, ClassAverageBonusProfHistoryCriteria.class, ClassAverageBonusProfSpecification.class);
    }

    @Autowired
    private SalaryTeacherService salaryService ;
    public ClassAverageBonusProfTeacherServiceImpl(ClassAverageBonusProfDao dao, ClassAverageBonusProfHistoryDao historyDao) {
        super(dao, historyDao);
    }

}