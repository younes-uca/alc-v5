package ma.zsmart.engflexy.service.facade.admin;

import java.util.List;
import ma.zsmart.engflexy.bean.core.HomeWorkQuestion;
import ma.zsmart.engflexy.dao.criteria.core.HomeWorkQuestionCriteria;
import ma.zsmart.engflexy.dao.criteria.history.HomeWorkQuestionHistoryCriteria;
import ma.zsmart.engflexy.zynerator.service.IService;

public interface HomeWorkQuestionAdminService extends  IService<HomeWorkQuestion,HomeWorkQuestionCriteria, HomeWorkQuestionHistoryCriteria>  {

    List<HomeWorkQuestion> findByTypeDeQuestionId(Long id);
    int deleteByTypeDeQuestionId(Long id);
    List<HomeWorkQuestion> findByHomeWorkId(Long id);
    int deleteByHomeWorkId(Long id);



}
