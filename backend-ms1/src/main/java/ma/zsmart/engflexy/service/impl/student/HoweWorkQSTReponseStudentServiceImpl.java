package ma.zsmart.engflexy.service.impl.student;

import ma.zsmart.engflexy.bean.core.HoweWorkQSTReponse;
import ma.zsmart.engflexy.bean.history.HoweWorkQSTReponseHistory;
import ma.zsmart.engflexy.dao.criteria.core.HoweWorkQSTReponseCriteria;
import ma.zsmart.engflexy.dao.criteria.history.HoweWorkQSTReponseHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.HoweWorkQSTReponseDao;
import ma.zsmart.engflexy.dao.facade.history.HoweWorkQSTReponseHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.HoweWorkQSTReponseSpecification;
import ma.zsmart.engflexy.service.facade.student.HoweWorkQSTReponseStudentService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;


import ma.zsmart.engflexy.service.facade.student.EtatReponseStudentService ;
import ma.zsmart.engflexy.service.facade.student.HomeWorkQuestionStudentService ;


import java.util.List;
@Service
public class HoweWorkQSTReponseStudentServiceImpl extends AbstractServiceImpl<HoweWorkQSTReponse,HoweWorkQSTReponseHistory, HoweWorkQSTReponseCriteria, HoweWorkQSTReponseHistoryCriteria, HoweWorkQSTReponseDao,
HoweWorkQSTReponseHistoryDao> implements HoweWorkQSTReponseStudentService {


    public HoweWorkQSTReponse findByReferenceEntity(HoweWorkQSTReponse t){
        return  dao.findByRef(t.getRef());
    }

    public List<HoweWorkQSTReponse> findByEtatReponseId(Long id){
        return dao.findByEtatReponseId(id);
    }
    public int deleteByEtatReponseId(Long id){
        return dao.deleteByEtatReponseId(id);
    }
    public List<HoweWorkQSTReponse> findByHomeWorkQuestionId(Long id){
        return dao.findByHomeWorkQuestionId(id);
    }
    public int deleteByHomeWorkQuestionId(Long id){
        return dao.deleteByHomeWorkQuestionId(id);
    }

    public void configure() {
        super.configure(HoweWorkQSTReponse.class,HoweWorkQSTReponseHistory.class, HoweWorkQSTReponseHistoryCriteria.class, HoweWorkQSTReponseSpecification.class);
    }

    @Autowired
    private EtatReponseStudentService etatReponseService ;
    @Autowired
    private HomeWorkQuestionStudentService homeWorkQuestionService ;
    public HoweWorkQSTReponseStudentServiceImpl(HoweWorkQSTReponseDao dao, HoweWorkQSTReponseHistoryDao historyDao) {
        super(dao, historyDao);
    }

}