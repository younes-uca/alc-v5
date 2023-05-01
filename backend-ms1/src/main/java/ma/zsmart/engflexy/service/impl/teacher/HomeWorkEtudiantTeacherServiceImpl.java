package ma.zsmart.engflexy.service.impl.teacher;

import ma.zsmart.engflexy.bean.core.HomeWorkEtudiant;
import ma.zsmart.engflexy.bean.history.HomeWorkEtudiantHistory;
import ma.zsmart.engflexy.dao.criteria.core.HomeWorkEtudiantCriteria;
import ma.zsmart.engflexy.dao.criteria.history.HomeWorkEtudiantHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.HomeWorkEtudiantDao;
import ma.zsmart.engflexy.dao.facade.history.HomeWorkEtudiantHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.HomeWorkEtudiantSpecification;
import ma.zsmart.engflexy.service.facade.teacher.HomeWorkEtudiantTeacherService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import ma.zsmart.engflexy.bean.core.ReponseEtudiantHomeWork;

import ma.zsmart.engflexy.service.facade.teacher.ResultatHomeWorkTeacherService ;
import ma.zsmart.engflexy.service.facade.teacher.HomeWorkTeacherService ;
import ma.zsmart.engflexy.service.facade.teacher.ReponseEtudiantHomeWorkTeacherService ;


import java.util.List;
@Service
public class HomeWorkEtudiantTeacherServiceImpl extends AbstractServiceImpl<HomeWorkEtudiant,HomeWorkEtudiantHistory, HomeWorkEtudiantCriteria, HomeWorkEtudiantHistoryCriteria, HomeWorkEtudiantDao,
HomeWorkEtudiantHistoryDao> implements HomeWorkEtudiantTeacherService {

    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public HomeWorkEtudiant create(HomeWorkEtudiant t) {
        super.create(t);
        if (t.getReponseEtudiantHomeWorks() != null) {
                t.getReponseEtudiantHomeWorks().forEach(element-> {
                    element.setHomeWorkEtudiant(t);
                    reponseEtudiantHomeWorkService.create(element);
            });
        }
        return t;
    }

    public HomeWorkEtudiant findWithAssociatedLists(Long id){
        HomeWorkEtudiant result = dao.findById(id).orElse(null);
        if(result!=null && result.getId() != null) {
            result.setReponseEtudiantHomeWorks(reponseEtudiantHomeWorkService.findByHomeWorkEtudiantId(id));
        }
        return result;
    }
    @Transactional
    public void deleteAssociatedLists(Long id) {
        reponseEtudiantHomeWorkService.deleteByHomeWorkEtudiantId(id);
    }


    public void updateWithAssociatedLists(HomeWorkEtudiant homeWorkEtudiant){
    if(homeWorkEtudiant !=null && homeWorkEtudiant.getId() != null){
            List<List<ReponseEtudiantHomeWork>> resultReponseEtudiantHomeWorks= reponseEtudiantHomeWorkService.getToBeSavedAndToBeDeleted(reponseEtudiantHomeWorkService.findByHomeWorkEtudiantId(homeWorkEtudiant.getId()),homeWorkEtudiant.getReponseEtudiantHomeWorks());
            reponseEtudiantHomeWorkService.delete(resultReponseEtudiantHomeWorks.get(1));
            ListUtil.emptyIfNull(resultReponseEtudiantHomeWorks.get(0)).forEach(e -> e.setHomeWorkEtudiant(homeWorkEtudiant));
            reponseEtudiantHomeWorkService.update(resultReponseEtudiantHomeWorks.get(0),true);
    }
    }


    public List<HomeWorkEtudiant> findByEtudiantId(Long id){
        return dao.findByEtudiantId(id);
    }
    public int deleteByEtudiantId(Long id){
        return dao.deleteByEtudiantId(id);
    }
    public List<HomeWorkEtudiant> findByHomeWorkId(Long id){
        return dao.findByHomeWorkId(id);
    }
    public int deleteByHomeWorkId(Long id){
        return dao.deleteByHomeWorkId(id);
    }
    public List<HomeWorkEtudiant> findByResultatHomeWorkId(Long id){
        return dao.findByResultatHomeWorkId(id);
    }
    public int deleteByResultatHomeWorkId(Long id){
        return dao.deleteByResultatHomeWorkId(id);
    }

    public void configure() {
        super.configure(HomeWorkEtudiant.class,HomeWorkEtudiantHistory.class, HomeWorkEtudiantHistoryCriteria.class, HomeWorkEtudiantSpecification.class);
    }

    @Autowired
    private ResultatHomeWorkTeacherService resultatHomeWorkService ;
    @Autowired
    private HomeWorkTeacherService homeWorkService ;
    @Autowired
    private ReponseEtudiantHomeWorkTeacherService reponseEtudiantHomeWorkService ;
    public HomeWorkEtudiantTeacherServiceImpl(HomeWorkEtudiantDao dao, HomeWorkEtudiantHistoryDao historyDao) {
        super(dao, historyDao);
    }

}