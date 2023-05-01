package ma.zsmart.engflexy.service.facade.teacher;

import java.util.List;
import ma.zsmart.engflexy.bean.core.Quiz;
import ma.zsmart.engflexy.dao.criteria.core.QuizCriteria;
import ma.zsmart.engflexy.dao.criteria.history.QuizHistoryCriteria;
import ma.zsmart.engflexy.zynerator.service.IService;

public interface QuizTeacherService extends  IService<Quiz,QuizCriteria, QuizHistoryCriteria>  {

    List<Quiz> findBySectionId(Long id);
    int deleteBySectionId(Long id);



}
