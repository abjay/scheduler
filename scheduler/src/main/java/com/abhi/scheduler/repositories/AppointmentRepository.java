package com.abhi.scheduler.repositories;

import java.io.Serializable;
import org.springframework.data.repository.CrudRepository;
import com.abhi.scheduler.models.Appointment;

public interface AppointmentRepository extends CrudRepository<Appointment, Serializable>{

}
