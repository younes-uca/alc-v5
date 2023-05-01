package ma.zsmart.engflexy.service.impl.student;

import ma.zsmart.engflexy.bean.core.ScheduleProf;
import ma.zsmart.engflexy.bean.history.ScheduleProfHistory;
import ma.zsmart.engflexy.dao.criteria.core.ScheduleProfCriteria;
import ma.zsmart.engflexy.dao.criteria.history.ScheduleProfHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.ScheduleProfDao;
import ma.zsmart.engflexy.dao.facade.history.ScheduleProfHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.ScheduleProfSpecification;
import ma.zsmart.engflexy.service.facade.student.ScheduleProfStudentService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;


import ma.zsmart.engflexy.service.facade.student.GroupeEtudiantStudentService ;
import ma.zsmart.engflexy.service.facade.student.CoursStudentService ;


import java.util.List;
@Service
public class ScheduleProfStudentServiceImpl extends AbstractServiceImpl<ScheduleProf,ScheduleProfHistory, ScheduleProfCriteria, ScheduleProfHistoryCriteria, ScheduleProfDao,
ScheduleProfHistoryDao> implements ScheduleProfStudentService {



    public List<ScheduleProf> findByGroupeEtudiantId(Long id){
        return dao.findByGroupeEtudiantId(id);
    }
    public int deleteByGroupeEtudiantId(Long id){
        return dao.deleteByGroupeEtudiantId(id);
    }
    public List<ScheduleProf> findByProfId(Long id){
        return dao.findByProfId(id);
    }
    public int deleteByProfId(Long id){
        return dao.deleteByProfId(id);
    }
    public List<ScheduleProf> findByCoursId(Long id){
        return dao.findByCoursId(id);
    }
    public int deleteByCoursId(Long id){
        return dao.deleteByCoursId(id);
    }

    public void configure() {
        super.configure(ScheduleProf.class,ScheduleProfHistory.class, ScheduleProfHistoryCriteria.class, ScheduleProfSpecification.class);
    }

    @Autowired
    private GroupeEtudiantStudentService groupeEtudiantService ;
    @Autowired
    private CoursStudentService coursService ;
    public ScheduleProfStudentServiceImpl(ScheduleProfDao dao, ScheduleProfHistoryDao historyDao) {
        super(dao, historyDao);
    }

}