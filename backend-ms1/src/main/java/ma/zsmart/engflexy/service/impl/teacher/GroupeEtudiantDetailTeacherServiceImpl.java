package ma.zsmart.engflexy.service.impl.teacher;

import ma.zsmart.engflexy.bean.core.GroupeEtudiantDetail;
import ma.zsmart.engflexy.bean.history.GroupeEtudiantDetailHistory;
import ma.zsmart.engflexy.dao.criteria.core.GroupeEtudiantDetailCriteria;
import ma.zsmart.engflexy.dao.criteria.history.GroupeEtudiantDetailHistoryCriteria;
import ma.zsmart.engflexy.dao.facade.core.GroupeEtudiantDetailDao;
import ma.zsmart.engflexy.dao.facade.history.GroupeEtudiantDetailHistoryDao;
import ma.zsmart.engflexy.dao.specification.core.GroupeEtudiantDetailSpecification;
import ma.zsmart.engflexy.service.facade.teacher.GroupeEtudiantDetailTeacherService;
import ma.zsmart.engflexy.zynerator.service.AbstractServiceImpl;
import ma.zsmart.engflexy.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;


import ma.zsmart.engflexy.service.facade.teacher.GroupeEtudiantTeacherService ;


import java.util.List;
@Service
public class GroupeEtudiantDetailTeacherServiceImpl extends AbstractServiceImpl<GroupeEtudiantDetail,GroupeEtudiantDetailHistory, GroupeEtudiantDetailCriteria, GroupeEtudiantDetailHistoryCriteria, GroupeEtudiantDetailDao,
GroupeEtudiantDetailHistoryDao> implements GroupeEtudiantDetailTeacherService {



    public List<GroupeEtudiantDetail> findByGroupeEtudiantId(Long id){
        return dao.findByGroupeEtudiantId(id);
    }
    public int deleteByGroupeEtudiantId(Long id){
        return dao.deleteByGroupeEtudiantId(id);
    }
    public List<GroupeEtudiantDetail> findByEtudiantId(Long id){
        return dao.findByEtudiantId(id);
    }
    public int deleteByEtudiantId(Long id){
        return dao.deleteByEtudiantId(id);
    }

    public void configure() {
        super.configure(GroupeEtudiantDetail.class,GroupeEtudiantDetailHistory.class, GroupeEtudiantDetailHistoryCriteria.class, GroupeEtudiantDetailSpecification.class);
    }

    @Autowired
    private GroupeEtudiantTeacherService groupeEtudiantService ;
    public GroupeEtudiantDetailTeacherServiceImpl(GroupeEtudiantDetailDao dao, GroupeEtudiantDetailHistoryDao historyDao) {
        super(dao, historyDao);
    }

}