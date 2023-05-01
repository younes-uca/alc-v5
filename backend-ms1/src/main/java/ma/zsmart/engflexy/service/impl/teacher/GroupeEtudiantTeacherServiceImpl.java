package ma.zsmart.engflexy.service.impl.teacher;

import ma.zsmart.engflexy.bean.core.GroupeEtudiant;
import ma.zsmart.engflexy.bean.history.GroupeEtudiantHistory;
import ma.zsmart.engflexy.dao.criteria.core.GroupeEtudiantCriteria;
import ma.zsmart.engflexy.dao.criteria.history.GroupeEtudiantHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.GroupeEtudiantDao;
import ma.zsmart.engflexy.dao.facade.history.GroupeEtudiantHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.GroupeEtudiantSpecification;
import ma.zsmart.engflexy.service.facade.teacher.GroupeEtudiantTeacherService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import ma.zsmart.engflexy.bean.core.GroupeEtudiantDetail;

import ma.zsmart.engflexy.service.facade.teacher.GroupeEtudiantDetailTeacherService ;
import ma.zsmart.engflexy.service.facade.teacher.ParcoursTeacherService ;
import ma.zsmart.engflexy.service.facade.teacher.GroupeEtudeTeacherService ;


import java.util.List;
@Service
public class GroupeEtudiantTeacherServiceImpl extends AbstractServiceImpl<GroupeEtudiant,GroupeEtudiantHistory, GroupeEtudiantCriteria, GroupeEtudiantHistoryCriteria, GroupeEtudiantDao,
GroupeEtudiantHistoryDao> implements GroupeEtudiantTeacherService {

    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public GroupeEtudiant create(GroupeEtudiant t) {
        super.create(t);
        if (t.getGroupeEtudiantDetails() != null) {
                t.getGroupeEtudiantDetails().forEach(element-> {
                    element.setGroupeEtudiant(t);
                    groupeEtudiantDetailService.create(element);
            });
        }
        return t;
    }

    public GroupeEtudiant findWithAssociatedLists(Long id){
        GroupeEtudiant result = dao.findById(id).orElse(null);
        if(result!=null && result.getId() != null) {
            result.setGroupeEtudiantDetails(groupeEtudiantDetailService.findByGroupeEtudiantId(id));
        }
        return result;
    }
    @Transactional
    public void deleteAssociatedLists(Long id) {
        groupeEtudiantDetailService.deleteByGroupeEtudiantId(id);
    }


    public void updateWithAssociatedLists(GroupeEtudiant groupeEtudiant){
    if(groupeEtudiant !=null && groupeEtudiant.getId() != null){
            List<List<GroupeEtudiantDetail>> resultGroupeEtudiantDetails= groupeEtudiantDetailService.getToBeSavedAndToBeDeleted(groupeEtudiantDetailService.findByGroupeEtudiantId(groupeEtudiant.getId()),groupeEtudiant.getGroupeEtudiantDetails());
            groupeEtudiantDetailService.delete(resultGroupeEtudiantDetails.get(1));
            ListUtil.emptyIfNull(resultGroupeEtudiantDetails.get(0)).forEach(e -> e.setGroupeEtudiant(groupeEtudiant));
            groupeEtudiantDetailService.update(resultGroupeEtudiantDetails.get(0),true);
    }
    }


    public List<GroupeEtudiant> findByGroupeEtudeId(Long id){
        return dao.findByGroupeEtudeId(id);
    }
    public int deleteByGroupeEtudeId(Long id){
        return dao.deleteByGroupeEtudeId(id);
    }
    public List<GroupeEtudiant> findByParcoursId(Long id){
        return dao.findByParcoursId(id);
    }
    public int deleteByParcoursId(Long id){
        return dao.deleteByParcoursId(id);
    }
    public List<GroupeEtudiant> findByProfId(Long id){
        return dao.findByProfId(id);
    }
    public int deleteByProfId(Long id){
        return dao.deleteByProfId(id);
    }

    public void configure() {
        super.configure(GroupeEtudiant.class,GroupeEtudiantHistory.class, GroupeEtudiantHistoryCriteria.class, GroupeEtudiantSpecification.class);
    }

    @Autowired
    private GroupeEtudiantDetailTeacherService groupeEtudiantDetailService ;
    @Autowired
    private ParcoursTeacherService parcoursService ;
    @Autowired
    private GroupeEtudeTeacherService groupeEtudeService ;
    public GroupeEtudiantTeacherServiceImpl(GroupeEtudiantDao dao, GroupeEtudiantHistoryDao historyDao) {
        super(dao, historyDao);
    }

}