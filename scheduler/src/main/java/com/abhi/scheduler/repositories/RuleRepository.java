package com.abhi.scheduler.repositories;

import java.io.Serializable;
import org.springframework.data.repository.CrudRepository;
import com.abhi.scheduler.models.Rule;

public interface RuleRepository extends CrudRepository<Rule, Serializable>{

}
