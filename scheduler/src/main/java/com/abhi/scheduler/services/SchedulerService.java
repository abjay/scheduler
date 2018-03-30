package com.abhi.scheduler.services;

import java.util.List;
import java.util.Optional;

import com.abhi.scheduler.models.Appointment;
import com.abhi.scheduler.models.Rule;


public interface SchedulerService {
	
	List<Rule> getAllRules();
	
	List<Appointment> getAllAppointments();
	
	Optional<Rule> getRule(Integer ruleId);
	
	Optional<Appointment> getAppointment(Integer appointmentId);
	
	Rule createRule(Rule rule);
	
	Rule updateRule(Rule rule);
	
	void deleteRule(Integer ruleId);
	
	void deleteAppointment(Integer appointmentId);
	
	void sendEmail(String emailAddress);
	
	Appointment selectTime(Appointment appointment);
	
}
