package  ma.zsmart.engflexy.dao.specification.core;

import ma.zsmart.engflexy.zynerator.specification.AbstractSpecification;
import ma.zsmart.engflexy.dao.criteria.core.CategorieProfCriteria;
import ma.zsmart.engflexy.bean.core.CategorieProf;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class CategorieProfSpecification extends  AbstractSpecification<CategorieProfCriteria, CategorieProf>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("code", criteria.getCode(),criteria.getCodeLike());
        addPredicate("level", criteria.getLevel(),criteria.getLevelLike());
        addPredicateBigDecimal("lessonRate", criteria.getLessonRate(), criteria.getLessonRateMin(), criteria.getLessonRateMax());
    }

    public CategorieProfSpecification(CategorieProfCriteria criteria) {
        super(criteria);
    }

    public CategorieProfSpecification(CategorieProfCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
