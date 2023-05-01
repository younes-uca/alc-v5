package ma.zsmart.engflexy.service.impl.teacher;

import ma.zsmart.engflexy.bean.core.WorkloadBonusProf;
import ma.zsmart.engflexy.bean.history.WorkloadBonusProfHistory;
import ma.zsmart.engflexy.dao.criteria.core.WorkloadBonusProfCriteria;
import ma.zsmart.engflexy.dao.criteria.history.WorkloadBonusProfHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.WorkloadBonusProfDao;
import ma.zsmart.engflexy.dao.facade.history.WorkloadBonusProfHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.WorkloadBonusProfSpecification;
import ma.zsmart.engflexy.service.facade.teacher.WorkloadBonusProfTeacherService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;


import ma.zsmart.engflexy.service.facade.teacher.SalaryTeacherService ;


import java.util.List;
@Service
public class WorkloadBonusProfTeacherServiceImpl extends AbstractServiceImpl<WorkloadBonusProf,WorkloadBonusProfHistory, WorkloadBonusProfCriteria, WorkloadBonusProfHistoryCriteria, WorkloadBonusProfDao,
WorkloadBonusProfHistoryDao> implements WorkloadBonusProfTeacherService {



    public List<WorkloadBonusProf> findByWorkloadBonusId(Long id){
        return dao.findByWorkloadBonusId(id);
    }
    public int deleteByWorkloadBonusId(Long id){
        return dao.deleteByWorkloadBonusId(id);
    }
    public List<WorkloadBonusProf> findByProfId(Long id){
        return dao.findByProfId(id);
    }
    public int deleteByProfId(Long id){
        return dao.deleteByProfId(id);
    }
    public List<WorkloadBonusProf> findBySalaryId(Long id){
        return dao.findBySalaryId(id);
    }
    public int deleteBySalaryId(Long id){
        return dao.deleteBySalaryId(id);
    }

    public void configure() {
        super.configure(WorkloadBonusProf.class,WorkloadBonusProfHistory.class, WorkloadBonusProfHistoryCriteria.class, WorkloadBonusProfSpecification.class);
    }

    @Autowired
    private SalaryTeacherService salaryService ;
    public WorkloadBonusProfTeacherServiceImpl(WorkloadBonusProfDao dao, WorkloadBonusProfHistoryDao historyDao) {
        super(dao, historyDao);
    }

}